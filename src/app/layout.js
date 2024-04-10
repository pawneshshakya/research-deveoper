"use client";
import "./globals.css";
import Logo from "@/pages/logo/page";
import Footer from "@/pages/footer/page";
import TopNavbar from "@/pages/header/TopNavbar";
import CallButton from "@/pages/utils/CallButton";
import WhatsAppButton from "@/pages/utils/WhatsAppButton";
import NavigationButton from "@/pages/utils/NavigationButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNavbar />
        <Logo />
        {children}
        <WhatsAppButton />
        <CallButton />
        <NavigationButton />
        <Footer />
      </body>
    </html>
  );
}
