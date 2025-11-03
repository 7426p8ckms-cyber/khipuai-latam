"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Control de scroll (fondo parallax + navbar)
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Control de animaciones fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
    setMensaje("✅ Gracias por unirte a la lista de espera.");
    setNombre("");
    setCorreo("");
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-gray-800 text-center p-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(
          135deg,
          hsl(${210 + scrollY / 30}, 40%, 96%) 0%,
          hsl(${240 + scrollY / 50}, 20%, 92%) 100%
        )`,
        transition: "background 0.2s linear",
      }}
    >
      {/* 🔹 Encabezado fijo translúcido */}
      <header
        className={`fixed top-0 left-0 w-full z-20 backdrop-blur-xl border-b transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 border-gray-200 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              K
            </div>
            <span className="font-medium text-gray-800 text-lg">Khipu AI</span>
          </div>
          <span className="text-sm text-gray-500 hidden md:block">
            Privacidad Local en LATAM
          </span>
        </div>
      </header>

      {/* 🔹 Contenido principal */}
      <div className="max-w-2xl w-full space-y-12 relative z-10 pt-32">
        <section className="fade-in">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Khipu AI  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 mt-2">
              Privacidad local. Inteligencia real.
            </span>
          </h1>
        </section>

        <section className="fade-in">
          <p className="text-lg md:text-xl text-gray-600">
            Tu asistente personal de IA que protege tus datos en tu propio
            dispositivo.  
            Tecnología diseñada en LATAM con la elegancia de la simplicidad.
          </p>
        </section>

        <section className="fade-in">
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-200">
            <h2 className="text-2xl font-medium mb-6 text-gray-800">
              Únete a la lista de espera 🧠
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="p-3 rounded-xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-all"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
                className="p-3 rounded-xl border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-all"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white py-3 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all shadow-lg"
              >
                Unirme a la lista de espera
              </button>
            </form>

            {mensaje && (
              <p className="mt-4 text-green-600 font-medium transition-all">
                {mensaje}
              </p>
            )}
          </div>
        </section>

        <footer className="fade-in text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Khipu AI — Privacidad Local en LATAM.
        </footer>
      </div>

      {/* 🔹 Animaciones */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s ease;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}




