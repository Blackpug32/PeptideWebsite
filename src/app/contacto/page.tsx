"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta inmediata en horario laboral",
    value: "+52 (81) 1234-5678",
    href: "https://wa.me/528112345678",
    accent: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Respuesta en menos de 24 horas",
    value: "contacto@peptidelabmx.com",
    href: "mailto:contacto@peptidelabmx.com",
    accent: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Lun-Vie 9:00 - 18:00 CST",
    value: "+52 (81) 1234-5678",
    href: "tel:+528112345678",
    accent: "text-sage",
    bg: "bg-sage/10",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Monterrey, Nuevo León, México",
    value: "Solo con cita previa",
    href: null,
    accent: "text-gold",
    bg: "bg-gold/10",
  },
];

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-sage/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            <span className="text-gradient-gold">Contáctanos</span>
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">
            ¿Tienes dudas sobre nuestros péptidos o necesitas una cotización
            personalizada? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact methods */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-text-primary mb-6">
                Canales de contacto
              </h2>
              <div className="flex flex-col gap-4">
                {contactMethods.map((method) => {
                  const content = (
                    <div className="flex gap-4 p-5 rounded-xl bg-bg-card border border-border-subtle card-hover">
                      <div
                        className={`w-11 h-11 rounded-lg ${method.bg} flex items-center justify-center shrink-0`}
                      >
                        <method.icon className={`w-5 h-5 ${method.accent}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">
                          {method.title}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">
                          {method.description}
                        </p>
                        <p className={`text-sm font-medium mt-1.5 ${method.accent}`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (method.href) {
                    return (
                      <a
                        key={method.title}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={method.title}>{content}</div>;
                })}
              </div>

              <div className="mt-8 p-5 rounded-xl bg-bg-card border border-border-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    Horario de atención
                  </h3>
                </div>
                <div className="space-y-1.5 text-sm text-text-secondary">
                  <p>Lunes a Viernes: 9:00 - 18:00 CST</p>
                  <p>Sábados: 10:00 - 14:00 CST</p>
                  <p className="text-text-muted">
                    Domingos y días festivos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
                <h2 className="text-xl font-bold text-text-primary mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-sm text-text-muted mb-8">
                  Completa el formulario y te responderemos en menos de 24 horas.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-sage mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="text-text-secondary mb-6">
                      Gracias por contactarnos. Te responderemos a la brevedad.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary text-sm"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="Dr. Juan Pérez"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="investigador@universidad.mx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Asunto
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="cotizacion">
                          Cotización por volumen
                        </option>
                        <option value="producto">
                          Información sobre un producto
                        </option>
                        <option value="pedido">
                          Estado de mi pedido
                        </option>
                        <option value="coa">
                          Solicitar COA
                        </option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Mensaje
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
                        placeholder="Describe tu consulta o solicitud..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      Al enviar este formulario, aceptas nuestro{" "}
                      <a href="/privacidad" className="text-gold hover:underline">
                        aviso de privacidad
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
