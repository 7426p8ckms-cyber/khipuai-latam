"use client";
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
      {
        method: "POST",
        body: JSON.stringify({ nombre, correo }),
        headers: { "Content-Type": "application/json" },
      }
    );
    await response.text();
    setMensaje("✅ ¡Gracias por unirte a la lista de espera!");
    setNombre("");
    setCorreo("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f5eee4] text-[#0f0c29] text-center p-6">
      <div className="max-w-2xl w-full space-y-10">
        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-glow">
          Khipu <span className="text-[#F28C28]">AI</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Tu inteligencia, en tu propio dispositivo.
        </p>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-600">
          <strong>Khipu AI</strong> es el primer asistente diseñado para LATAM
          que protege tus datos con privacidad totall y tecnología adaptada a tu
          cultura.
        </p>

        {/* Formulario */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-[#0f0c29]/10">
          <h2 className="text-2xl font-semibold mb-6">
            Únete a la lista de espera
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              className="bg-[#F28C28] hover:bg-[#e67e22] text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Unirme a la lista de espera
            </button>
          </form>

          {mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Khipu AI — Privacidad Local en LATAM.
        </footer>
      </div>

      {/* Efecto de brillo en el texto */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px #f28c28, 0 0 10px #f1b54c;
          }
          50% {
            text-shadow: 0 0 20px #f28c28, 0 0 40px #f1b54c;
          }
          100% {
            text-shadow: 0 0 5px #f28c28, 0 0 10px #f1b54c;
          }
        }
        .animate-glow {
          animation: glow 3s infinite alternate;
        }
      `}</style>
    </main>
  );
}


