import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Classe A Pets</h1>
          <p style={{ marginBottom: '1rem' }}>Ocorreu um erro ao carregar a página.</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '0.75rem 1.5rem', background: '#00BCD4', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}
          >
            Recarregar
          </button>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://wa.me/5511934066866" style={{ color: '#25d366' }}>Falar no WhatsApp</a>
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
