import {
  FlaskConical,
  ShieldCheck,
  Award,
  Users,
  Target,
  Microscope,
  GraduationCap,
  Building2,
  ChevronDown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | PeptideLab MX",
  description:
    "Conoce a PeptideLab MX, tu proveedor de confianza de péptidos de investigación de alta pureza en México.",
};

const milestones = [
  {
    year: "2020",
    title: "Fundación",
    description:
      "PeptideLab MX nace con la misión de proveer péptidos de alta pureza accesibles para investigadores en México.",
  },
  {
    year: "2021",
    title: "Primeras certificaciones",
    description:
      "Implementamos protocolos de control de calidad y comenzamos a incluir COA con cada producto.",
  },
  {
    year: "2022",
    title: "Expansión del catálogo",
    description:
      "Ampliamos nuestro catálogo a más de 15 péptidos, incluyendo las últimas innovaciones en investigación metabólica.",
  },
  {
    year: "2023",
    title: "Red nacional",
    description:
      "Establecimos envíos con cadena de frío a toda la República Mexicana, alcanzando más de 2,000 pedidos entregados.",
  },
  {
    year: "2024",
    title: "Estándares GMP",
    description:
      "Nuestros proveedores de síntesis operan bajo estándares GMP, garantizando la máxima consistencia entre lotes.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Pureza Certificada",
    description:
      "Cada lote pasa por análisis HPLC y espectrometría de masas. No vendemos nada que no cumpla con nuestro estándar de 99%+.",
  },
  {
    icon: Target,
    title: "Transparencia Total",
    description:
      "Publicamos los Certificados de Análisis de cada producto. Creemos que la confianza se construye con datos verificables.",
  },
  {
    icon: Users,
    title: "Servicio al Investigador",
    description:
      "Nuestro equipo tiene formación científica y entiende las necesidades del laboratorio. No solo vendemos, asesoramos.",
  },
  {
    icon: Award,
    title: "Mejora Continua",
    description:
      "Constantemente evaluamos nuevos proveedores de síntesis y métodos de control de calidad para ofrecer lo mejor.",
  },
];

const faqs = [
  {
    question: "¿Sus péptidos son aptos para consumo humano?",
    answer:
      "No. Todos nuestros péptidos son exclusivamente para fines de investigación científica in vitro e in vivo. No están aprobados para uso terapéutico, diagnóstico ni consumo humano o animal.",
  },
  {
    question: "¿Qué es un Certificado de Análisis (COA)?",
    answer:
      "Un COA es un documento que detalla los resultados de las pruebas de calidad realizadas a un lote específico de producto. Incluye datos de pureza por HPLC, identificación por espectrometría de masas, contenido de agua, y apariencia física. Cada producto que vendemos incluye su COA correspondiente.",
  },
  {
    question: "¿Cómo se envían los péptidos?",
    answer:
      "Los péptidos se envían en forma de polvo liofilizado, sellados al vacío con gel refrigerante para mantener la cadena de frío durante el transporte. Utilizamos servicios de mensajería con rastreo en tiempo real y entrega en 24-72 horas a cualquier punto de la República Mexicana.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito y débito, MercadoPago, transferencia SPEI, depósito bancario y Clip. Todos los pagos se procesan de manera segura.",
  },
  {
    question: "¿Ofrecen descuentos por volumen?",
    answer:
      "Sí. Para pedidos institucionales o de volumen, contáctanos directamente por WhatsApp o correo electrónico para obtener una cotización personalizada con precios preferenciales.",
  },
  {
    question: "¿Cómo debo almacenar los péptidos?",
    answer:
      "Los péptidos liofilizados deben almacenarse a -20°C en un ambiente seco. Una vez reconstituidos, deben refrigerarse a 2-8°C y usarse dentro de las siguientes semanas. Las instrucciones específicas de almacenamiento se incluyen con cada producto.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-sage/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sage/20 bg-sage/5 mb-8">
              <Microscope className="w-3.5 h-3.5 text-sage" />
              <span className="text-xs font-medium text-sage tracking-wide">
                Sobre PeptideLab MX
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
              Ciencia al servicio de la{" "}
              <span className="text-gradient-gold">investigación</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Somos un equipo de profesionales apasionados por facilitar el
              acceso a péptidos de investigación de la más alta calidad en
              México. Desde nuestra fundación, nos hemos comprometido con la
              excelencia, la transparencia y el servicio al investigador.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Nuestra Misión
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Democratizar el acceso a péptidos de investigación de la más
                alta pureza en México y Latinoamérica, proporcionando productos
                certificados, documentación transparente y soporte especializado
                que impulse el avance de la investigación científica.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
              <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-sage" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Nuestra Visión
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Ser el proveedor de referencia en Latinoamérica para péptidos de
                investigación, reconocido por la calidad excepcional de nuestros
                productos, la integridad de nuestros procesos y nuestra
                contribución al ecosistema de investigación científica regional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Nuestros <span className="text-gradient-gold">Valores</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Los principios que guían cada decisión en PeptideLab
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-7 rounded-xl bg-bg-card border border-border-subtle card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold max-w-4xl mx-auto" />

      {/* Timeline */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Nuestra <span className="text-gradient-gold">Trayectoria</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-gradient-gold">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border-subtle mt-3" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certificaciones"
        className="py-20 lg:py-24 bg-bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Certificaciones y{" "}
              <span className="text-gradient-gold">Calidad</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Nuestro compromiso con la calidad se refleja en cada etapa del
              proceso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                HPLC Verificado
              </h3>
              <p className="text-sm text-text-secondary">
                Cada lote es analizado por cromatografía líquida de alta
                resolución para verificar pureza ≥99%.
              </p>
            </div>
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-5">
                <FlaskConical className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Espectrometría de Masas
              </h3>
              <p className="text-sm text-text-secondary">
                Confirmación de identidad molecular mediante MS para garantizar
                que cada péptido es exactamente lo que dice ser.
              </p>
            </div>
            <div className="p-7 rounded-xl bg-bg-card border border-border-subtle text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <Building2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Síntesis GMP
              </h3>
              <p className="text-sm text-text-secondary">
                Nuestros proveedores operan bajo Buenas Prácticas de
                Manufactura, asegurando consistencia y trazabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Preguntas{" "}
              <span className="text-gradient-gold">Frecuentes</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-bg-card border border-border-subtle overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-text-primary font-medium text-sm hover:text-gold transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
