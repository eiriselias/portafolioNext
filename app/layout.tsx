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
        <NavBar />
        <main className="bg-fondColor">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
