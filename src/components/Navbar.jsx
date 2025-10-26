import { Rocket, Users, Mail } from 'lucide-react';
import { useCallback } from 'react';

export default function Navbar() {
  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const openStudyCafe = useCallback(() => {
    const url = `${window.location.origin}/study-cafe`;
    window.open(url, '_blank');
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 grid place-items-center text-white shadow">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Igniters Club – RCPIT</p>
            <p className="text-xs text-gray-500">Igniting Ideas. Inspiring Minds.</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => goTo('about')} className="hover:text-indigo-600 transition-colors">About</button>
          <button onClick={() => goTo('vision')} className="hover:text-indigo-600 transition-colors">Vision & Mission</button>
          <button onClick={() => goTo('team')} className="hover:text-indigo-600 transition-colors flex items-center gap-1"><Users size={16}/>Team</button>
          <button onClick={() => goTo('contact')} className="hover:text-indigo-600 transition-colors flex items-center gap-1"><Mail size={16}/>Contact</button>
          <button onClick={openStudyCafe} className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Study Café</button>
        </div>
      </nav>
    </header>
  );
}
