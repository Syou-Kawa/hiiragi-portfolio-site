"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Leaf from "./Leaf";

const LINKS = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/service", label: "Service" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo"><Leaf />Hiiragi</Link>
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label="メニュー"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`nav-contact-btn ${pathname === "/contact" ? "active" : ""}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
