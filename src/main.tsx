import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function RootApp() {
  useEffect(() => {
    // Defensive: ensure we land at the top on first render and after full load/hydration
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } catch (e) {}

    const scrollTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch (e) {}
    };

    // immediate
    scrollTop();
    // after load (images, fonts) in case something later scrolls
    window.addEventListener('load', scrollTop, { once: true });
    // small fallback in case of late layout shifts
    const t = setTimeout(scrollTop, 250);
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', scrollTop);
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
);
