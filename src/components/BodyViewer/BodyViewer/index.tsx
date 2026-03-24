'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, RotateCcw } from 'lucide-react';
import { getPeptideBodyData, SYSTEM_LABELS, type EffectPoint, type ApplicationMethod } from '@/data/peptideEffects';

// Dynamic import — Three.js cannot run on the server
const BodyScene = dynamic(() => import('./BodyScene'), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

function LoadingSkeleton() {
  return (
    <div className="w-full h-[350px] sm:h-[420px] lg:h-[520px] rounded-xl bg-bg-card border border-border-color flex flex-col items-center justify-center gap-3">
      <div className="animate-pulse-gold text-gold">
        <Sparkles className="w-8 h-8" />
      </div>
      <span className="text-xs text-text-muted">Cargando modelo 3D...</span>
    </div>
  );
}

// === EFFECTS PANEL ===
function EffectsPanel({
  effects,
  selectedId,
  onSelect,
}: {
  effects: EffectPoint[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="space-y-2.5">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
        Efectos Perceptibles
      </h3>
      {effects.map((effect) => {
        const isActive = selectedId === effect.id;
        return (
          <button
            key={effect.id}
            onClick={() => onSelect(isActive ? null : effect.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
              isActive
                ? 'border-gold/50 bg-bg-hover'
                : 'border-border-subtle hover:border-border-color hover:bg-white/[0.02]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 transition-shadow duration-300"
                style={{
                  backgroundColor: effect.color,
                  boxShadow: isActive ? `0 0 8px ${effect.color}` : 'none',
                }}
              />
              <span className="text-sm text-text-primary font-medium">{effect.label}</span>
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isActive ? '200px' : '0px',
                opacity: isActive ? 1 : 0,
              }}
            >
              <p className="mt-2 ml-[22px] text-xs text-text-secondary leading-relaxed">
                {effect.description}
              </p>
              <span className="inline-block mt-2 ml-[22px] text-[10px] px-2 py-0.5 rounded bg-bg-secondary text-text-muted border border-border-subtle">
                {SYSTEM_LABELS[effect.system]}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// === APPLICATION PANEL ===
function ApplicationPanel({
  methods,
  activeId,
  onSelect,
}: {
  methods: ApplicationMethod[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
        Métodos de Aplicación
      </h3>
      {methods.map((method) => {
        const isActive = activeId === method.id;
        return (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
              isActive
                ? 'border-gold/50 bg-bg-hover'
                : 'border-border-subtle hover:border-border-color hover:bg-white/[0.02]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-primary font-medium">{method.name}</span>
              {method.isPrimary && (
                <span className="text-[10px] font-semibold bg-gold text-bg-primary px-2 py-0.5 rounded-full leading-none">
                  PRINCIPAL
                </span>
              )}
            </div>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isActive ? '400px' : '0px',
                opacity: isActive ? 1 : 0,
              }}
            >
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">{method.description}</p>
              <div className="mt-3 space-y-1.5">
                {method.instructions.map((step, i) => (
                  <div key={i} className="flex gap-2 text-xs text-text-muted">
                    <span className="text-gold font-semibold shrink-0">{i + 1}.</span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// === MAIN VIEWER COMPONENT ===
export default function PeptideBodyViewer({ slug }: { slug: string }) {
  const data = getPeptideBodyData(slug);

  const [mode, setMode] = useState<'effects' | 'application'>('effects');
  const [selectedEffectId, setSelectedEffectId] = useState<string | null>(null);
  const [activeMethodId, setActiveMethodId] = useState<string | null>(
    data?.applicationMethods[0]?.id || null
  );

  if (!data) return null;

  return (
    <section className="mt-14 mb-8">
      {/* Divider */}
      <div className="divider-gold mb-8" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-1">
            Mapa de Efectos <span className="text-gradient-gold">en el Cuerpo</span>
          </h2>
          <p className="text-sm text-text-muted">
            Explora los efectos perceptibles y métodos de aplicación
          </p>
        </div>

        {/* Mode tabs */}
        <div className="flex gap-1.5 p-1 bg-bg-card rounded-lg border border-border-subtle">
          <button
            onClick={() => {
              setMode('effects');
              setSelectedEffectId(null);
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              mode === 'effects'
                ? 'bg-gold text-bg-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Efectos
          </button>
          <button
            onClick={() => {
              setMode('application');
              setSelectedEffectId(null);
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              mode === 'application'
                ? 'bg-gold text-bg-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Aplicación
          </button>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* 3D Canvas */}
        <div className="lg:col-span-3">
          <div className="w-full h-[350px] sm:h-[420px] lg:h-[520px] rounded-xl bg-bg-card border border-border-color overflow-hidden relative">
            <BodyScene
              mode={mode}
              effects={data.effects}
              methods={data.applicationMethods}
              selectedId={mode === 'effects' ? selectedEffectId : activeMethodId}
              onSelect={(id) => {
                if (mode === 'effects') setSelectedEffectId(id);
              }}
              activeMethodId={activeMethodId}
            />
            {/* Reset hint */}
            {(selectedEffectId || mode === 'application') && (
              <button
                onClick={() => {
                  setSelectedEffectId(null);
                  if (mode === 'application') {
                    setActiveMethodId(data.applicationMethods[0]?.id || null);
                  }
                }}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-bg-primary/80 border border-border-subtle text-text-muted text-xs hover:text-text-secondary transition-colors backdrop-blur-sm"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
          <p className="text-[11px] text-text-muted mt-2 text-center flex items-center justify-center gap-3">
            <span>↻ Arrastra para rotar</span>
            <span className="w-1 h-1 rounded-full bg-border-color" />
            <span>Scroll para zoom</span>
            <span className="w-1 h-1 rounded-full bg-border-color" />
            <span>Clic en los puntos para detalles</span>
          </p>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-2">
          <div className="bg-bg-card rounded-xl border border-border-color p-4 sm:p-5 lg:max-h-[520px] overflow-y-auto custom-scrollbar">
            {mode === 'effects' ? (
              <EffectsPanel
                effects={data.effects}
                selectedId={selectedEffectId}
                onSelect={setSelectedEffectId}
              />
            ) : (
              <ApplicationPanel
                methods={data.applicationMethods}
                activeId={activeMethodId}
                onSelect={setActiveMethodId}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
