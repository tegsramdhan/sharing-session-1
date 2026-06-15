import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

export default function Hero() {
  const { isDarkMode } = useTheme();
  
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const darkVideoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Sync play state to ensure both videos run exactly concurrently
  useEffect(() => {
    if (lightVideoRef.current && darkVideoRef.current) {
      if (lightVideoRef.current.currentTime > 0) {
        darkVideoRef.current.currentTime = lightVideoRef.current.currentTime;
      }
      lightVideoRef.current.play().catch(() => {});
      darkVideoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientWidth, clientHeight } = sectionRef.current;
      // Calculate smooth movement based on mouse position
      const x = (e.clientX / clientWidth - 0.5) * -30; // Negative for opposite direction parallax
      const y = (e.clientY / clientHeight - 0.5) * -30;
      setMousePosition({ x, y });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{ transform: `scale(1.1) translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <video 
          ref={lightVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          src="https://file.garden/aiUZiQ_VOCn5P8Oe/Padang_rumput_bergerak_goyang_202606152102.mp4"
        />
        <video 
          ref={darkVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
          autoPlay 
          muted 
          loop 
          playsInline
          src="https://file.garden/aiUZiQ_VOCn5P8Oe/Padang_rumput_bergerak_goyang_202606152102%20(1).mp4"
        />
        <div className="absolute inset-0 pointer-events-none dark:bg-gradient-to-b dark:from-transparent dark:via-background/20 dark:to-background"></div>
      </div>
      
      {/* Depth of Field Camera Blur */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[40vh] pointer-events-none backdrop-blur-md z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6 drop-shadow-md tracking-tight">
          Temukan Alam<br />Liar Sebenarnya
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 drop-shadow-sm font-medium">
          Rasakan kemurnian alam yang belum terjamah melalui kurasi perjalanan yang dirancang untuk kedamaian batin dan petualangan yang autentik.
        </p>
        <button className="bg-primary hover:bg-primary-container text-on-primary font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
          Mulai Petualangan
        </button>
      </div>
    </section>
  );
}
