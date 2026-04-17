import 'dotenv/config'
import { createHash } from 'node:crypto'
import express from 'express'
import cors from 'cors'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const app = express()
app.use(cors())
app.use(express.json())

const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN
const SITE_URL = process.env.SITE_URL || 'https://classeapets.com.br'
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN
const META_PIXEL_ID = '1487904233336440'
const META_API_VERSION = 'v21.0'

if (!ACCESS_TOKEN) {
  console.error('MP_ACCESS_TOKEN não definida. Defina via variável de ambiente.')
  process.exit(1)
}

if (!META_CAPI_TOKEN) {
  console.warn('META_CAPI_TOKEN não definida — CAPI desabilitada.')
}

const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })
const preference = new Preference(client)

// Produtos disponíveis (centralizado para segurança — preço não vem do frontend)
const PRODUCTS = {
  'curso-adestrador-profissional': {
    title: 'Curso Adestrador Profissional - Classe A Pets',
    description: 'Formação presencial completa em adestramento de cães (~100h)',
    unit_price: 2660.00,
    currency_id: 'BRL',
  },
  'curso-adestrador-profissional-promo': {
    title: 'Curso Adestrador Profissional - Classe A Pets (Promo)',
    description: 'Formação presencial completa em adestramento de cães (~100h)',
    unit_price: 1577.00,
    currency_id: 'BRL',
  },
  'curso-dog-walker': {
    title: 'Curso Dog Walker Profissional - Classe A Pets',
    description: 'Formação presencial de Passeador de Cães (Dog Walker)',
    unit_price: 370.00,
    currency_id: 'BRL',
  },
}

app.post('/api/checkout', async (req, res) => {
  try {
    const { productId } = req.body

    const product = PRODUCTS[productId]
    if (!product) {
      return res.status(400).json({ error: 'Produto não encontrado.' })
    }

    const result = await preference.create({
      body: {
        items: [
          {
            title: product.title,
            description: product.description,
            quantity: 1,
            unit_price: product.unit_price,
            currency_id: product.currency_id,
          },
        ],
        back_urls: {
          success: `${SITE_URL}/pagamento/sucesso`,
          failure: `${SITE_URL}/pagamento/cancelado`,
          pending: `${SITE_URL}/pagamento/pendente`,
        },
        auto_return: 'approved',
        payment_methods: {
          installments: 12,
        },
        statement_descriptor: 'CLASSEAPETS',
      },
    })

    return res.json({ checkoutUrl: result.init_point })
  } catch (err) {
    console.error('Mercado Pago error:', err)
    return res.status(500).json({ error: 'Erro ao criar checkout. Tente novamente.' })
  }
})

// --- Meta Conversions API (CAPI) ---

function sha256(value) {
  if (!value) return undefined
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

function normalizePhone(phone) {
  if (!phone) return undefined
  const digits = phone.replace(/\D/g, '')
  return digits.startsWith('55') ? digits : `55${digits}`
}

app.post('/api/capi', async (req, res) => {
  if (!META_CAPI_TOKEN) {
    return res.status(503).json({ error: 'CAPI not configured' })
  }

  try {
    const { events } = req.body
    if (!Array.isArray(events) || events.length === 0) {
      return res.status(400).json({ error: 'events array required' })
    }

    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip
    const clientUa = req.headers['user-agent'] || ''

    const payload = events.map((evt) => {
      const userData = {
        client_ip_address: clientIp,
        client_user_agent: clientUa,
        ...(evt.fbc && { fbc: evt.fbc }),
        ...(evt.fbp && { fbp: evt.fbp }),
        ...(evt.email && { em: sha256(evt.email) }),
        ...(evt.phone && { ph: sha256(normalizePhone(evt.phone)) }),
        ...(evt.firstName && { fn: sha256(evt.firstName) }),
        ...(evt.lastName && { ln: sha256(evt.lastName) }),
        ...(evt.city && { ct: sha256(evt.city) }),
        ...(evt.state && { st: sha256(evt.state) }),
        ...(evt.country && { country: sha256(evt.country || 'br') }),
      }

      return {
        event_name: evt.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: evt.event_id,
        event_source_url: evt.source_url || SITE_URL,
        action_source: 'website',
        user_data: userData,
        ...(evt.custom_data && { custom_data: evt.custom_data }),
      }
    })

    const url = `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: payload,
        access_token: META_CAPI_TOKEN,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('CAPI error:', JSON.stringify(result))
      return res.status(response.status).json(result)
    }

    return res.json({ success: true, events_received: result.events_received })
  } catch (err) {
    console.error('CAPI request failed:', err.message)
    return res.status(500).json({ error: 'CAPI request failed' })
  }
})

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', capi: !!META_CAPI_TOKEN })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Mercado Pago API server running on port ${PORT}`)
})
