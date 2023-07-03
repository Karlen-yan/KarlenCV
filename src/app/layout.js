import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi nuevo cv",
  description: "Un aplicacion para demostrar mi cv"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="content">
            {children}
          </div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
