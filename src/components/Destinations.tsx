import { useRef } from 'react';
import { useTheme } from '../ThemeContext';

const destinations = [
  {
    id: 'nz',
    country: 'New Zealand',
    region: 'Puncak Selatan',
    image: 'https://file.garden/aiUZiQ_VOCn5P8Oe/f769432fd6e0d0b66b58e2d6c262cb0a.jpg'
  },
  {
    id: 'montana',
    country: 'Montana',
    region: 'Lembah Liar',
    image: 'https://file.garden/aiUZiQ_VOCn5P8Oe/783e283f2621e49b1f7e72c1fe24af1a.jpg'
  },
  {
    id: 'mongolia',
    country: 'Mongolia',
    region: 'Padang Stepa',
    image: 'https://file.garden/aiUZiQ_VOCn5P8Oe/e1ba27823037873f8bd3ea70fb1834ca.jpg'
  },
  {
    id: 'patagonia',
    country: 'Patagonia',
    region: 'Gunung Es',
    image: 'https://file.garden/aiUZiQ_VOCn5P8Oe/a436c30caa706edea3dc749217acb3bf.jpg'
  }
];

export default function Destinations() {
  const { setAccentColorFromImage } = useTheme();

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    setAccentColorFromImage(e.currentTarget);
  };

  return (
    <section id="destinations" className="py-20 md:py-32 px-4 max-w-[1280px] mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-10 md:mb-16 text-center max-w-3xl">
        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Kurasi Terbaik
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Destinasi Pilihan</h2>
        <p className="text-sm md:text-base text-on-surface-variant">
          Sebuah koleksi visual dari destinasi terbaik kami – setiap tempat dikurasi dengan perhatian terhadap keindahan, emosi, dan gaya estetika.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 h-[800px] md:h-[500px] w-full max-w-6xl">
        {destinations.map((dest) => (
          <div 
            key={dest.id}
            className="relative group flex-grow transition-all w-full md:w-24 rounded-2xl overflow-hidden h-full duration-700 md:hover:w-[40vw] border border-outline/20 ambient-shadow cursor-pointer"
          >
            <img 
              crossOrigin="anonymous"
              src={dest.image}
              alt={dest.region} 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 md:group-hover:scale-105"
              onMouseEnter={handleMouseEnter}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 md:opacity-70 transition-opacity duration-300 md:group-hover:opacity-90"></div>
            
            {/* Expanded Content (Visible on Hover Desktop / Always Mobile) */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md whitespace-nowrap">{dest.country}</h3>
              <p className="text-xs md:text-sm text-gray-300 uppercase tracking-widest drop-shadow-md whitespace-nowrap">{dest.region}</p>
            </div>

            {/* Collapsed Vertical Title (Hidden on Hover Desktop / Hidden Mobile) */}
            <div className="hidden md:flex absolute inset-0 items-end p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div className="-rotate-90 origin-left translate-x-[1.2rem] -translate-y-8 whitespace-nowrap">
                <span className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">{dest.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
