import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const app = express()
app.use(cors())
app.use(express.json())

const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN
const SITE_URL = process.env.SITE_URL || 'https://classeapets.com.br'

if (!ACCESS_TOKEN) {
  console.error('MP_ACCESS_TOKEN não definida. Defina via variável de ambiente.')
  process.exit(1)
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

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Mercado Pago API server running on port ${PORT}`)
})
