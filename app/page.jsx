"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      setEnviado(true);
      setFormData({ nombre: "", correo: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundColor: "#f6efe5",
        fontFamily: "Inter, sans-serif",
        color: "#2c2c2c",
      }}
    >
      {/* Ícono de candado pequeño */}
      <div className="mb-4">
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="28" width="32" height="28" rx="4" fill="#f28c28" />
          <path
            d="M24 28V20a8 8 0 0116 0v8"
            stroke="#f28c28"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="32" cy="42" r="3" fill="#fff" />
        </svg>
      </div>

      {/* Título principal */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-2">
        Khipu AI — Privacidad Local en LATAM
      </h1>

      {/* Frase secundaria */}
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Tu asistente inteligente que protege lo que más importa: tus datos.
      </p>

      {/* Formulario */}
      {!enviado ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 p-6 rounded-2xl shadow-md w-full max-w-md"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full p-3 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Únete a la lista privada
          </button>
        </form>
      ) : (
        <div className="bg-white/90 border border-orange-300 p-6 mt-6 rounded-2xl shadow-md max-w-md">
          <h3 className="text-2xl font-semibold mb-2 text-orange-600">
            ¡Gracias por confiar en Khipu AI!
          </h3>
          <p>Tu privacidad es nuestra prioridad.</p>
        </div>
      )}

      {/* Bloques de características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        {[
          {
            icon: "🔒",
            title: "Privacidad local garantizada",
            desc: "Tus datos permanecen solo en tu dispositivo.",
          },
          {
            icon: "🔗",
            title: "Integración total con tus apps",
            desc: "Conecta tu asistente con WhatsApp, Gmail o tu banco fácilmente.",
          },
          {
            icon: "🌎",
            title: "Diseño con identidad LATAM",
            desc: "Hecho para ti, adaptado a nuestra realidad digital.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/70 p-6 rounded-2xl shadow-sm border border-orange-100"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




