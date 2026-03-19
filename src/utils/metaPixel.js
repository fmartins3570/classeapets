/**
 * Meta Pixel tracking utilities
 * Dispara eventos apenas se o fbq estiver disponível
 */

export function trackEvent(eventName, params = {}) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params)
  }
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

export function trackLead(contentName) {
  trackEvent('Lead', { content_name: contentName })
}
