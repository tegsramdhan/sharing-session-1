import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getColorSync } from 'colorthief';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setAccentColorFromImage: (imageElement: HTMLImageElement | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const setAccentColorFromImage = (imageElement: HTMLImageElement | null) => {
    if (!imageElement) return;

    // Check if the image is loaded
    if (imageElement.complete) {
      extractColor(imageElement);
    } else {
      // If not loaded yet, add listener
      imageElement.addEventListener('load', function onLoad() {
        extractColor(imageElement);
        imageElement.removeEventListener('load', onLoad);
      });
    }
  };

  const extractColor = (imageElement: HTMLImageElement) => {
    try {
      // getColorSync returns a Color object which has `array()` according to v3 codebase
      // Actually v3 getColor() returns a color object with rgb()! Let's handle it safely.
      const colorObj = getColorSync(imageElement);
      if (colorObj) {
        let r, g, b;
        
        // Handling both array output or object output from the library
        if (Array.isArray(colorObj)) {
            [r, g, b] = colorObj;
        } else if (typeof colorObj.array === 'function') {
            [r, g, b] = colorObj.array();
        } else if (colorObj.rgb) {
            const rgb = typeof colorObj.rgb === 'function' ? colorObj.rgb() : colorObj.rgb;
            r = rgb.r; g = rgb.g; b = rgb.b;
        } else {
           r = 0; g = 101; b = 145; // default fallback
        }
        
        const rgbStr = `rgb(${r}, ${g}, ${b})`;
        document.documentElement.style.setProperty('--color-accent', rgbStr);
        
        document.documentElement.style.setProperty(
          '--color-accent-container', 
          `rgba(${r}, ${g}, ${b}, 0.8)`
        );
      }
    } catch (error) {
      console.warn("Could not extract color from image, likely due to CORS.", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, setAccentColorFromImage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
