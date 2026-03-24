"use client";

import Link from "next/link";
import { ShoppingCart, FlaskConical } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-bg-card rounded-xl border border-border-subtle card-hover overflow-hidden">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-gold/15 text-gold border border-gold/20">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image area */}
      <Link href={`/productos/${product.slug}`}>
        <div className="relative aspect-square bg-gradient-to-br from-bg-secondary to-bg-primary flex items-center justify-center overflow-hidden">
          <FlaskConical className="w-20 h-20 text-gold/20" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/productos/${product.slug}`}>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-gold transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="text-xs font-medium text-sage bg-sage/10 px-2 py-0.5 rounded-full whitespace-nowrap">
            {product.purity}
          </span>
        </div>

        <p className="text-sm text-text-muted mb-3 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-text-muted">{product.quantity}</span>
          {product.inStock ? (
            <span className="flex items-center gap-1 text-xs text-sage">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              En stock
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Agotado
            </span>
          )}
        </div>

        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-xs text-text-muted line-through block">
                ${product.originalPrice.toLocaleString("es-MX")} MXN
              </span>
            )}
            <span className="text-lg font-bold text-text-primary">
              ${product.price.toLocaleString("es-MX")}{" "}
              <span className="text-xs font-normal text-text-muted">MXN</span>
            </span>
          </div>

          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="flex items-center gap-2 btn-primary text-sm !px-4 !py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
