import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Error boundary wrapper component
class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
    
    // You could send this to a logging service like Sentry
    // if (typeof window.Sentry !== 'undefined') {
    //   window.Sentry.captureException(error);
    // }

    // Log to analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'exception', {
        'description': `${error.toString()} | ${errorInfo.componentStack}`,
        'fatal': true
      });
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback ? 
        this.props.fallback(this.state.error, this.state.errorInfo) : 
        <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

// Styled error fallback component
const ErrorFallback = ({ error, errorInfo }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="error-boundary-container"
      style={{
        padding: '2rem',
        margin: '2rem auto',
        maxWidth: '800px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        borderRadius: '8px',
        border: '1px solid #d4af37',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
      }}
    >
      <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>
        {t('errorBoundary.title', 'Something went wrong')}
      </h2>
      
      <p style={{ marginBottom: '1rem' }}>
        {t('errorBoundary.message', 'We apologize for the inconvenience. Please try refreshing the page or contact us if the problem persists.')}
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#d4af37',
            color: '#000',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginRight: '1rem'
          }}
        >
          {t('errorBoundary.refresh', 'Refresh Page')}
        </button>
        
        <a
          href="/"
          style={{
            backgroundColor: 'transparent',
            color: '#d4af37',
            border: '1px solid #d4af37',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          {t('errorBoundary.home', 'Go to Homepage')}
        </a>
      </div>
      
      {process.env.NODE_ENV === 'development' && (
        <div style={{ marginTop: '2rem', textAlign: 'left', overflow: 'auto', maxHeight: '300px' }}>
          <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>Error Details:</h3>
          <p style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
          </p>
          {errorInfo && (
            <>
              <h4 style={{ color: '#d4af37', marginTop: '1rem', marginBottom: '0.5rem' }}>Component Stack:</h4>
              <p style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {errorInfo.componentStack}
              </p>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Export a wrapped version with translation support
export default ErrorBoundaryClass;
