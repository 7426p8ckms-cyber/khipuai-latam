"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up-visible");
        });
      },
      { threshold: 0.2 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => sectionsRef.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
      {
        method: "POST",
        body: JSON.stringify({ nombre, correo }),
        headers: { "Content-Type": "application/json" },
      }
    );
    setMensaje("✅ ¡Gracias por unirte a la lista de espera!");
    setNombre("");
    setCorreo("");
  };

  return (
    <main className="min-h-screen bg-[#f5eee4] text-[#0f0c29] flex flex-col items-center justify-center">
      <section className="text-center px-6 py-16 md:py-24 fade-in">
        <div className="flex flex-col items-center space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-[#F28C28] opacity-0 animate-fadeIn"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5m-1.875 0h12.75c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H6.375A1.125 1.125 0 015.25 21.375v-9.75c0-.621.504-1.125 1.125-1.125z"
            />
          </svg>
          <h1 className="text-4xl md:text-6xl font-bold">
            Tu inteligencia digital, cuidada con privacidad real.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Diseñada para LATAM. Hecha para personas que valoran su privacidad.
          </p>
          <a
            href="#form"
            className="bg-gradient-to-r from-[#F28C28] to-[#f1b54c] hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Únete a la lista de espera
          </a>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="w-full max-w-5xl text-center py-20 px-6 opacity-0 fade-up"
      >
        <h2 className="text-3xl font-bold mb-10">Cómo funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">1. Instálalo</h3>
            <p>Descarga Khipu AI en tu dispositivo y configura tus preferencias.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">2. Conéctalo</h3>
            <p>Integra tus apps favoritas sin exponer tus datos a la nube.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">3. Disfrútalo</h3>
            <p>Habla, organiza y automatiza con total privacidad local.</p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="w-full max-w-5xl text-center py-20 px-6 opacity-0 fade-up"
      >
        <h2 className="text-3xl font-bold mb-10">Ventajas de privacidad</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">🔒 Datos locales</h3>
            <p>Toda tu información se procesa en tu propio dispositivo.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">⚡ Sin esperas</h3>
            <p>Rendimiento inmediato sin depender de servidores externos.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">🧭 Control total</h3>
            <p>Activa o desactiva integraciones cuando tú lo decidas.</p>
          </div>
        </div>
      </section>

      <section
        id="form"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="w-full max-w-md text-center py-20 px-6 opacity-0 fade-up"
      >
        <h2 className="text-3xl font-bold mb-6">Únete a la lista privada</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#F28C28] to-[#f1b54c] hover:opacity-90 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Enviar
          </button>
        </form>
        {mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}
      </section>

      <footer className="text-gray-500 text-sm py-6 text-center">
        © {new Date().getFullYear()} Khipu AI — Privacidad Local en LATAM.
      </footer>

      <style jsx global>{`
        .fade-in {
          animation: fadeIn 2s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 2.5s ease forwards;
        }
        .fade-up {
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .fade-up-visible {
          opacity: 1 !important;
          transform: translateY(0);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}





