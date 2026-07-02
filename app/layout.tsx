import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

export const metadata: Metadata = {
    title: "Buy something",
};
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-bgCol static">
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
