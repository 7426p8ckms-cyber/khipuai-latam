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
      <div className="max-w-3xl w-full space-y-14">
        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-glow">
          🔒 Tu inteligencia, en tu propio dispositivo.
        </h1>

        {/* Descripción con Khipu AI destacado */}
        <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
          <span className="font-extrabold text-4xl md:text-5xl">
            Khipu <span className="text-[#F28C28]">AI</span>
          </span>{" "}
          es el primer asistente que protege tus datos con privacidad total y
          tecnología adaptada a nuestra cultura.
        </p>

        {/* Sección del formulario */}
        <div className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-[#0f0c29]/10 space-y-8">
          <h2 className="text-3xl font-bold">Únete a la lista de espera</h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="p-4 rounded-lg border border-gray-300 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
            />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="p-4 rounded-lg border border-gray-300 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
            />
            <button
              type="submit"
              className="bg-[#F28C28] hover:bg-[#e67e22] text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Unirme a la lista de espera
            </button>
          </form>

          {mensaje && (
            <p className="mt-4 text-green-600 font-medium">{mensaje}</p>
          )}
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Khipu AI — Privacidad Local en LATAM.
        </footer>
      </div>

      {/* Animación Glow */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 6px #f28c28, 0 0 12px #f1b54c;
          }
          50% {
            text-shadow: 0 0 20px #f28c28, 0 0 40px #f1b54c;
          }
          100% {
            text-shadow: 0 0 6px #f28c28, 0 0 12px #f1b54c;
          }
        }
        .animate-glow {
          animation: glow 3s infinite alternate;
        }
      `}</style>
    </main>
  );
}

