"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Catálogo de <span className="text-sage">Péptidos</span>
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            Todos nuestros péptidos son de grado investigación con pureza 99%+ y
            certificado de análisis incluido.
          </p>
        </div>
      </section>


      {/* Filters & Products */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Sort bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Buscar péptidos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-bg-card border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-text-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-bg-card border border-border-subtle rounded-lg text-sm text-text-secondary py-3 px-4 focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="name">Nombre A-Z</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category sidebar */}
            <aside className="lg:w-56 shrink-0">
              <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                Categorías
              </h3>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-gold/15 text-gold border border-gold/20"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-hover border border-transparent"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`ml-2 text-xs ${
                        selectedCategory === cat.id
                          ? "text-gold/70"
                          : "text-text-muted"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Products grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-text-muted">
                  {filteredProducts.length} producto
                  {filteredProducts.length !== 1 ? "s" : ""} encontrado
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <Search className="w-12 h-12 text-border-color mx-auto mb-4" />
                  <p className="text-text-secondary font-medium mb-2">
                    No se encontraron productos
                  </p>
                  <p className="text-sm text-text-muted">
                    Intenta con otro término de búsqueda o categoría
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductosPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
