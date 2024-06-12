'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "./component/footer/page";
import Header from "./component/header/page";
import { useState } from "react";
type displaytext = string | number
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  let [Display, setDisplay] = useState<displaytext>("Hello");
  let [Displayheader, setDisplayheader] = useState<string>("hidden")
  let [Changeicon, setChangeicon] = useState<string>("hidden")
  
  let pathname = usePathname()
  
  
  function handleclick(){
    setDisplayheader("display")
    setChangeicon("display")
  }
  function handlegoback(){}
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
