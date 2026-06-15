export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-outline/20 w-full py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1280px] mx-auto gap-8">
        <div className="text-center md:text-left">
          <div className="font-bold text-xl text-on-surface mb-2 tracking-tight">Aesthetic Travel</div>
          <p className="text-sm text-on-surface-variant">© 2026 Aesthetic Travel. Jelajahi keindahan alam liar.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Kebijakan Privasi</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Syarat & Ketentuan</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Bantuan</a>
        </div>
        
        <div className="flex gap-4">
          <a href="#" aria-label="Social Media" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </a>
          <a href="#" aria-label="Email" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
