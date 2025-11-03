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
      setMensaje("¡Gracias por unirte!");
      setFormData({ nombre: "", email: "" });
    } else {
      setMensaje("Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f2e8] to-[#f3e7d3] flex flex-col items-center justify-center text-center p-8">
      {/* Logo / Icono */}
      <div className="mb-6">
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d67a00"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      {/* Título principal */}
      <h1 className="text-5xl md:text-6xl font-light text-[#3a2d1b] mb-3">
        Khipu AI
      </h1>

      {/* Frase inspiradora */}
      <p className="text-lg md:text-xl text-[#6b5435] mb-10">
        “Tecnología que une confianza e inteligencia.”
      </p>

      {/* Sección de características */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-12">
        {[
          {
            title: "Privacidad garantizada",
            desc: "Tu información está protegida con encriptación avanzada.",
          },
          {
            title: "Integración total con tus apps",
            desc: "Khipu AI se adapta fácilmente a tus herramientas actuales.",
          },
          {
            title: "Rendimiento excepcional",
            desc: "Diseñada para velocidad, precisión y escalabilidad.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-[#fffaf3]/70 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-medium text-[#d67a00] mb-2">
              {item.title}
            </h3>
            <p className="text-[#5c4a2a]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#fffaf3]/70 backdrop-blur-sm p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-4 text-[#3a2d1b] font-light">
          Únete a la lista privada
        </h2>
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
          className="w-full mb-3 p-3 border border-[#e0c7a5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67a00]/40"
        />
        <button
          type="submit"
          className="w-full bg-[#d67a00] hover:bg-[#b76200] text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Enviar
        </button>
        {mensaje && <p className="mt-3 text-[#6b5435]">{mensaje}</p>}
      </form>
    </main>
  );
}







