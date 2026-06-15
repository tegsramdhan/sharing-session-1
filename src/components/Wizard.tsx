import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    region: 'Pegunungan Alpen',
    activity: '',
    date: '',
    pax: 1
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const calculateEstimate = () => {
    setStep(4);
  };

  const steps = [
    { id: 1, label: 'Destinasi' },
    { id: 2, label: 'Tanggal' },
    { id: 3, label: 'Jumlah Pax' }
  ];

  return (
    <section id="cek-harga" className="py-20 md:py-32 bg-surface-container block px-4">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-12 border border-white/20 dark:border-white/5 ambient-shadow relative overflow-hidden">
        <h2 className="text-3xl font-bold text-on-surface mb-12 text-center">
          {step === 4 ? 'Estimasi Perjalanan Anda' : 'Ke mana Anda ingin pergi?'}
        </h2>
        
        {step < 4 && (
          <div className="flex items-center justify-center gap-2 md:gap-8 mb-16 overflow-x-auto whitespace-nowrap pb-4 px-2">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex items-center gap-2 md:gap-3 transition-opacity duration-300 ${step >= s.id ? 'opacity-100' : 'opacity-40'}`}>
                  <span className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-colors ${
                    step >= s.id ? 'bg-primary text-on-primary' : 'bg-surface border border-outline text-on-surface-variant'
                  }`}>
                    {step > s.id ? <Check size={16} /> : s.id}
                  </span>
                  <span className={`text-sm md:text-base font-medium ${step >= s.id ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                    {s.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-8 md:w-12 h-px mx-2 md:mx-4 transition-colors ${step > s.id ? 'bg-primary' : 'bg-outline/50'}`}></div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
              >
                <div className="space-y-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Pilih Wilayah</label>
                    <select 
                      value={formData.region}
                      onChange={(e) => setFormData({...formData, region: e.target.value})}
                      className="w-full bg-transparent border-0 border-b-2 border-outline focus:border-primary focus:ring-0 text-xl font-semibold py-3 text-on-surface cursor-pointer appearance-none outline-none pb-2"
                    >
                      <option value="New Zealand">New Zealand</option>
                      <option value="Montana">Montana</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Pegunungan Alpen">Pegunungan Alpen</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Preferensi Aktivitas</label>
                    <input 
                      type="text" 
                      value={formData.activity}
                      onChange={(e) => setFormData({...formData, activity: e.target.value})}
                      placeholder="Tuliskan keinginan Anda..."
                      className="w-full bg-transparent border-0 border-b-2 border-outline focus:border-primary focus:ring-0 text-lg py-3 text-on-surface placeholder:text-outline transition-all pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-8 md:pt-0">
                  <button 
                    onClick={nextStep}
                    className="bg-primary text-on-primary font-semibold px-8 py-4 flex items-center justify-center gap-2 rounded-lg hover:bg-primary-container transition-colors w-full md:w-auto"
                  >
                    Lanjut <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
              >
                <div className="space-y-8">
                  <div className="relative">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Perkiraan Keberangkatan</label>
                    <input 
                      type="month" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-transparent border-0 border-b-2 border-outline focus:border-primary focus:ring-0 text-lg py-3 text-on-surface transition-all pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-8 md:pt-0">
                  <button 
                    onClick={nextStep}
                    className="bg-primary text-on-primary font-semibold px-8 py-4 flex items-center justify-center gap-2 rounded-lg hover:bg-primary-container transition-colors w-full md:w-auto"
                  >
                    Lanjut <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
              >
                <div className="space-y-8">
                  <div className="relative group">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Pilih Jumlah Peserta</label>
                    <select 
                      value={formData.pax}
                      onChange={(e) => setFormData({...formData, pax: parseInt(e.target.value)})}
                      className="w-full bg-transparent border-0 border-b-2 border-outline focus:border-primary focus:ring-0 text-xl font-semibold py-3 text-on-surface cursor-pointer appearance-none outline-none pb-2"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} Orang</option>
                      ))}
                      <option value="9">Lebih dari 8 Orang (Grup)</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-8 md:pt-0">
                  <button 
                    onClick={calculateEstimate}
                    className="bg-primary text-on-primary font-semibold px-8 py-4 flex items-center justify-center gap-2 rounded-lg hover:bg-primary-container transition-colors w-full md:w-auto"
                  >
                    Lihat Estimasi <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-8">
                  <p className="text-on-surface-variant text-lg mb-2">Estimasi paket {formData.pax} pax menuju {formData.region}:</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Mulai dari Rp 45.000.000</h3>
                  <p className="text-sm text-on-surface-variant">Harga dapat berubah menyesuaikan jadwal dan preferensi "{formData.activity || 'standar'}".</p>
                </div>
                <button className="bg-green-600 text-white font-semibold px-8 py-4 flex items-center justify-center gap-2 rounded-lg hover:bg-green-700 transition-colors mx-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                  Konsultasi via WhatsApp <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-6 text-on-surface-variant hover:text-primary text-sm font-medium transition-colors"
                >
                  Hitung ulang
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
