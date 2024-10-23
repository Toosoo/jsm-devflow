import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
import React from "react";
import ThemeProvider from "@/context/ThemeProvider";
import AnimationProvider from "@/context/AnimationProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devflow",
  description:
    "community-driven platform for asking and answering programming questions Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en" dir="ltr">
        <body className={inter.className}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          <ThemeProvider>
            <AnimationProvider>{children}</AnimationProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
