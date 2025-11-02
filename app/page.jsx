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
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setMensaje("✅ Gracias por registrarte. Pronto te contactaremos.");
        setFormData({ nombre: "", correo: "" });
      } else {
        setMensaje("⚠️ Ocurrió un error al enviar tus datos.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("❌ No se pudo conectar al servidor.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-100 to-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4 text-sky-700">Khipu AI — Privacidad Local en LATAM</h1>
      <p className="mb-6 text-center max-w-md">
        Tu asistente de inteligencia artificial 100 % privado y local. Tus datos permanecen siempre en tu dispositivo.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-sky-600 text-white rounded-lg p-2 hover:bg-sky-700"
        >
          Enviar
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </main>
  );
}
