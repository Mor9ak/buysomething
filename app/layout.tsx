import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/widgets/header/Header";

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
        <body className="min-h-full flex flex-col bg-bgCol">
        <Header/>
        {children}
        </body>
        </html>
    );
}
