"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("Enviando...");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    );

    if (response.ok) {
      setMensaje("✅ ¡Gracias por unirte a Khipu IA!");
      setFormData({ nombre: "", email: "" });
    } else {
      setMensaje("❌ Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#f9f3e8] via-[#f4e9d7] to-[#f0e0c3] text-[#3a2d1b] px-6 py-12 animate-fadeIn">
      {/* LOGO Y TÍTULO */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="absolute inset-0 blur-lg bg-[#d67a00]/40 rounded-full"></div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d67a00"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative"
          >
            <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 className="text-6xl md:text-7xl font-light">
          Khipu <span className="text-[#d67a00] font-semibold">IA</span>
        </h1>
        <p className="text-lg md:text-xl mt-3 text-[#6b5435] max-w-2xl">
          El asistente de inteligencia artificial diseñado para la nueva era
          digital en Latinoamérica — seguro, humano y 100 % privado.
        </p>
      </div>

      {/* SECCIÓN DE VALOR */}
      <section className="max-w-5xl grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "🔒 Privacidad absoluta",
            desc: "Procesamiento local, sin nube ni rastreo. Tus datos son solo tuyos.",
          },
          {
            title: "⚡ Eficiencia natural",
            desc: "Khipu IA aprende tu forma de trabajar y se adapta a tu ritmo.",
          },
          {
            title: "🌎 Identidad latinoamericana",
            desc: "Pensada en español, creada para nuestra región. Cálida, cercana y eficiente.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-[#fffaf3]/70 border border-[#e4d3b3] rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-[#d67a00] mb-2">
              {item.title}
            </h3>
            <p className="text-[#5c4a2a] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* SECCIÓN PROMOCIONAL */}
      <section className="max-w-3xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Redefine tu relación con la tecnología
        </h2>
        <p className="text-[#5c4a2a] leading-relaxed text-lg">
          Imagina un asistente que respeta tu privacidad, entiende tu idioma y
          ejecuta tareas en segundos.  
          Khipu IA es más que una herramienta: es una forma nueva de
          conectarte con la inteligencia artificial de manera ética,
          eficiente y humana.
        </p>
      </section>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#fffaf3]/80 backdrop-blur-sm border border-[#e4d3b3] p-8 rounded-2xl shadow-md w-full max-w-md transition transform hover:shadow-xl"
      >
        <h2 className="text-2xl mb-5 font-light">Únete a la lista privada</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full mb-3 p-3 border border-[#e0c7a5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67a00]/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border border-[#e0c7a5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67a00]/40"
        />
        <button
          type="submit"
          className="w-full bg-[#d67a00] hover:bg-[#b76200] text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Enviar
        </button>
        {mensaje && <p className="mt-3 text-[#6b5435]">{mensaje}</p>}
      </form>

      {/* PIE DE PÁGINA */}
      <footer className="mt-16 text-sm text-[#7b6447]">
        © {new Date().getFullYear()} Khipu IA — Hecho con ética y tecnología
        latinoamericana.
      </footer>

      {/* ANIMACIÓN */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
      `}</style>
    </main>
  );
}









// rebuild
// rebuild
