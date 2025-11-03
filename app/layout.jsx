import "./globals.css";

export const metadata = {
  title: "Khipu AI",
  description: "Privacidad local en LATAM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}


