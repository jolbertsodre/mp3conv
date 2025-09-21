import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MP3Conv",
  description: "Querendo baixar um vídeo do YouTube em formato de áudio MP3? Achou o site certo, o mais simples e fácil conversor de vídeos do YouTube em arquivos de áudio MP3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
