"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
    setEnviado(true);
    setNombre("");
    setCorreo("");
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen text-gray-900 flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(-45deg, #f8f4eb, #f6f1e3, #f4eddc, #f8f4eb)`,
        backgroundSize: "400% 400%",
        backgroundPositionY: `${scrollY * 0.3}px`,
        animation: "gradientFlow 20s ease infinite",
      }}
    >
      {/* Fondo luminoso */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,230,180,0.3),transparent_70%)] blur-3xl opacity-60 animate-glow"></div>

      {/* Logo + Candado */}
      <div className="flex items-center gap-3 mt-12 fade-in relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="url(#grad)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="url(#grad)"
          className="w-10 h-10 drop-shadow-md glow-lock"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="100%" stopColor="#ffcc33" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m-1.5 0h12a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 013 19.5V12a1.5 1.5 0 011.5-1.5z"
          />
        </svg>
        <h1 className="text-5xl font-semibold tracking-tight">
          Khipu<span className="text-amber-500">AI</span>
        </h1>
      </div>

      {/* Frase principal */}
      <section className="text-center max-w-3xl mt-8 relative z-10">
        <p className="text-lg text-gray-700 mb-10">
          Conectamos inteligencia y confianza.
          <span className="block text-gray-900 mt-2 italic">
            “El futuro pertenece a quienes saben proteger sus datos.”
          </span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full sm:w-auto"
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="relative bg-amber-500 hover:bg-amber-600 transition-all text-white px-6 py-3 rounded-xl shadow-md overflow-hidden group"
          >
            <span className="relative z-10">
              {enviado ? "¡Registrado!" : "Notificarme"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
          </button>
        </form>
      </section>

      {/* Fade elegante */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16 opacity-60" />

      {/* Imagen principal */}
      <section className="max-w-5xl text-center mb-20 fade-in relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Innovación con propósito</h2>
        <img
          src="https://cdn.pixabay.com/photo/2020/04/04/10/25/technology-5003220_1280.jpg"
          alt="Futuro tecnológico elegante"
          className="mx-auto rounded-2xl shadow-lg w-full sm:w-2/3 mb-8 opacity-95"
        />
        <p className="text-gray-700 leading-relaxed">
          Fusionamos inteligencia artificial, diseño y ética para construir un
          futuro más seguro, transparente y humano.
        </p>
      </section>

      {/* Imagen secundaria */}
      <section className="max-w-5xl text-center mb-20 fade-in relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Privacidad reforzada</h2>
        <img
          src="https://cdn.pixabay.com/photo/2022/06/14/20/15/cybersecurity-7263484_1280.jpg"
          alt="Seguridad digital elegante"
          className="mx-auto rounded-2xl shadow-lg w-full sm:w-2/3 mb-8 opacity-95"
        />
        <p className="text-gray-700 leading-relaxed">
          Cada interacción está diseñada con cifrado avanzado y transparencia,
          para que la innovación nunca sacrifique tu seguridad.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 mb-6 relative z-10">
        © 2025 KhipuAI — Tecnología con propósito.
      </footer>

      {/* Animaciones */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glow-lock {
          animation: glowPulse 3s ease-in-out infinite alternate;
        }

        @keyframes glowPulse {
          0% {
            filter: drop-shadow(0 0 2px #ffd966) drop-shadow(0 0 5px #ffcc33);
          }
          100% {
            filter: drop-shadow(0 0 8px #ffd966) drop-shadow(0 0 16px #ffcc33);
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }

        .animate-glow {
          animation: glow 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}








