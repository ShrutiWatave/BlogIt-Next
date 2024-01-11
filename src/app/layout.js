import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "BlogIt",
  description: "A blogging app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <ThemeContextProvider>
          <ThemeProvider>  {/* For making theme context accessible without making layout.js a client component */}
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
