import Link from "next/link";
import Leaf from "./Leaf";
import SnsIcons from "./SnsIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="logo"><Leaf />Hiiragi</Link>
      <nav className="footer-nav">
        <Link href="/">Top</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/service">Service</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <SnsIcons />
      <p className="copy">&copy; 2026 Hiiragi All Rights Reserved.</p>
    </footer>
  );
}
