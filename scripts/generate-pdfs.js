/**
 * Generate lead magnet PDFs for Dog Walker campaign
 * With logo, photos, and improved marketing copy
 * Run: node scripts/generate-pdfs.js
 */
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { writeFileSync, readFileSync, mkdirSync } from 'fs'

/* ─── COLORS ─── */
const CYAN = rgb(0.18, 0.87, 0.94)
const CYAN_DIM = rgb(0.10, 0.50, 0.54)
const EMERALD = rgb(0.06, 0.73, 0.51)
const EMERALD_DIM = rgb(0.04, 0.45, 0.32)
const DARK = rgb(0.043, 0.067, 0.125)
const WHITE = rgb(1, 1, 1)
const LIGHT_GRAY = rgb(0.94, 0.96, 0.97)
const GRAY = rgb(0.55, 0.58, 0.63)
const TEXT = rgb(0.22, 0.24, 0.28)
const RED = rgb(0.85, 0.15, 0.10)
const RED_DIM = rgb(0.65, 0.12, 0.08)
const SUCCESS = rgb(0.06, 0.55, 0.38)

const PAGE_W = 595
const PAGE_H = 842
const M = 48
const CONTENT_W = PAGE_W - M * 2

/* ─── LOAD IMAGES ─── */
const logoPng = readFileSync('public/downloads/logo-pdf.png')
const brennoPng = readFileSync('public/downloads/foto-brenno-pdf.png')
const passeadorPng = readFileSync('public/downloads/servico-passeador-pdf.png')

/* ─── HELPERS ─── */

async function embedImages(doc) {
  const logo = await doc.embedPng(logoPng)
  const brenno = await doc.embedPng(brennoPng)
  const passeador = await doc.embedPng(passeadorPng)
  return { logo, brenno, passeador }
}

function drawHeader(page, font, fontBold, title, subtitle, logo, accentColor = CYAN) {
  page.drawRectangle({ x: 0, y: PAGE_H - 130, width: PAGE_W, height: 130, color: DARK })
  page.drawRectangle({ x: 0, y: PAGE_H - 134, width: PAGE_W, height: 4, color: accentColor })

  // Logo
  const logoScale = 36 / logo.height
  page.drawImage(logo, {
    x: M,
    y: PAGE_H - 48,
    width: logo.width * logoScale,
    height: 36,
  })

  // Title + subtitle below logo
  page.drawText(title, { x: M, y: PAGE_H - 72, size: 20, font: fontBold, color: WHITE })
  page.drawText(subtitle, { x: M, y: PAGE_H - 92, size: 10.5, font, color: accentColor })
  page.drawText('classeapets.com.br', { x: M, y: PAGE_H - 112, size: 8, font, color: GRAY })
}

function drawFooter(page, font, pageNum, total) {
  page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: 32, color: DARK })
  page.drawText('Classe A Pets | classeapets.com.br | WhatsApp: (11) 93406-6866', { x: M, y: 11, size: 7.5, font, color: GRAY })
  page.drawText(`${pageNum}/${total}`, { x: PAGE_W - M - 10, y: 11, size: 7.5, font, color: GRAY })
}

function drawSection(page, y, fontBold, text, accentColor = CYAN) {
  page.drawRectangle({ x: M, y: y - 3, width: 4, height: 18, color: accentColor })
  page.drawText(text, { x: M + 12, y, size: 14, font: fontBold, color: DARK })
  return y - 28
}

function drawBullet(page, y, font, text, color = CYAN, size = 9.5) {
  page.drawText('-', { x: M + 12, y, size: size + 1, font, color })
  return wrapText(page, y, font, text, M + 26, size, TEXT, CONTENT_W - 26)
}

function drawNumberedItem(page, y, font, fontBold, num, text, numColor = RED) {
  page.drawText(`${num}.`, { x: M + 12, y, size: 10, font: fontBold, color: numColor })
  return wrapText(page, y, font, text, M + 30, 9.5, TEXT, CONTENT_W - 30)
}

function drawCheckbox(page, y, font, text, accentColor = CYAN) {
  page.drawRectangle({ x: M + 12, y: y - 2, width: 10, height: 10, borderColor: accentColor, borderWidth: 1 })
  return wrapText(page, y, font, text, M + 28, 9.5, TEXT, CONTENT_W - 28)
}

function wrapText(page, y, font, text, x, size, color, maxW) {
  const words = text.split(' ')
  let line = ''
  let cy = y
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(test, size) > maxW && line) {
      page.drawText(line, { x, y: cy, size, font, color })
      cy -= size * 1.55
      line = word
    } else {
      line = test
    }
  }
  if (line) {
    page.drawText(line, { x, y: cy, size, font, color })
    cy -= size * 1.55
  }
  return cy
}

function drawParagraph(page, y, font, text, size = 9.5, color = TEXT) {
  return wrapText(page, y, font, text, M, size, color, CONTENT_W)
}

function drawBox(page, y, fontBold, font, title, lines, bgColor = LIGHT_GRAY, borderColor = CYAN, titleColor = DARK) {
  const lineH = 14
  const boxH = 28 + lines.length * lineH
  page.drawRectangle({ x: M, y: y - boxH + 16, width: CONTENT_W, height: boxH, color: bgColor, borderColor, borderWidth: 1 })
  page.drawText(title, { x: M + 14, y: y - 2, size: 11, font: fontBold, color: titleColor })
  let ly = y - 20
  for (const line of lines) {
    if (line) page.drawText(line, { x: M + 14, y: ly, size: 8.5, font, color: rgb(0.35, 0.38, 0.42) })
    ly -= lineH
  }
  return ly - 8
}

function drawStatRow(page, y, fontBold, font, stats, accentColor = CYAN) {
  const colW = CONTENT_W / stats.length
  for (let i = 0; i < stats.length; i++) {
    const x = M + colW * i
    page.drawRectangle({ x: x + 2, y: y - 38, width: colW - 4, height: 42, color: LIGHT_GRAY, borderColor: accentColor, borderWidth: 0.5 })
    page.drawText(stats[i].value, { x: x + 12, y: y - 12, size: 16, font: fontBold, color: accentColor })
    page.drawText(stats[i].label, { x: x + 12, y: y - 28, size: 7.5, font, color: GRAY })
  }
  return y - 52
}

function drawTableRow(page, y, font, fontBold, cols, widths, colors, bold = false) {
  const f = bold ? fontBold : font
  let x = M + 8
  for (let i = 0; i < cols.length; i++) {
    page.drawText(cols[i], { x, y, size: 8.5, font: f, color: colors[i] || TEXT })
    x += widths[i]
  }
  return y - 14
}

function drawLine(page, y, x, w) {
  page.drawRectangle({ x, y, width: w, height: 0.5, color: rgb(0.85, 0.87, 0.9) })
}

/* ═══════════════════════════════════════════════════════════════
   PDF 1: CERTIFICACAO DOG WALKER (3 paginas)
   ═══════════════════════════════════════════════════════════════ */

async function generateCertificacaoPDF() {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
  const imgs = await embedImages(doc)

  /* ── PAGE 1: Mercado + Lei ── */
  let p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'Certificacao Dog Walker Profissional', 'Guia Completo de Regulamentacao e Oportunidade', imgs.logo)

  let y = PAGE_H - 170

  // Hook
  y = drawParagraph(p, y, fontBold, 'A profissao de Dog Walker esta prestes a ser regulamentada no Brasil.', 10.5, DARK)
  y -= 3
  y = drawParagraph(p, y, font, 'Quem se certificar AGORA vai dominar um mercado de R$ 75 bilhoes enquanto a maioria ainda nem sabe que essa lei existe. Este guia explica tudo.')
  y -= 14

  // Stats
  y = drawSection(p, y, fontBold, 'O Mercado que Nao Para de Crescer')
  y = drawStatRow(p, y, fontBold, font, [
    { value: 'R$ 75,4 bi', label: 'Mercado pet/ano' },
    { value: '62 milhoes', label: 'Caes no Brasil' },
    { value: '+14%', label: 'Crescimento anual' },
    { value: '#1 SP', label: 'Maior demanda' },
  ])
  y -= 8

  y = drawBox(p, y, fontBold, font, 'Quanto Ganha um Dog Walker Profissional em SP', [
    'Valor por passeio: R$ 30 a R$ 80 (media R$ 60 para certificados)',
    'Passeios por dia: 3 a 5 caes em 2 turnos',
    'Faturamento mensal: R$ 4.000 a R$ 7.000',
    'Horario: 100% flexivel, ao ar livre, sem chefe',
    'Comparacao: Analista CLT junior = R$ 2.500, escritorio 8h/dia',
  ])

  // Lei
  y -= 5
  y = drawSection(p, y, fontBold, 'ALERTA: Nova Lei de Regulamentacao')
  y = drawParagraph(p, y, font, 'A Camara dos Deputados aprovou o Projeto de Lei que regulamenta a profissao de Dog Walker e Pet Sitter em todo o territorio nacional. Quem nao tiver certificacao sera PROIBIDO de atuar.')
  y -= 10

  y = drawBox(p, y, fontBold, font, '1. Treinamento Obrigatorio', [
    'Curso certificado em comportamento canino, tecnicas de manejo,',
    'conducao segura e primeiros socorros para animais.',
  ], LIGHT_GRAY, RED_DIM, RED_DIM)

  y = drawBox(p, y, fontBold, font, '2. Licenca Profissional Federal', [
    'Emitida por orgao credenciado pelo governo federal.',
    'Renovacao obrigatoria a cada 2 anos.',
  ], LIGHT_GRAY, RED_DIM, RED_DIM)

  y = drawBox(p, y, fontBold, font, '3. Avaliacao Pratica Presencial', [
    'Prova pratica com avaliador credenciado demonstrando',
    'competencia em campo. Aprovacao obrigatoria.',
  ], LIGHT_GRAY, RED_DIM, RED_DIM)

  y -= 2
  p.drawText('Quem NAO tiver certificacao: PROIBIDO de atuar legalmente.', { x: M, y, size: 9.5, font: fontBold, color: RED })
  y -= 15
  p.drawText('Quem se certificar AGORA: domina o mercado antes de todos.', { x: M, y, size: 9.5, font: fontBold, color: CYAN })

  drawFooter(p, font, 1, 3)

  /* ── PAGE 2: Curriculo do Curso + Foto do Brenno ── */
  p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'O Curso Classe A Pets', 'O unico curso de Dog Walker dado por um adestrador profissional', imgs.logo)

  y = PAGE_H - 162

  // Brenno photo + intro (side by side)
  const imgW = 100
  const imgH = 100
  p.drawImage(imgs.brenno, { x: M, y: y - imgH + 10, width: imgW, height: imgH })

  const textX = M + imgW + 16
  const textW = CONTENT_W - imgW - 16
  y = wrapText(p, y, fontBold, 'Brenno Rodrigues', textX, 12, DARK, textW)
  y += 2
  y = wrapText(p, y, font, 'Adestrador profissional, +500 caes atendidos, +250 familias. Largou a engenharia e construiu a Classe A Pets do zero.', textX, 9, GRAY, textW)
  y -= 6
  y = wrapText(p, y, fontBold, 'Voce nao aprende so a passear. Aprende a ENTENDER o cao. Isso e o que separa quem cobra R$ 20 de quem cobra R$ 80.', textX, 9.5, DARK, textW)

  y -= 20

  const modules = [
    { title: 'Modulo 1 -- Comportamento Canino', items: [
      'Linguagem corporal: sinais calmantes, estresse e medo',
      'Sinais de Turid Rugaas -- leitura profissional do cao',
      'Niveis de excitacao, foco e limiar de reatividade',
      'Como avaliar um cao em 30 segundos antes do passeio',
    ]},
    { title: 'Modulo 2 -- Tecnicas de Manejo e Conducao', items: [
      'Tipos de guia, coleira e equipamentos profissionais',
      'Conducao segura: postura, passo, mudanca de direcao',
      'Passeio com multiplos caes -- ate 5 simultaneamente',
      'Manejo de caes reativos, medrosos e agressivos',
    ]},
    { title: 'Modulo 3 -- Protocolos de Seguranca', items: [
      'Protocolo completo de separacao de briga entre caes',
      'Primeiros socorros: engasgo, insolacao, ferimentos',
      'Procedimento de emergencia: fuga, atropelamento, convulsao',
      'Responsabilidade legal -- o que a lei exige de voce',
    ]},
    { title: 'Modulo 4 -- Negocio e Profissionalizacao', items: [
      'Modelo de contrato de prestacao de servico (incluso)',
      'Precificacao estrategica: como justificar R$ 60-80/passeio',
      'Relatorios para tutores -- fidelizacao e indicacoes',
      'CNPJ (MEI), nota fiscal e formalizacao',
    ]},
    { title: 'Modulo 5 -- Pratica em Campo (presencial SP)', items: [
      'Passeios supervisionados com caes reais',
      'Leitura de cenarios urbanos ao vivo',
      'Gestao de imprevistos com feedback individual',
    ]},
  ]

  for (const mod of modules) {
    y = drawSection(p, y, fontBold, mod.title)
    for (const item of mod.items) {
      y = drawBullet(p, y, font, item)
    }
    y -= 5
  }

  drawFooter(p, font, 2, 3)

  /* ── PAGE 3: Certificacao + Comparativo + CTA + Foto DW ── */
  p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'Sua Certificacao + Proximo Passo', 'Tudo que voce leva ao concluir o curso', imgs.logo)

  y = PAGE_H - 165

  y = drawSection(p, y, fontBold, 'O Que Voce Recebe ao Se Certificar')
  const certs = [
    'Certificado oficial de Dog Walker Profissional (Classe A Pets)',
    'Modelo de contrato profissional pronto para usar',
    'Kit de precificacao com planilha de custos e margem',
    'Ficha de avaliacao comportamental do cao (template)',
    'Protocolo completo de emergencias (imprimivel)',
    'Acesso vitalicio ao grupo VIP de profissionais no WhatsApp',
    'Acompanhamento pos-curso com o Brenno por 30 dias',
  ]
  for (const item of certs) {
    y = drawBullet(p, y, font, item, SUCCESS)
  }

  y -= 12
  y = drawSection(p, y, fontBold, 'Amador vs. Profissional Certificado')
  y -= 2
  const tw = [120, 150, 150]
  y = drawTableRow(p, y, font, fontBold, ['Aspecto', 'Amador', 'Certificado'], tw, [TEXT, RED_DIM, CYAN_DIM], true)
  drawLine(p, y + 4, M + 8, CONTENT_W - 16)
  y -= 4
  const rows = [
    ['Preco por passeio', 'R$ 15-20', 'R$ 60-80'],
    ['Documentacao', 'Sem contrato', 'Contrato + relatorio'],
    ['Preparo', 'Panico em briga', 'Protocolo treinado'],
    ['Resultado em 1 ano', 'Desiste em 6 meses', 'R$ 4.000-7.000/mes'],
    ['Regulamentacao', 'Proibido pela nova lei', 'Certificado e legal'],
    ['Clientes', 'Depende de preco baixo', 'Indicacao e reputacao'],
  ]
  for (const row of rows) {
    y = drawTableRow(p, y, font, font, row, tw, [TEXT, rgb(0.55, 0.25, 0.2), rgb(0.1, 0.5, 0.45)])
  }

  // Foto passeador
  y -= 15
  const dwImgW = 90
  const dwImgH = 90
  p.drawImage(imgs.passeador, { x: PAGE_W - M - dwImgW, y: y - dwImgH + 15, width: dwImgW, height: dwImgH })

  y = drawSection(p, y, fontBold, 'Seu Proximo Passo')
  const ctaTextW = CONTENT_W - dwImgW - 20
  y = wrapText(p, y, fontBold, 'O mercado esta se profissionalizando. A lei vai chegar.', M, 10, DARK, ctaTextW)
  y -= 2
  y = wrapText(p, y, font, 'A pergunta nao e SE voce vai se certificar -- e QUANDO. Quem agir primeiro domina o mercado.', M, 9.5, TEXT, ctaTextW)
  y -= 15

  y = drawBox(p, y, fontBold, font, 'Fale com o Brenno e Garanta Sua Vaga', [
    'WhatsApp: (11) 93406-6866',
    'Curso: classeapets.com.br/curso-dog-walker-profissional',
    'Instagram: @classeapets',
    '',
    'Turmas presenciais em Sao Paulo -- vagas limitadas.',
  ], LIGHT_GRAY, CYAN)

  y -= 12
  p.drawText('Daqui a 1 ano voce vai desejar ter comecado hoje.', { x: M, y, size: 11, font: fontBold, color: CYAN })

  drawFooter(p, font, 3, 3)

  const bytes = await doc.save()
  mkdirSync('public/downloads', { recursive: true })
  writeFileSync('public/downloads/certificacao-dog-walker.pdf', bytes)
  console.log('OK: certificacao-dog-walker.pdf (3 paginas)')
}

/* ═══════════════════════════════════════════════════════════════
   PDF 2: GUIA DE TRANSICAO DE CARREIRA (3 paginas)
   - Sem datas
   - Curso como ponto principal da virada
   - Pontos-chave de valor
   ═══════════════════════════════════════════════════════════════ */

async function generateGuiaPDF() {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
  const imgs = await embedImages(doc)

  /* ── PAGE 1: Historia + Valor + Mercado ── */
  let p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'Transicao de Carreira: Dog Walker', 'O Guia para Quem Quer Mudar de Vida', imgs.logo, EMERALD)

  let y = PAGE_H - 168

  // Hook emocional
  y = drawParagraph(p, y, fontBold, 'Se voce esta lendo isso, uma parte de voce ja sabe que existe algo melhor la fora.', 10.5, DARK)
  y -= 3
  y = drawParagraph(p, y, font, 'Este nao e mais um guia generico. E o mesmo metodo que transformou um engenheiro insatisfeito num profissional que fatura mais de R$ 6.000/mes ao ar livre, fazendo o que ama. E agora ele esta nas suas maos.')
  y -= 12

  // Valor box
  y = drawBox(p, y, fontBold, font, 'O Que Torna Este Material Diferente', [
    'Baseado numa historia REAL -- nao teoria, nao promessa vazia',
    'Plano de acao pratico com checklist executavel',
    'Comparativo honesto: amador vs. profissional (numeros reais)',
    'Os 5 erros que destroem iniciantes (e como evitar todos)',
    'O mesmo metodo usado por quem ja fez a transicao com sucesso',
  ], LIGHT_GRAY, EMERALD, EMERALD_DIM)

  y -= 5

  // Brenno photo + historia
  y = drawSection(p, y, fontBold, 'A Historia Real do Brenno', EMERALD)

  const imgW = 90
  const imgH = 90
  p.drawImage(imgs.brenno, { x: PAGE_W - M - imgW, y: y - imgH, width: imgW, height: imgH })
  const storyW = CONTENT_W - imgW - 16

  y = wrapText(p, y, font, 'Brenno era engenheiro. CLT. 8 horas por dia num escritorio. Insatisfeito. Ate que decidiu mudar.', M, 9.5, TEXT, storyW)
  y -= 5
  y = wrapText(p, y, font, 'Comecou com 1 cachorro, medo e zero clientes. Faturava R$ 800. Mas nao parou. Estudou comportamento canino, criou processos, investiu em formacao.', M, 9.5, TEXT, storyW)
  y -= 5
  y = wrapText(p, y, font, 'Em menos de 1 ano: agenda lotada, R$ 6.000+/mes, e o inicio da Classe A Pets. Hoje ja atendeu mais de 250 familias e 500 caes.', M, 9.5, TEXT, storyW)
  y -= 8
  y = wrapText(p, y, fontBold, 'Ele nao tinha experiencia, contatos ou dinheiro guardado. Ele tinha METODO.', M, 10, DARK, CONTENT_W)
  y -= 15

  // Mercado
  y = drawSection(p, y, fontBold, 'Por Que Dog Walking', EMERALD)
  y = drawStatRow(p, y, fontBold, font, [
    { value: 'R$ 4-7 mil', label: 'Renda mensal' },
    { value: '62 milhoes', label: 'Caes no Brasil' },
    { value: '100%', label: 'Ao ar livre' },
    { value: 'Flexivel', label: 'Seu horario' },
  ], EMERALD)
  y -= 5
  y = drawParagraph(p, y, font, 'O Brasil tem mais caes do que criancas. A demanda por passeadores profissionais explodiu, mas a oferta de profissionais QUALIFICADOS e minima. Quem se preparar agora escolhe clientes, nao disputa preco.')
  y -= 12

  // 5 Erros
  y = drawSection(p, y, fontBold, '5 Erros que Destroem Iniciantes', EMERALD)
  const erros = [
    'Aceitar qualquer cao sem avaliacao de temperamento',
    'Trabalhar sem contrato -- se o cao escapa, VOCE paga',
    'Cobrar R$ 15/passeio -- profissional cobra R$ 60-80',
    'Nao saber ler linguagem corporal (o erro mais perigoso)',
    'Zero protocolo de emergencia -- panico e processo',
  ]
  for (let i = 0; i < erros.length; i++) {
    y = drawNumberedItem(p, y, font, fontBold, i + 1, erros[i], RED)
    y -= 2
  }

  drawFooter(p, font, 1, 3)

  /* ── PAGE 2: Dor vs Sonho + O CURSO como virada ── */
  p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'O Ponto de Virada', 'O curso que transforma a sua decisao em acao', imgs.logo, EMERALD)

  y = PAGE_H - 165

  // Dor vs Sonho
  y = drawSection(p, y, fontBold, 'Onde Voce Esta Agora', RED_DIM)
  const dores = [
    'Acordar sem vontade, sabendo que o dia vai ser igual',
    'Contar as horas pro fim do expediente todo dia',
    'Salario que mal paga as contas e sem perspectiva',
    'Sentir que os melhores anos estao passando',
    'Pensar "eu poderia estar fazendo algo que eu amo"',
  ]
  for (const d of dores) {
    p.drawText('x', { x: M + 12, y, size: 9, font: fontBold, color: RED })
    y = wrapText(p, y, font, d, M + 26, 9.5, rgb(0.45, 0.3, 0.3), CONTENT_W - 26)
    y -= 1
  }
  y -= 8

  y = drawSection(p, y, fontBold, 'Onde Voce Pode Estar em 90 Dias', EMERALD)
  const sonhos = [
    'Trabalhando ao ar livre, no SEU horario, com caes',
    'Faturando R$ 4.000 a R$ 7.000 por mes',
    'Sendo dono do proprio negocio, sem chefe',
    'Com certificacao profissional reconhecida',
    'Construindo algo com proposito de verdade',
  ]
  for (const s of sonhos) {
    p.drawText('>', { x: M + 12, y, size: 10, font: fontBold, color: EMERALD })
    y = wrapText(p, y, font, s, M + 26, 9.5, rgb(0.15, 0.4, 0.3), CONTENT_W - 26)
    y -= 1
  }
  y -= 12

  // O CURSO como ponto de virada
  y = drawSection(p, y, fontBold, 'O Curso Classe A Pets: Sua Virada de Chave', EMERALD)

  // Foto do passeador
  p.drawImage(imgs.passeador, { x: PAGE_W - M - 85, y: y - 95, width: 85, height: 85 })
  const courseW = CONTENT_W - 100

  y = wrapText(p, y, fontBold, 'O unico curso de Dog Walker dado por um adestrador profissional.', M, 10, DARK, courseW)
  y -= 5
  y = wrapText(p, y, font, 'Enquanto outros cursos te ensinam o basico em poucas horas, aqui voce sai preparado pra QUALQUER situacao. Voce aprende a ler o cao, prevenir problemas e entregar mais valor que qualquer concorrente.', M, 9.5, TEXT, courseW)
  y -= 12

  y = drawBox(p, y, fontBold, font, 'O Que o Curso Inclui', [
    'Comportamento canino: linguagem corporal, reatividade, avaliacao',
    'Tecnicas de manejo: conducao, multiplos caes, caes dificeis',
    'Protocolos de seguranca: brigas, emergencias, primeiros socorros',
    'Negocio: contrato, precificacao, marketing, formalizacao',
    'Pratica em campo com caes reais em Sao Paulo',
    'Certificado profissional + kit completo de templates',
    'Grupo VIP + acompanhamento de 30 dias com o Brenno',
  ], LIGHT_GRAY, EMERALD, EMERALD_DIM)

  y -= 3
  p.drawText('Dog Walker que entende de adestramento cobra 3x mais.', { x: M, y, size: 10, font: fontBold, color: EMERALD })
  y -= 14
  p.drawText('E nunca falta cliente.', { x: M, y, size: 10, font: fontBold, color: EMERALD })

  drawFooter(p, font, 2, 3)

  /* ── PAGE 3: Plano de Acao + CTA ── */
  p = doc.addPage([PAGE_W, PAGE_H])
  drawHeader(p, font, fontBold, 'Plano de Acao para Transicao', 'Seu passo a passo -- comece sem risco', imgs.logo, EMERALD)

  y = PAGE_H - 165

  y = drawParagraph(p, y, fontBold, 'Voce NAO precisa largar tudo de uma vez. Comece nos fins de semana.', 10, DARK)
  y -= 3
  y = drawParagraph(p, y, font, 'Este plano foi desenhado para voce ganhar confianca e so fazer a transicao completa quando ja estiver faturando.')
  y -= 12

  y = drawSection(p, y, fontBold, 'Fase 1: Fundamento', EMERALD)
  const fase1 = [
    'Estudar comportamento canino basico (sinais, linguagem corporal)',
    'Aprender tipos de guia, coleira e equipamentos',
    'Montar contrato de prestacao de servico',
    'Definir area de atuacao e precificacao (minimo R$ 50)',
    'Criar perfil profissional no Instagram',
    'Comecar com 1-2 caes de conhecidos',
  ]
  for (const item of fase1) { y = drawCheckbox(p, y, font, item, EMERALD); y -= 1 }
  y -= 6

  y = drawSection(p, y, fontBold, 'Fase 2: Primeiros Clientes', EMERALD)
  const fase2 = [
    'Praticar leitura corporal em cada passeio',
    'Criar relatorio simples para tutores',
    'Conquistar 5 clientes pagantes',
    'Postar 1 conteudo por dia no Instagram',
    'Abrir MEI (CNPJ gratuito)',
  ]
  for (const item of fase2) { y = drawCheckbox(p, y, font, item, EMERALD); y -= 1 }
  y -= 6

  y = drawSection(p, y, fontBold, 'Fase 3: Profissionalizacao (A Virada)', EMERALD)
  const fase3 = [
    'Fazer o curso presencial Classe A Pets (o divisor de aguas)',
    'Obter certificacao oficial de Dog Walker Profissional',
    'Montar kit profissional completo',
    'Buscar parcerias com petshops e veterinarios',
    'META: 10 clientes recorrentes = R$ 3.000-4.000/mes',
  ]
  for (const item of fase3) { y = drawCheckbox(p, y, font, item, EMERALD); y -= 1 }

  y -= 12
  y = drawSection(p, y, fontBold, 'Voce Nao Vai Fazer Isso Sozinho', EMERALD)
  y = drawParagraph(p, y, font, 'A Classe A Pets te acompanha do primeiro passo ate a sua primeira renda. Curso presencial em SP, grupo VIP com o Brenno, e suporte pos-curso de 30 dias.')
  y -= 10

  y = drawBox(p, y, fontBold, font, 'Proximo Passo -- Fale com o Brenno', [
    'WhatsApp: (11) 93406-6866',
    'Curso: classeapets.com.br/curso-dog-walker-profissional',
    'Instagram: @classeapets',
    '',
    'A unica diferenca entre quem consegue e quem nao',
    'consegue e dar o primeiro passo.',
  ], LIGHT_GRAY, EMERALD)

  y -= 12
  p.drawText('Daqui a 1 ano voce vai desejar ter comecado hoje.', { x: M, y, size: 11, font: fontBold, color: EMERALD })

  drawFooter(p, font, 3, 3)

  const bytes = await doc.save()
  writeFileSync('public/downloads/guia-transicao-dog-walker.pdf', bytes)
  console.log('OK: guia-transicao-dog-walker.pdf (3 paginas)')
}

/* ─── MAIN ─── */
async function main() {
  await generateCertificacaoPDF()
  await generateGuiaPDF()
  console.log('\nPDFs gerados com sucesso!')
}

main().catch(console.error)
