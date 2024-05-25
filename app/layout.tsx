import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/components/common/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q&A",
  description: "A question app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <MainLayout>
        {children}
            </MainLayout>
        </ThemeProvider>
        </body>
    </html>
  );
}
