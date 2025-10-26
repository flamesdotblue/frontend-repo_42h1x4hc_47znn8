import { motion } from 'framer-motion';
import { Wifi, Users, Code, Mail, MapPin } from 'lucide-react';

export default function StudyCafe() {
  const features = [
    { icon: Wifi, title: 'High-speed Wi‑Fi', desc: 'Stay connected for research, coding and collaboration.' },
    { icon: Users, title: 'Open Discussions', desc: 'Group study tables and whiteboards for brainstorming.' },
    { icon: Code, title: 'Web Dev Zone', desc: 'Guided resources and peer mentorship for developers.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Igniters Study Café
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            A calm, focused space for students to learn, collaborate and grow — with mentorship,
            resources and a welcoming community.
          </motion.p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-black/10 bg-white p-6 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-6">
            <h4 className="font-semibold">Location</h4>
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
              <MapPin size={16}/> R. C. Patel Institute of Technology (RCPIT)
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 p-6">
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
              <Mail size={16}/> igniters@rcpit.edu
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
