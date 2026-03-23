import Link from "next/link";
import {
  FlaskConical,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Truck,
  Clock,
} from "lucide-react";

const footerLinks = {
  productos: [
    { label: "BPC-157", href: "/productos/bpc-157" },
    { label: "TB-500", href: "/productos/tb-500" },
    { label: "Tirzepatida", href: "/productos/tirzepatida" },
    { label: "GHK-Cu", href: "/productos/ghk-cu" },
    { label: "Ver todos", href: "/productos" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Certificaciones", href: "/nosotros#certificaciones" },
    { label: "Preguntas frecuentes", href: "/nosotros#faq" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
    { label: "Política de envíos", href: "/envios" },
    { label: "Política de devoluciones", href: "/devoluciones" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      {/* Trust bar */}
      <div className="border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Pureza Certificada</p>
                <p className="text-xs text-text-muted mt-0.5">COA incluido en cada producto</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-sage" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Envío a todo México</p>
                <p className="text-xs text-text-muted mt-0.5">Discreto y con rastreo incluido</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Soporte Especializado</p>
                <p className="text-xs text-text-muted mt-0.5">Lun-Vie 9:00 - 18:00 CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-bg-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-text-primary leading-tight">
                  Peptide<span className="text-gradient-gold">Lab</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted leading-tight">
                  México
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mb-6">
              Proveedor líder de péptidos de investigación de alta pureza en
              México. Todos nuestros productos incluyen Certificado de Análisis
              (COA) verificable.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:contacto@peptidelabmx.com"
                className="flex items-center gap-2.5 text-sm text-text-muted hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@peptidelabmx.com
              </a>
              <a
                href="tel:+528112345678"
                className="flex items-center gap-2.5 text-sm text-text-muted hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +52 (81) 1234-5678
              </a>
              <span className="flex items-center gap-2.5 text-sm text-text-muted">
                <MapPin className="w-4 h-4" />
                Monterrey, Nuevo León, México
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Productos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} PeptideLab MX. Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-text-muted">
              Exclusivamente para fines de investigación. No apto para consumo humano.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
