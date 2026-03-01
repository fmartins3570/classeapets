import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    function observeAll() {
      document.querySelectorAll('[data-reveal]:not(.revealed), [data-reveal-stagger]:not(.revealed)').forEach((el) => {
        revealObserver.observe(el)
      })
    }

    // Observe elements already in DOM
    observeAll()

    // Watch for new elements added by lazy loading / Suspense
    const mutationObserver = new MutationObserver(() => {
      observeAll()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      revealObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
