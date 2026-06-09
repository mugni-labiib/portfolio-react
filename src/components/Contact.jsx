import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Hubungi Saya</h2>
        <p className="text-slate-400 leading-relaxed">
          Pintu saya selalu terbuka untuk peluang baru, kolaborasi proyek, atau sekadar berdiskusi tentang pengembangan aplikasi web dari sisi front-end hingga back-end.
        </p>
        <div className="pt-4">
          <a href="mugnilabiib.smkwikram.sch.id" className="inline-block border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-medium px-6 py-3 rounded transition-colors">
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
}