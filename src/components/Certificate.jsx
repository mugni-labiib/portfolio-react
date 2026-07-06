import React from 'react';

import reactCertificate from "../assets/certificates/sertivhtml.png";
import frontendCertificate from "../assets/certificates/sertivjs.jpg";
import uiuxCertificate from "../assets/certificates/sertivk3.png";

export default function Certificate() {

  const certificateList = [
    {
      title: "HTML & CSS",
      issuer: "Dicoding",
      year: "2025",
      image: reactCertificate,
    },

    {
      title: "JavaScript",
      issuer: "Dicoding",
      year: "2025",
      image: frontendCertificate,
    },

    {
      title: "K3",
      issuer: "Kemnaker",
      year: "2025",
      image: uiuxCertificate,
    }
  ];

  return (
    <section id="certificate" className="py-24 px-6">

      <div className="max-w-6xl mx-auto space-y-12">

        <div className="flex items-center space-x-4">

          <h2 className="text-3xl font-bold text-white">
            Certificates
          </h2>

          <div className="h-[1px] bg-slate-700 flex-1"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {certificateList.map((certificate, index) => (

            <div
              key={index}
              className="
                bg-slate-800
                rounded-xl
                border
                border-slate-700
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
                duration-300
                overflow-hidden
              "
            >

              {/* Gambar Sertifikat */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-white mb-3">
                  {certificate.title}
                </h3>

                <p className="text-slate-400 mb-2">
                  {certificate.issuer}
                </p>

                <p className="text-cyan-400 font-semibold mb-5">
                  {certificate.year}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-lg
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-slate-900
                    font-semibold
                    transition-colors
                  "
                >
                  Lihat Sertifikat
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}