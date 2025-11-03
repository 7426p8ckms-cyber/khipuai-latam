"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando...");
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUGiRXEJ7dUazDVppx0S5G0XuJ72_Uzuri54Tw3yYgzIY1dJDM3vmTDiwo6dWdJlZxyg/exec",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );
      setStatus("¡Te has unido con éxito!");
      setEmail("");
    } catch {
      setStatus("Ocurrió un error. Inténtalo otra vez.");
    }
  };

  return (
    <main
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        maxWidth: "700px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "1rem",
          color: "#2c2c2c",
        }}
      >
        Khipu AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: "1.3rem",
          color: "#444",
          marginBottom: "2rem",
        }}
      >
        Conecta, automatiza y lleva tus ideas más lejos.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "0.8rem 1rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
            width: "60%",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#f49b00", // naranja cálido
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "0.8rem 1.2rem",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e18a00")}
          onMouseOut={(e) => (e.target.style.background = "#f49b00")}
        >
          Únete a la lista privada
        </button>
      </motion.form>

      {status && (
        <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.9rem" }}>
          {status}
        </p>
      )}
    </main>
  );
}






