"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-bg-secondary z-50 flex flex-col shadow-2xl border-l border-border-subtle">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="text-lg font-semibold text-text-primary">
              Tu Carrito
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-hover transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-border-color mb-4" />
              <p className="text-text-secondary font-medium mb-2">
                Tu carrito está vacío
              </p>
              <p className="text-sm text-text-muted mb-6">
                Explora nuestros péptidos de investigación
              </p>
              <Link
                href="/productos"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-bg-card border border-border-subtle"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 rounded-lg bg-bg-primary flex items-center justify-center shrink-0 border border-border-subtle">
                    <span className="text-2xl font-bold text-gold">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-text-primary truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.product.quantity} · {item.product.purity}
                    </p>
                    <p className="text-sm font-semibold text-gold mt-2">
                      ${item.product.price.toLocaleString("es-MX")} MXN
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 rounded-md border border-border-color flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gold/50 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-medium text-text-primary w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 rounded-md border border-border-color flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gold/50 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-text-muted hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-subtle px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary font-medium">Subtotal</span>
              <span className="text-lg font-bold text-text-primary">
                ${totalPrice.toLocaleString("es-MX")} MXN
              </span>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Envío calculado al finalizar la compra
            </p>
            <button className="btn-primary w-full text-center">
              Finalizar compra
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm text-text-muted hover:text-gold mt-3 py-2 transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
