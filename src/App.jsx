import React, { useState, useEffect } from 'react';
import { Layout } from './Componentes/Layout';
import { Grafico } from './Componentes/Grafico';
import { Faq } from './Componentes/Faq';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Layout isMobile={isMobile}>
        <Grafico isMobile={isMobile} />
        <Faq isMobile={isMobile} />
      </Layout>
    </>
  );
}

export default App;

