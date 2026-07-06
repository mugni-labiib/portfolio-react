import React from 'react';

export default function Education() {
  const dataPendidikan = [
    {
      id: 1,
      jenjang: 'SD',
      jurusanSekolah: 'Pendidikan Dasar',
      namaSekolah: 'SDN Srogol Dua', // Ganti dengan nama SD kamu
      periode: '2008 - 2014',
      lokasi: 'BOGOR - Indonesia',
      deskripsi: 'Membangun fondasi dasar dalam matematika, sains, dan bahasa.',
    },
    {
      id: 2,
      jenjang: 'SMP IT',
      jurusanSekolah: 'Pendidikan Menengah Pertama',
      namaSekolah: 'Bina Insan Mulia', // Ganti dengan nama SMP kamu
      periode: '2014 - 2017',
      lokasi: 'Cirebon - Indonesia',
      deskripsi: 'Mulai aktif dalam kegiatan organisasi sekolah dan pengembangan minat bakat.',
    },
    {
      id: 3,
      jenjang: 'SMK',
      jurusanSekolah: 'Rekayasa Perangkat Lunak', // Ganti dengan jurusan kamu
      namaSekolah: 'SMK WIKRAMA BOGOR', // Ganti dengan nama sekolah kamu
      periode: '2017 - 2020',
      lokasi: 'BOGOR - Indonesia',
      deskripsi: 'Fokus pada pendalaman infrastruktur jaringan, perakitan komputer, dan dasar-dasar administrasi server.',
    },
  ];

  return (
    // bg-slate-950 bikin warnanya jadi biru gelap malam, bukan hitam mati
    <section id="education" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Riwayat <span className="text-cyan-400">Pendidikan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Perjalanan akademis yang membentuk fondasi logika dan skill saya dari dasar hingga sekarang.
          </p>
        </div>

        {/* Garis Tengah Timeline */}
        <div className="relative">
          {/* Garis vertikal warna biru slate */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {dataPendidikan.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Titik Penanda Timeline Berwarna Cyan */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 z-10"></div>

                {/* Kartu Konten */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/5 group">
                    
                    {/* Badge Tahun/Periode */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-4">
                      <span className="text-xs font-semibold text-cyan-400 font-mono">{edu.periode}</span>
                    </div>

                    {/* Jenjang & Jurusan */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors tracking-tight">
                      {edu.jenjang}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-500 mb-3 font-mono">
                      {edu.jurusanSekolah}
                    </p>

                    {/* Nama Sekolah & Lokasi */}
                    <p className="text-slate-300 text-sm font-medium mb-0.5">{edu.namaSekolah}</p>
                    <p className="text-slate-500 text-xs mb-4">{edu.lokasi}</p>

                    {/* Deskripsi */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {edu.deskripsi}
                    </p>

                    {/* Nilai / IPK (Hanya muncul jika ada isinya) */}
                    {edu.nilai && (
                      <div className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800 font-mono">
                        <span className="text-cyan-400 font-semibold">Nilai / IPK:</span> {edu.nilai}
                      </div>
                    )}

                    {/* Daftar Pencapaian */}
                    {edu.pencapaian && edu.pencapaian.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                          <span className="text-cyan-400">✓</span> Pencapaian:
                        </h4>
                        <ul className="space-y-1">
                          {edu.pencapaian.map((item, idx) => (
                            <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-cyan-500 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* Penyeimbang Grid Sisi Sebelah */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}