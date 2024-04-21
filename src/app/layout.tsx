import SessionProvider from "@/app/components/SessionProvider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "@/redux/Provider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Pastry Palace",
  description: "Coded by Aditya Jha",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const session = await getServerSession();
  return (
    
      <Providers >
    <html lang="en">
      <body className={inter.className + `mx-24  px-12`}>
        <Navbar/>
        {children}
        <Toaster/>
        </body>
        
    </html>
      </Providers>
      
  );
}

//<SessionProvider session={session}>
//</SessionProvider>
