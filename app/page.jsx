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
      className="min-h-screen flex flex-col items-center justify-center text-center text-gray-800 px-6"
      style={{
        background:
          "linear-gradient(180deg, #f8f3ec 0%, #f1e2c6 100%)",
        backgroundSize: "cover",
      }}
    >
      {/* Fondo decorativo */}
      <img
        src="https://images.unsplash.com/photo-1606761568499-6b1dbd6f98e5?auto=format&fit=crop&w=2000&q=80"
        alt="ondas doradas"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      {/* Cabecera */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative z-10 mt-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Khipu AI — Privacidad Local en LATAM
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Potencia tu día con IA, sin entregar tus datos.
        </p>
      </motion.div>

      {/* Imagen de candado */}
      <motion.img
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        src="https://images.unsplash.com/photo-1625089838828-2a66d3e4165f?auto=format&fit=crop&w=800&q=80"
        alt="candado brillante"
        className="w-28 md:w-36 mb-8 opacity-90 relative z-10"
      />

      {/* Bloques destacados */}
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

      {/* Fondo decorativo inferior */}
      <img
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=2000&q=80"
        alt="brillo dorado"
        className="absolute bottom-0 left-0 w-full h-80 object-cover opacity-30 pointer-events-none"
      />

      {/* Formulario */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative z-10 bg-gradient-to-b from-[#f1e2c6] to-[#f8f3ec] p-10 rounded-2xl shadow-md mb-24 max-w-md w-full"
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









