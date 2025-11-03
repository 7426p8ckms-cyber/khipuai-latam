export const metadata = {
  title: "Khipu AI",
  description: "Tu asistente inteligente para potenciar tu productividad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          background: "#fdfaf4", // beige suave
          color: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}



