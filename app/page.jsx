export default function Home() {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-slate-50 to-white text-gray-800 font-sans">
        <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              🔒 Khipu AI — Privacidad Local en LATAM
            </h1>
            <p className="text-lg mb-6">
              Tu asistente de inteligencia artificial 100 % privado y local.  
              Tus datos permanecen siempre en tu dispositivo.
            </p>

            <form
              action="https://script.google.com/macros/s/AKfycbwuMJ7ij9VYF2BinVOG30ZMhjXrC1dJO9to7j_Ye88WuFEmM6hLhZVhaQMIcjt-WaIigA/exec"
              method="POST"
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="p-3 border rounded-xl"
              />
              <input
                type="email"
                name="correo"
                placeholder="Tu correo"
                required
                className="p-3 border rounded-xl"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
              >
                Unirme a la lista de espera
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500">
              Gracias por confiar en la IA con privacidad real.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
