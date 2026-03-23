"use client";

import Link from "next/link";
import {
  ShoppingCart,
  FlaskConical,
  ChevronRight,
  ShieldCheck,
  Truck,
  FileCheck,
  CheckCircle2,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductDetailClient({
  product,
}: {
  product: Product;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs">(
    "description"
  );

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-secondary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-gold transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/productos"
              className="hover:text-gold transition-colors"
            >
              Productos
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-card border border-border-subtle flex items-center justify-center overflow-hidden">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md bg-gold/15 text-gold border border-gold/20">
                    {product.badge}
                  </span>
                </div>
              )}
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-[0.03]">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="100" r="12" fill="currentColor" />
                  <circle cx="100" cy="240" r="12" fill="currentColor" />
                  <circle cx="300" cy="240" r="12" fill="currentColor" />
                  <circle cx="200" cy="340" r="10" fill="currentColor" />
                  <circle cx="140" cy="160" r="6" fill="currentColor" />
                  <circle cx="260" cy="160" r="6" fill="currentColor" />
                  <line x1="200" y1="100" x2="100" y2="240" stroke="currentColor" strokeWidth="2" />
                  <line x1="200" y1="100" x2="300" y2="240" stroke="currentColor" strokeWidth="2" />
                  <line x1="100" y1="240" x2="300" y2="240" stroke="currentColor" strokeWidth="2" />
                  <line x1="200" y1="340" x2="100" y2="240" stroke="currentColor" strokeWidth="2" />
                  <line x1="200" y1="340" x2="300" y2="240" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <FlaskConical className="w-32 h-32 text-gold/15" />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-sage bg-sage/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.purity} pureza
                </span>
                {product.inStock ? (
                  <span className="flex items-center gap-1.5 text-xs text-sage">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    En stock
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-red-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    Agotado
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                {product.name}
              </h1>
              <p className="text-text-secondary mb-6">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-bold text-text-primary">
                  ${product.price.toLocaleString("es-MX")}
                </span>
                <span className="text-sm text-text-muted">MXN</span>
                {product.originalPrice && (
                  <span className="text-lg text-text-muted line-through">
                    ${product.originalPrice.toLocaleString("es-MX")}
                  </span>
                )}
              </div>

              {/* Quantity & Add to cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-border-color rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-12 flex items-center justify-center text-sm font-medium text-text-primary border-x border-border-color">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn-primary flex-1 inline-flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al carrito
                </button>
              </div>

              {/* Quick trust signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-card border border-border-subtle">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs text-text-secondary">
                    Pureza verificada HPLC
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-card border border-border-subtle">
                  <FileCheck className="w-4 h-4 text-sage shrink-0" />
                  <span className="text-xs text-text-secondary">
                    COA incluido
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-card border border-border-subtle">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs text-text-secondary">
                    Envío con rastreo
                  </span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                  Características clave
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs: Description & Specs */}
          <div className="mt-16">
            <div className="flex gap-1 border-b border-border-subtle">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === "description"
                    ? "text-gold"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                Descripción
                {activeTab === "description" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === "specs"
                    ? "text-gold"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                Especificaciones
                {activeTab === "specs" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            </div>

            <div className="py-8">
              {activeTab === "description" ? (
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  {product.description}
                </p>
              ) : (
                <div className="max-w-lg">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec) => (
                        <tr
                          key={spec.label}
                          className="border-b border-border-subtle"
                        >
                          <td className="py-3 text-sm text-text-muted pr-8">
                            {spec.label}
                          </td>
                          <td className="py-3 text-sm text-text-primary font-medium">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border-subtle">
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Productos <span className="text-gradient-gold">relacionados</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
