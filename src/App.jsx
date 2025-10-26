import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StudyCafe from './components/StudyCafe';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

export default function App() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const isStudyCafe = useMemo(() => path === '/study-cafe', [path]);

  if (isStudyCafe) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <StudyCafe />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />

      <section id="vision" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Vision & Mission
          </motion.h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/10 p-6 bg-white"
            >
              <h3 className="font-semibold">Vision</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>To build a culture of innovation and leadership in students.</li>
                <li>To empower young minds with skills for real-world challenges.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-black/10 p-6 bg-white"
            >
              <h3 className="font-semibold">Mission</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Organize technical & creative events for skill development.</li>
                <li>Encourage teamwork, problem-solving, and leadership.</li>
                <li>Provide mentorship and resources for projects & research.</li>
                <li>Build a supportive community to share knowledge and grow together.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Igniters Team
          </motion.h2>

          <div className="mt-8 space-y-10">
            {/* Founders */}
            <div>
              <h3 className="font-semibold text-lg">Founders</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Card key={i} role="Founder" />
                ))}
              </div>
            </div>

            {/* President & Vice-President */}
            <div>
              <h3 className="font-semibold text-lg">President & Vice-President</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {['President', 'Vice-President'].map((r) => (
                  <Card key={r} role={r} />
                ))}
              </div>
            </div>

            {/* Core Team */}
            <div>
              <h3 className="font-semibold text-lg">Core Team Members</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} role="Core Team" />
                ))}
              </div>
            </div>

            {/* Other Teams */}
            <div>
              <h3 className="font-semibold text-lg">Other Teams</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {['Technical', 'Management', 'Design', 'Media'].map((r) => (
                  <Card key={r} role={`${r} Team`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Contact Us
          </motion.h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                alert(`Thanks, ${data.get('name')}! We'll get back to you at ${data.get('email')}.`);
                e.currentTarget.reset();
              }}
              className="rounded-2xl border border-black/10 p-6 bg-white"
            >
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <button type="submit" className="mt-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all">Send Message</button>
              </div>
            </form>

            <div className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="font-semibold">Find us online</h3>
              <p className="mt-2 text-sm text-gray-600">Stay connected with Igniters Club.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/10 hover:bg-gray-50 transition">
                  <Instagram size={18}/> Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black/10 hover:bg-gray-50 transition">
                  <Linkedin size={18}/> LinkedIn
                </a>
              </div>
              <div className="mt-6 h-48 w-full rounded-xl bg-gradient-to-br from-indigo-200 to-cyan-200 grid place-items-center text-gray-700 text-sm">
                Campus map placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-black/10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Igniters Club – RCPIT. All rights reserved.
      </footer>
    </div>
  );
}

function Card({ role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-black/10 bg-white p-5 hover:-translate-y-1 hover:shadow-xl transition-all"
    >
      <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="h-full w-full grid place-items-center text-gray-400 text-sm">Photo</div>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Member Name</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}
