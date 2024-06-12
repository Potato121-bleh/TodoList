'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "./component/header/page";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  let pathname = usePathname()

  if(pathname === "/"){
    return (
      <html lang="en">
        <body>
          <Header fortext="" foricon="pen"></Header>
          {children}
        </body>
      </html>
    );
  }
  else if(pathname === "/creator"){
    return (
      <html lang="en">
        <body>
          <Header fortext="true" foricon="arrow"></Header>
          {children}
        
        </body>
      </html>
    );
  }
  
}
