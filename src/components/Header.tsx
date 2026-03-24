"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, FlaskConical, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center transition-transform group-hover:scale-105">
                <FlaskConical className="w-5 h-5 text-bg-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-text-primary leading-tight">
                  Peptide<span className="text-gold">Lab</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted leading-tight">
                  México
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-gold transition-colors rounded-md hover:bg-bg-hover"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/productos"
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-gold hover:bg-bg-hover transition-colors"
              >
                <Search className="w-[18px] h-[18px]" />
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="relative flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-gold hover:bg-bg-hover transition-colors"
              >
                <ShoppingCart className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-bg-primary text-[11px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-gold transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-subtle animate-fade-in">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-gold hover:bg-bg-hover rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
