import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sedang mengirim...");
    
    const form = event.target;
    const data = new FormData(form);

    // 🔴 PERBAIKAN: Ganti 'KODE_UNIK_KAMU' dengan ID asli dari dashboard Formspree kamu
    const response = await fetch("https://formspree.io/f/mrevkpog", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("Pesan berhasil dikirim! Terima kasih.");
      form.reset(); // 🟢 Membuat semua kolom input kosong kembali setelah sukses
    } else {
      setStatus("Waduh, ada kesalahan. Coba lagi, ya!");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Hubungi Saya</h2>
          <p className="text-slate-400 leading-relaxed text-sm">
            Pintu saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi tentang pengembangan aplikasi web.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div>
            <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="name">Nama</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="email">Email Anda</label>
            <input 
              type="email" 
              name="_replyto" 
              id="email" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="message">Pesan</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              required 
              className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
              placeholder="Tuliskan pesan atau penawaran proyek Anda di sini..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 rounded transition-colors text-sm uppercase tracking-wider"
          >
            Kirim Pesan
          </button>

          {status && (
            <p className="text-center text-xs font-mono text-cyan-400 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}