import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pt-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Igniting Ideas. Inspiring Minds.
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            A minimalist, modern space for curious builders at RCPIT.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#about" className="px-5 py-2.5 rounded-xl bg-gray-900 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all">Learn More</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur border border-black/10 hover:bg-white hover:shadow transition">Join Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
