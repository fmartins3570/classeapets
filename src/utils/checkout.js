const API_URL = import.meta.env.VITE_API_URL || 'https://api.classeapets.com.br'

export async function createCheckout(productId) {
  const response = await fetch(`${API_URL}/api/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Erro ao iniciar pagamento.')
  }

  // Redireciona para o checkout do Mercado Pago
  window.location.href = data.checkoutUrl
}
