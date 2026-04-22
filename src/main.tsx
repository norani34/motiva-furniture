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
    // also try multiple RAFs and timeouts to counter late layout shifts/hydration
    let rafs: number[] = [];
    for (let i = 0; i < 4; i++) {
      rafs.push(requestAnimationFrame(() => scrollTop()));
    }
    const timers: number[] = [];
    timers.push(window.setTimeout(scrollTop, 50));
    timers.push(window.setTimeout(scrollTop, 150));
    timers.push(window.setTimeout(scrollTop, 350));
    // after load (images, fonts) in case something later scrolls
    window.addEventListener('load', scrollTop, { once: true });
    // small fallback in case of late layout shifts
    const t = setTimeout(scrollTop, 250);
    const onHashOrPop = () => scrollTop();
    window.addEventListener('hashchange', onHashOrPop);
    window.addEventListener('popstate', onHashOrPop);

    return () => {
      clearTimeout(t);
      timers.forEach((id) => clearTimeout(id));
      rafs.forEach((id) => cancelAnimationFrame(id));
      window.removeEventListener('load', scrollTop);
      window.removeEventListener('hashchange', onHashOrPop);
      window.removeEventListener('popstate', onHashOrPop);
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
);
