import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";



export const metadata: Metadata = {
  title: "Portafolio Eiris",
  description: "Portafolio personal de Eiris Elias Salazar Aguilar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="h-16">
          <NavBar />
        </header>
        <main className="min-h-[85vh]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
