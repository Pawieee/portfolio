import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Certification,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Balatro from './components/Balatro/Balatro';


function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

return (
<div
  className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}
  style={{ position: 'relative', overflow: 'hidden' }}
>
  {/* 🌌 Wrap only <Main /> section with background */}
  <div style={{ position: 'relative' }}>
    <Balatro
      isRotate={false}
      mouseInteraction={true}
      pixelFilter={700}
    />
    <Main />
  </div>

  {/* Other content (no background) */}
  <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
  <FadeIn transitionDuration={700}>
    <Expertise />
    <Timeline />
    <Project />
    <Certification />
    <Contact />
  </FadeIn>
  <Footer />
</div>

);

}

export default App;