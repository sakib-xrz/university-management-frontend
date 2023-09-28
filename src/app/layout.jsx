import "./globals.css";
import Providers from "@/lib/Providers";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "University Management",
  description: "An university management software",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </body>
      </html>
    </Providers>
  );
}
