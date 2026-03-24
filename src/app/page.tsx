import Link from "next/link";
import {
  FlaskConical,
  ShieldCheck,
  Truck,
  Award,
  ArrowRight,
  Microscope,
  Beaker,
  Atom,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const stats = [
  { value: "99%+", label: "Pureza verificada" },
  { value: "5,000+", label: "Pedidos entregados" },
  { value: "48hrs", label: "Envío promedio" },
  { value: "COA", label: "Con cada producto" },
];

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Pureza Certificada",
    description:
      "Cada lote es analizado por HPLC y espectrometría de masas. Certificado de Análisis (COA) incluido con cada producto.",
    accent: "gold" as const,
  },
  {
    icon: Truck,
    title: "Envío con Cadena de Frío",
    description:
      "Envío con rastreo a toda la República Mexicana. Empaque con control de temperatura para preservar la integridad del péptido.",
    accent: "sage" as const,
  },
  {
    icon: Award,
    title: "Estándares GMP",
    description:
      "Nuestros péptidos son sintetizados bajo estándares de Buenas Prácticas de Manufactura, garantizando consistencia lote a lote.",
    accent: "gold" as const,
  },
  {
    icon: Microscope,
    title: "Para Investigación",
    description:
      "Péptidos de grado investigación utilizados por laboratorios e instituciones académicas en toda Latinoamérica.",
    accent: "sage" as const,
  },
];

const categoryCards = [
  {
    icon: Beaker,
    name: "Regeneración",
    description: "BPC-157, TB-500 y más",
    href: "/productos?cat=regeneracion",
    count: 3,
  },
  {
    icon: Atom,
    name: "Metabolismo",
    description: "Tirzepatida, Semaglutida",
    href: "/productos?cat=metabolismo",
    count: 2,
  },
  {
    icon: FlaskConical,
    name: "Longevidad",
    description: "GHK-Cu, Epitalon",
    href: "/productos?cat=longevidad",
    count: 2,
  },
  {
    icon: Microscope,
    name: "Cognitivo",
    description: "Selank y más",
    href: "/productos?cat=cognitivo",
    count: 1,
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 pb-24 lg:py-32 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-medium text-gold tracking-wide">
                Péptidos de investigación · Pureza 99%+
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Péptidos de{" "}
              <span className="text-sage">alta pureza</span>
              <br />
              para investigación
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Proveedor líder en México de péptidos de grado investigación.
              Cada producto incluye Certificado de Análisis verificable y envío
              con control de temperatura.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/productos" className="btn-primary text-center text-base inline-flex items-center justify-center gap-2">
                Explorar catálogo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/nosotros" className="btn-secondary text-center text-base inline-flex items-center justify-center gap-2">
                Conocer más
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Categorías de <span className="text-sage">Investigación</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Explora nuestra selección de péptidos organizados por área de investigación
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryCards.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative p-6 rounded-xl bg-bg-card border border-border-subtle card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <cat.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">
                    {cat.count} productos
                  </span>
                  <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                Productos <span className="text-sage">Destacados</span>
              </h2>
              <p className="mt-3 text-text-secondary">
                Los péptidos más solicitados por investigadores en México
              </p>
            </div>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm transition-colors group"
            >
              Ver todos los productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Trust Features */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              ¿Por qué elegir{" "}
              <span className="text-sage">PeptideLab</span>?
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Nos distinguimos por nuestro compromiso con la calidad,
              transparencia y servicio al investigador
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-7 rounded-xl bg-bg-card border border-border-subtle card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${
                    feature.accent === "gold" ? "bg-gold/10" : "bg-sage/10"
                  } flex items-center justify-center mb-5`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      feature.accent === "gold" ? "text-gold" : "text-sage"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Resources */}
      <section className="py-20 lg:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Recursos para{" "}
              <span className="text-sage">investigadores</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Protocolos y referencias técnicas para el manejo adecuado de péptidos en laboratorio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Reconstitución y almacenamiento
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Reconstituir en agua estéril o solución salina al 0.9%</li>
                <li>Polvo liofilizado: −20 °C hasta 24 meses</li>
                <li>Solución reconstituida: 2–8 °C, usar en 4–8 semanas</li>
                <li>Evitar ciclos repetidos de congelación/descongelación</li>
              </ul>
            </div>
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <Microscope className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Control de calidad analítico
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>HPLC-UV: pureza ≥99% por área de pico</li>
                <li>MS (ESI o MALDI): confirmación de masa molecular</li>
                <li>Karl Fischer: contenido de agua &lt;8%</li>
                <li>COA disponible por número de lote</li>
              </ul>
            </div>
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Marco regulatorio
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Uso exclusivo para investigación científica</li>
                <li>No aptos para diagnóstico ni uso terapéutico</li>
                <li>Cumplimiento con NOM-059-SSA1 para reactivos</li>
                <li>Factura fiscal con desglose de lote incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Cómo <span className="text-sage">funciona</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Proceso simple y seguro para obtener tus péptidos de investigación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Elige tus péptidos",
                description:
                  "Explora nuestro catálogo y selecciona los péptidos que necesitas para tu investigación.",
              },
              {
                step: "02",
                title: "Realiza tu pedido",
                description:
                  "Paga de forma segura con tarjeta, MercadoPago, transferencia SPEI o depósito bancario.",
              },
              {
                step: "03",
                title: "Recibe en tu laboratorio",
                description:
                  "Envío con cadena de frío y rastreo. Control de temperatura garantizado. Incluye COA verificable.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mb-6">
                  <span className="text-xl font-bold text-gold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            ¿Listo para impulsar tu{" "}
            <span className="text-sage">investigación</span>?
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Únete a cientos de investigadores y laboratorios en México que
            confían en PeptideLab para sus péptidos de alta pureza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/productos"
              className="btn-primary text-base inline-flex items-center justify-center gap-2"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="btn-secondary text-base inline-flex items-center justify-center gap-2"
            >
              Contactar un asesor
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage" />
              Envío gratis en pedidos +$2,500
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage" />
              COA incluido
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sage" />
              Soporte especializado
            </span>
          </div>
        </div>
      </section>

      {/* Research disclaimer */}
      <section className="py-8 bg-bg-secondary border-t border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-text-muted leading-relaxed">
            <strong className="text-text-secondary">Aviso importante:</strong>{" "}
            Todos los productos ofrecidos por PeptideLab MX son exclusivamente
            para fines de investigación científica in vitro e in vivo. No están
            destinados para uso diagnóstico, terapéutico, ni para consumo humano
            o animal. Al adquirir nuestros productos, el comprador acepta la
            responsabilidad del uso adecuado conforme a las regulaciones
            aplicables.
          </p>
        </div>
      </section>
    </>
  );
}
