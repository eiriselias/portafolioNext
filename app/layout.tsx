import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";



export const metadata: Metadata = {
  title: "Portafolio Eiris",
  description: "Portafolio personal de Eiris Elias Salazar Aguilar",
  icons: {
    icon: "/images/portfolio.svg",
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        <main className="bg-fondColor mt-12">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
