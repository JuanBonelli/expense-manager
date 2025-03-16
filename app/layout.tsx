import "@/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Expense Manager",
  description: "50/30/20 rule",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className="">
      <body className="h-screen box-border bg-slate-50">
        <main className="h-full"> {children} </main>
      </body>
    </html>
  );
};

export default RootLayout;
