import { motion } from 'framer-motion';
import { Rocket, Users, Code } from 'lucide-react';

export default function About() {
  const items = [
    { icon: Rocket, title: 'Events & Workshops', desc: 'Hands-on sessions, hackathons and ideathons that spark innovation.' },
    { icon: Users, title: 'Leadership & Community', desc: 'Grow through teamwork, leadership roles, and peer learning.' },
    { icon: Code, title: 'Projects & Impact', desc: 'Build real projects with mentorship and contribute to social impact.' },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-3xl"
        >
          Igniters Club at RCPIT is a community of passionate students who come together to
          innovate, create and grow through technology, leadership and teamwork.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white grid place-items-center shadow">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
