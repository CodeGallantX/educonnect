import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from './components/ThemeToggle';

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata = {
  title: "EduConnect - Empowering Collaborative Learning for Students",
  description:
    "EduConnect is a platform for African secondary school students to ask questions, share knowledge, and learn together. Explore topics like math, science, and literature, and join a vibrant learning community.",
  keywords: [
    "EduConnect",
    "collaborative learning",
    "African students",
    "secondary school",
    "ask questions",
    "share knowledge",
    "study help",
    "math formulas",
    "science problems",
    "literature discussions",
    "academic community",
    "peer-to-peer learning",
    "student Q&A",
    "subject categories",
    "STEM education",
    "student forum",
    "study techniques",
    "learning resources",
  ].join(", "),
  authors: [{ name: "EduConnect Team", url: "https://educonnect-beryl.vercel.app" }],
  openGraph: {
    title: "EduConnect - Empowering Collaborative Learning for Students",
    description:
      "Join EduConnect, a platform for African secondary school students to ask and answer questions, share knowledge, and collaborate academically.",
    url: "https://educonnect-beryl.vercel.app",
    siteName: "EduConnect",
    images: [
      {
        url: "/images/educonnect-preview.png",
        width: 800,
        height: 600,
        alt: "EduConnect platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduConnect - Empowering Collaborative Learning for Students",
    description:
      "Ask questions, share knowledge, and join a vibrant student learning community on EduConnect.",
    images: ["/images/educonnect-preview.png"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${manrope.variable} antialiased`}>
      <ThemeToggle/>
        {children}
        </body>
    </html>
  );
}
