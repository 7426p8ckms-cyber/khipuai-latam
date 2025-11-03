"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ nombre: "", correo: "" });
  const [showThankYou, setShowThankYou] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

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
      setShowThankYou(true);
      setFormData({ nombre: "", correo: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Animación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-section");
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections((prev) => [...new Set([...prev, i])]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        background:
          "linear-gradient(to bottom, #f8f1e7 0%, #e9d6b4 50%, #e0b96a 100%)",
        fontFamily: "Inter, sans-serif",
        color: "#2c2c2c",
      }}
    >
      {/* Candado minimalista animado */}
      <div
        className="w-16 h-16 mb-6 animate-bounce"
        dangerouslySetInnerHTML={{
          __html: `
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="16" y="28" width="32" height="28" rx="4" fill="#f4a261"/>
            <path d="M24 28V20a8 8 0 0116 0v8" stroke="#f4a261" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="32" cy="42" r="3" fill="#fff"/>
          </svg>`,
        }}
      ></div>

      {/* Título */}
      <h1
        className="text-3xl md:text-5xl font-semibold mb-3 opacity-0 animate-fadeDown"
        style={{ animation: "fadeDown 1s ease forwards" }}
      >
        Tu asistente de IA, 100% privado y hecho para LATAM
      </h1>

      {/* Frase secundaria */}
      <p className="text-lg md:text-xl mb-8 text-gray-700">
        Transformando la tecnología en confianza y simplicidad.
      </p>

      {/* Formulario */}
      {!showThankYou ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md w-full max-w-md"
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
            className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Únete a la lista privada
          </button>
        </form>
      ) : (
        <div className="bg-white/80 border border-yellow-300 p-6 mt-6 rounded-2xl shadow-lg max-w-md animate-fadeIn">
          <h3 className="text-2xl font-semibold mb-2 text-orange-600">
            ¡Gracias por confiar en Khipu AI!
          </h3>
          <p>Tu privacidad es nuestra prioridad.</p>
        </div>
      )}

      {/* Sección de características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        {[
          {
            icon: "🔒",
            title: "Privacidad local garantizada",
            desc: "Tus datos nunca salen de tu dispositivo. Seguridad total, sin compromisos.",
          },
          {
            icon: "🔗",
            title: "Integración total con tus apps",
            desc: "Conecta tu asistente con WhatsApp, Gmail o tu banco en segundos.",
          },
          {
            icon: "🌎",
            title: "Diseño con identidad LATAM",
            desc: "Hecho para ti, adaptado a la realidad y cultura digital latinoamericana.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`fade-section transform transition-all duration-700 rounded-2xl p-6 shadow-md bg-white/60 border border-yellow-200 ${
              visibleSections.includes(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeDown {
          animation: fadeDown 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}












