import localFont from "next/font/local";
import "../globals.css";

const manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata = {
  title: "Communities - EduConnect",
  description: "Join EduConnect to ask and answer questions, share knowledge, and collaborate with students across Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
