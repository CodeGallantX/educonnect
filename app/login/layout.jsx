import localFont from "next/font/local";
import "../globals.css";

const manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata = {
  title: "Login - EduConnect",
  description: "Log in to EduConnect to ask questions, share knowledge, and collaborate with students across Africa.",
  keywords: "EduConnect, login, student learning, collaborative platform, peer-to-peer learning, ask questions, share knowledge, African students, STEM education, academic community",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Login - EduConnect",
    description: "Access your EduConnect account to join a vibrant student learning community and explore academic resources.",
    url: "https://educonnect.example.com/login",
    siteName: "EduConnect",
    images: [
      {
        url: "/images/educonnect-login-preview.png",
        width: 800,
        height: 600,
        alt: "EduConnect login page preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login - EduConnect",
    description: "Log in to EduConnect to collaborate and learn with students across Africa.",
    images: ["/images/educonnect-login-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
