"use client";
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
      {
        method: "POST",
        body: new URLSearchParams({ nombre, email, mensaje }),
      }
    );
    if (res.ok) setEnviado(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(240, 230, 210, 0.9), rgba(255, 180, 100, 0.3))",
        fontFamily: "Inter, sans-serif",
        color: "#3a2f1e",
      }}
    >
      {/* Figuras vectoriales decorativas */}
      <svg
        className="absolute top-10 left-10 animate-pulse opacity-30"
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="#f2b46d" strokeWidth="3" />
      </svg>
      <svg
        className="absolute bottom-10 right-10 animate-spin-slow opacity-20"
        width="160"
        height="160"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect
          x="15"
          y="15"
          width="70"
          height="70"
          rx="15"
          stroke="#d08a3c"
          strokeWidth="2"
        />
      </svg>

      <h1 className="text-5xl font-bold mb-4">Khipu AI</h1>
      <h2 className="text-xl font-medium mb-8 italic">
        Privacidad local, innovación global.
      </h2>

      <p className="max-w-xl text-lg mb-10">
        Tecnología con alma latinoamericana. Únete a la lista privada y sé parte
        del futuro de la inteligencia responsable.
      </p>

      {!enviado ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="p-3 rounded-xl border border-[#d8b98a] bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-xl border border-[#d8b98a] bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <textarea
            placeholder="Tu mensaje (opcional)"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="p-3 rounded-xl border border-[#d8b98a] bg-[#fffaf0] focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <button
            type="submit"
            className="mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#f4a261] to-[#e76f51] text-white font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Únete a la lista privada
          </button>
        </form>
      ) : (
        <p className="text-lg font-semibold mt-6 text-[#e76f51]">
          ¡Gracias por unirte! Te contactaremos pronto.
        </p>
      )}
    </div>
  );
}

// Animación personalizada
const style = document.createElement("style");
style.innerHTML = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 25s linear infinite;
  }
`;
document.head.appendChild(style);











