import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

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

export const metadata: Metadata = {
  title: "Ali's Portfolio | Full Stack Developer",
  description: "Welcome to Ali's portfolio - Showcasing modern full-stack development projects, web applications, and software engineering expertise with a focus on minimalist design.",
  icons: "./brand.jpg",
  keywords: ["Full Stack Developer", "Web Development", "Software Engineer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Ali" }],
  openGraph: {
    title: "Ali's Portfolio | Full Stack Developer",
    description: "Modern full-stack development portfolio showcasing innovative web projects and software solutions",
    type: "website",
    siteName: "Ali's Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
