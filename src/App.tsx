/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Wizard from './components/Wizard';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container relative">
        <Navbar />
        <main>
          <Hero />
          <Destinations />
          <Wizard />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
