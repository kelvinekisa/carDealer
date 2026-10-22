"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "@/components/icons";

export function BrandMark({ dark = false }: { dark?: boolean }) {
  return <Link href="/" className={`brand-mark ${dark ? "brand-mark-dark" : ""}`} aria-label="carDealer Motors home"><span className="brand-crest">S</span><span><strong>carDealer</strong><small>MOTORS</small></span></Link>;
}

export function PublicHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [["Inventory", "/inventory"], ["Finance", "/finance"], ["Trade in", "/trade-in"], ["Our story", "/about"]];
  return <header className={`public-header ${overlay ? "public-header-overlay" : ""}`}>
    <BrandMark />
    <nav className={`public-nav ${open ? "public-nav-open" : ""}`}>
      {links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/contact" className="nav-contact" onClick={() => setOpen(false)}>Visit showroom <ArrowUpRight size={15} /></Link>
    </nav>
    <button className="icon-button mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}

export function PublicFooter() {
  return <footer className="public-footer"><div className="footer-top"><div><BrandMark /><p className="footer-blurb">Exceptional vehicles for exceptional journeys.<br />Nairobi · Kenya</p></div><div className="footer-links"><div><span className="eyebrow">EXPLORE</span><Link href="/inventory">Inventory</Link><Link href="/compare">Compare vehicles</Link><Link href="/import-request">Source a vehicle</Link></div><div><span className="eyebrow">CONNECT</span><Link href="/contact">Contact us</Link><a href="https://wa.me/254700000000">WhatsApp sales</a><Link href="/about">Our story</Link></div></div></div><div className="footer-bottom"><span>© 2024 carDealer Motors</span><span>carDealer Motors Digital Platform Concept</span><span>Built for the extraordinary.</span></div></footer>;
}

export function PageFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <div className={`site-shell ${className}`}><PublicHeader />{children}<PublicFooter /></div>; }
