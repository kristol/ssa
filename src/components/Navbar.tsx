"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isNewsletter = pathname?.startsWith("/newsletter");
  return (
    <header className={`navbar${isNewsletter ? " transparent" : ""}`} role="navigation" aria-label="Main">
      <div className="nav-inner">
        <div className="nav-group nav-left">
          <Link href="/" className="nav-link">HOME</Link>
          <Link href="#" className="nav-link">CLOTHING</Link>
        </div>

        <div className="nav-logo" aria-hidden>
          <Image
            src="/images/SSA_horizontal_logo.svg"
            alt="SSA"
            width={120}
            height={40}
            priority
          />
        </div>

        <div className="nav-group nav-right">
          <Link href="/about" className="nav-link">ABOUT US</Link>
          <Link href="#" className="nav-link">ACCOUNT</Link>
          <button className="nav-cart" aria-label="Cart">
            {/* simple bag icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 7h12l-1 12H7L6 7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
