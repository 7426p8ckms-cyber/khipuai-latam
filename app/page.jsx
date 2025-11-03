"use client";
import { motion } from "framer-motion";
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
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      setEnviado(true);
      setFormData({ nombre: "", correo: "" });
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeUpSequence = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.25 },
    }),
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center text-gray-800 px-6 overflow-hidden relative"
      style={{
        background: "linear-gradient(180deg, #f9f4eb 0%, #f1e2c6 100%)",
      }}
    >
      {/* Fondo animado con ondas */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-64 opacity-30"
        style={{ transform: "translateX(-50%)" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="#d6c7aa"
            fillOpacity="0.3"
            d="M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,117.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192V320H0Z"
          ></path>
        </svg>
      </motion.div>

      {/* Encabezado */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative z-10 mt-32"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Khipu AI — Privacidad Local en LATAM
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Potencia tu día con IA, sin entregar tus datos.
        </p>
      </motion.div>

      {/* Candado SVG */}
      <div className="relative z-10 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#b59c6c"
          className="w-20 h-20 opacity-70 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V7.5a4.5 4.5 0 00-9 0v3M6 10.5h12a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 21v-9a1.5 1.5 0 011.5-1.5z"
          />
        </svg>
      </div>

      {/* Cuadrados destacados */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-24 relative z-10">
        {[
          {
            title: "Privacidad Total",
            desc: "Tus datos nunca salen de tu dispositivo.",
          },
          {
            title: "Conectividad Inteligente",
            desc: "Integra WhatsApp, correo y banca en segundos.",
          },
          {
            title: "Rapidez Natural",
            desc: "Interactúa por chat y obtén resultados inmediatos.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpSequence}
            className="p-8 rounded-2xl shadow-md bg-white/60 backdrop-blur-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Brillo decorativo */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-40"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <ellipse
            cx="300"
            cy="100"
            rx="250"
            ry="60"
            fill="#d6c7aa"
            fillOpacity="0.2"
          />
        </svg>
      </motion.div>

      {/* Formulario */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative z-10 bg-gradient-to-b from-[#f1e2c6] to-[#f9f4eb] p-10 rounded-2xl shadow-md mb-24 max-w-md w-full"
      >
        {enviado ? (
          <p className="text-lg text-gray-800 font-medium">
            ¡Gracias por unirte! Te contactaremos pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            />
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Tu correo"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            />
            <button
              type="submit"
              className="bg-[#ff7b00] text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl hover:brightness-110"
            >
              Únete a la lista privada
            </button>
          </form>
        )}
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 text-gray-600 mb-10 text-sm">
        © 2025 Khipu AI — Privacidad Local en LATAM
      </footer>
    </main>
  );
}










