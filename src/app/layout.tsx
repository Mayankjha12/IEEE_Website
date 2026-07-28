import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/includes/Header";
import { Providers } from "@/provider";
import Footer from "@/components/includes/Footer";
import { BlueBgWrapper } from "@/components/includes/BlueBgWraper";

export const metadata: Metadata = {
  title: "IEEE NSUT - Innovate. Inspire.",
  description:
    "IEEE NSUT is the official student branch of IEEE at Netaji Subhas University of Technology. A community of innovators, researchers, and engineers dedicated to advancing technology for the benefit of humanity.",
  openGraph: {
    title: "IEEE NSUT - Innovate. Inspire.",
    description:
      "IEEE NSUT is the official student branch of IEEE at Netaji Subhas University of Technology. A community of innovators, researchers, and engineers dedicated to advancing technology for the benefit of humanity.",
    type: "website",
    url: "https://ieeensut.com/",
    siteName: "IEEE NSUT",
    images: [
      {
        url: "https://ieeensut.com/og-main.png",
        width: 1200,
        height: 720,
        alt: "IEEE NSUT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE NSUT - Innovate. Inspire.",
    description:
      "IEEE NSUT is the official student branch of IEEE at Netaji Subhas University of Technology. A community of innovators, researchers, and engineers dedicated to advancing technology for the benefit of humanity.",
    images: ["https://ieeensut.com/og-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <BlueBgWrapper className="p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0">
            <Footer />
          </BlueBgWrapper>
        </Providers>
      </body>
    </html>
  );
}
