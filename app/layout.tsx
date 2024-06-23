import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav/Navbar";
import Sessionprovider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: {
    template: "%s | Msibii blog",
    default: "Msibii blog",
  },
  description:
    "Discover tutorials, advice and news on web development by Paul Msibii Gomis. Learn HTML, CSS, JavaScript, ReactJS and more with how-to guides and helpful resources",
  openGraph: {
    title: "Msibii blog",
    url: process.env.SITE_URL,
    siteName: "Msibii blog",
    images: "./og.png",
    type: "website",
  },
  keywords: ["Msibii blog", "web developement"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto p-10 space-y-10 ">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Sessionprovider />
      </body>
    </html>
  );
}
