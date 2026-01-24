"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname === "/newsletter";
  const staticFooter = pathname === "/privacy";

  return (
    <>
      <div className={staticFooter ? "page scroll-page" : "page"}>
        <div className={hideChrome ? "hidden" : undefined}>
          <Navbar />
        </div>
        {children}
        <footer className={`footer ${staticFooter ? "footer-static" : ""} ${hideChrome ? "hidden" : ""}`}>
        <span>THE SSA PROJECT©</span>
        <nav className="footer-links" aria-label="Footer">
          <a href="/contact">CONTACT</a>
          <a href="/shipping">SHIPPING</a>
          <a href="/return-policy">RETURN POLICY</a>
          <a href="/faq">FAQ</a>
        </nav>
        </footer>
      </div>
    </>
  );
}
