import localFont from "next/font/local";
import "../globals.css";

const manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata = {
  title: "Sign Up - EduConnect",
  description: "Join EduConnect to ask and answer questions, share knowledge, and collaborate with students across Africa.",
  keywords: "EduConnect, sign up, student learning, collaborative platform, peer-to-peer learning, ask questions, share knowledge, African students, STEM education, academic community",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Sign Up - EduConnect",
    description: "Create an account on EduConnect and start collaborating with fellow students to learn and grow academically.",
    url: "https://educonnect.example.com/signup",
    siteName: "EduConnect",
    images: [
      {
        url: "/images/educonnect-preview.png",
        width: 800,
        height: 600,
        alt: "EduConnect sign up preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - EduConnect",
    description: "Sign up for EduConnect to join a vibrant student learning community.",
    images: ["/images/educonnect-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
