const CAPI_URL = (import.meta.env.VITE_API_URL || '') + '/api/capi'

function generateEventId() {
  return crypto.randomUUID()
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

function sendToServer(eventName, eventId, params = {}, userData = {}) {
  const event = {
    event_name: eventName,
    event_id: eventId,
    source_url: window.location.href,
    fbc: getCookie('_fbc'),
    fbp: getCookie('_fbp'),
    ...userData,
    ...(Object.keys(params).length > 0 && { custom_data: params }),
  }

  fetch(CAPI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ events: [event] }),
    keepalive: true,
  }).catch(() => {})
}

export function trackEvent(eventName, params = {}, userData = {}) {
  const eventId = generateEventId()

  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params, { eventID: eventId })
  }

  sendToServer(eventName, eventId, params, userData)
}

export function trackViewContent(contentName, contentCategory = 'page') {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
  })
}

export function trackContact(contentName = 'WhatsApp') {
  trackEvent('Contact', { content_name: contentName })
}

export function trackInitiateCheckout(value, currency = 'BRL') {
  trackEvent('InitiateCheckout', { value, currency })
}

export function trackLead(contentName, userData = {}) {
  trackEvent('Lead', { content_name: contentName }, userData)
}

export function trackCompleteRegistration(contentName) {
  trackEvent('CompleteRegistration', { content_name: contentName })
}
