"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("⏳ Enviando...");
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        }
      );
      if (response.ok) {
        setMensaje("✅ Gracias por registrarte. Pronto te contactaremos.");
        setFormData({ nombre: "", correo: "" });
      } else setMensaje("⚠️ Ocurrió un error al enviar tus datos.");
    } catch (err) {
      console.error(err);
      setMensaje("❌ No se pudo conectar al servidor.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 font-[Inter] relative overflow-hidden p-6">
      {/* efecto de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,120,255,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,255,200,0.15),transparent_70%)] blur-3xl"></div>

      {/* título con animación */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-shine bg-clip-text text-transparent drop-shadow-md">
          Khipu AI
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Tu asistente de IA 100 % privado y local.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Diseñado en LATAM, para LATAM.
        </p>
      </div>

      {/* formulario */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 w-full max-w-md space-y-5 shadow-2xl"
      >
        <h2 className="text-xl font-semibold text-cyan-400 text-center mb-4">
          Únete a la lista de espera
        </h2>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-cyan-400 transition"
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-cyan-400 transition"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg transition"
        >
          Enviar
        </button>
        {mensaje && (
          <p className="text-center text-sm text-gray-300 mt-2">{mensaje}</p>
        )}
      </form>

      {/* pie de página */}
      <footer className="relative z-10 mt-10 text-xs text-gray-500">
        © 2025 Khipu AI — Hecho con ❤️ en Perú.
      </footer>

      {/* animación del brillo */}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: -200% center;
          }
        }
        .animate-shine {
          animation: shine 6s linear infinite;
        }
      `}</style>
    </main>
  );
}

