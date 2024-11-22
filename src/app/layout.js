import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from '@radix-ui/themes';
import GlobalState from "@/context";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
// import Loading from "./loading";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <GlobalState>
        <CartProvider>
          <ToastContainer position="bottom-right"/>
      <Theme>
      {children}
        </Theme>
       </CartProvider>
        </GlobalState>
        </body>
      </>
    </html>
  );
}