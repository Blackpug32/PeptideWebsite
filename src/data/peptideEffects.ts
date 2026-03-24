// === TYPES ===
export type BodySystem =
  | 'nervous'
  | 'muscular'
  | 'digestive'
  | 'endocrine'
  | 'integumentary'
  | 'immune'
  | 'cardiovascular'
  | 'skeletal';

export type ApplicationType =
  | 'subcutaneous'
  | 'intramuscular'
  | 'nasal'
  | 'topical'
  | 'oral';

export interface EffectPoint {
  id: string;
  label: string;
  description: string;
  position: [number, number, number];
  segments: string[];
  system: BodySystem;
  color: string;
  cameraOffset: [number, number, number];
}

export interface ApplicationMethod {
  id: string;
  name: string;
  type: ApplicationType;
  isPrimary: boolean;
  description: string;
  instructions: string[];
  positions: [number, number, number][];
  segments: string[];
  cameraOffset: [number, number, number];
}

export interface PeptideBodyData {
  effects: EffectPoint[];
  applicationMethods: ApplicationMethod[];
}

// === SYSTEM COLORS ===
export const SYSTEM_COLORS: Record<BodySystem, string> = {
  nervous: '#e8d44d',
  muscular: '#e07a5f',
  digestive: '#7d9a7a',
  endocrine: '#c9a84c',
  integumentary: '#81b1d4',
  immune: '#b07dc9',
  cardiovascular: '#e05f5f',
  skeletal: '#d4d0c8',
};

// === SYSTEM LABELS (Spanish) ===
export const SYSTEM_LABELS: Record<BodySystem, string> = {
  nervous: 'Sistema Nervioso',
  muscular: 'Sistema Muscular',
  digestive: 'Sistema Digestivo',
  endocrine: 'Sistema Endocrino',
  integumentary: 'Sistema Tegumentario',
  immune: 'Sistema Inmunológico',
  cardiovascular: 'Sistema Cardiovascular',
  skeletal: 'Sistema Esquelético',
};

// === PEPTIDE DATA ===
const peptideData: Record<string, PeptideBodyData> = {
  'bpc-157': {
    effects: [
      {
        id: 'bpc-gut',
        label: 'Reparación Gastrointestinal',
        description:
          'BPC-157 promueve la curación del revestimiento gastrointestinal, reduciendo inflamación y mejorando la integridad de la mucosa. Se percibe como mejor digestión, reducción de molestias estomacales y mayor tolerancia alimentaria.',
        position: [-0.05, 1.42, 0.1],
        segments: ['lowerTorso'],
        system: 'digestive',
        color: SYSTEM_COLORS.digestive,
        cameraOffset: [0.8, 0.2, 1.8],
      },
      {
        id: 'bpc-tendon',
        label: 'Regeneración de Tendones y Ligamentos',
        description:
          'Acelera la reparación de tendones y ligamentos dañados mediante la estimulación de la angiogénesis y la producción de factores de crecimiento. El efecto perceptible es una recuperación más rápida y reducción del dolor articular.',
        position: [-0.14, 0.55, 0.05],
        segments: ['leftLowerLeg', 'leftUpperLeg', 'rightLowerLeg', 'rightUpperLeg'],
        system: 'skeletal',
        color: SYSTEM_COLORS.skeletal,
        cameraOffset: [0.8, -0.3, 2.2],
      },
      {
        id: 'bpc-muscle',
        label: 'Recuperación Muscular',
        description:
          'Promueve la regeneración de fibras musculares dañadas y reduce la inflamación post-ejercicio. Se percibe como menor tiempo de recuperación, reducción de agujetas y mejor rendimiento deportivo.',
        position: [0.35, 1.62, 0.05],
        segments: ['leftUpperArm', 'rightUpperArm', 'leftUpperLeg', 'rightUpperLeg'],
        system: 'muscular',
        color: SYSTEM_COLORS.muscular,
        cameraOffset: [1.2, 0.3, 2.0],
      },
      {
        id: 'bpc-wound',
        label: 'Cicatrización de Heridas',
        description:
          'Estimula la curación cutánea acelerando la formación de tejido de granulación y promoviendo la angiogénesis local. Se observa cierre más rápido de heridas y menor formación de cicatrices.',
        position: [0, 1.7, 0.15],
        segments: ['upperTorso'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [0.6, 0.4, 1.8],
      },
    ],
    applicationMethods: [
      {
        id: 'bpc-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Método más común. Se puede inyectar cerca del sitio de la lesión para efecto localizado, o en el abdomen para efecto sistémico/gastrointestinal.',
        instructions: [
          'Reconstituir el polvo liofilizado con agua bacteriostática',
          'Limpiar el sitio de inyección con alcohol isopropílico',
          'Inyectar subcutáneamente en el pliegue de piel del abdomen o cerca del área afectada',
          'Alternar los sitios de inyección para evitar irritación',
          'Almacenar la solución reconstituida a 2-8°C',
        ],
        positions: [
          [-0.1, 1.2, 0.17],
          [0.1, 1.2, 0.17],
          [-0.14, 0.55, 0.06],
        ],
        segments: ['lowerTorso', 'leftLowerLeg'],
        cameraOffset: [0.8, 0, 2.5],
      },
      {
        id: 'bpc-oral',
        name: 'Vía Oral',
        type: 'oral',
        isPrimary: false,
        description:
          'Alternativa no invasiva especialmente útil para efectos gastrointestinales. BPC-157 muestra notable estabilidad en el pH ácido del estómago a diferencia de la mayoría de péptidos.',
        instructions: [
          'Disponible en cápsulas o solución líquida sublingual',
          'Tomar en ayunas para máxima absorción',
          'No mezclar con alimentos calientes',
          'Ideal para efectos dirigidos al tracto gastrointestinal',
        ],
        positions: [[0, 2.08, 0.15]],
        segments: ['head', 'lowerTorso'],
        cameraOffset: [0.5, 0.6, 1.5],
      },
    ],
  },

  'tb-500': {
    effects: [
      {
        id: 'tb-muscle',
        label: 'Regeneración Muscular',
        description:
          'TB-500 promueve la migración celular y diferenciación de células satélite para la reparación de fibras musculares. Se percibe como recuperación acelerada post-ejercicio, menor dolor muscular y mejor flexibilidad.',
        position: [0, 1.65, 0.12],
        segments: ['upperTorso', 'leftUpperArm', 'rightUpperArm'],
        system: 'muscular',
        color: SYSTEM_COLORS.muscular,
        cameraOffset: [1.0, 0.3, 2.2],
      },
      {
        id: 'tb-inflammation',
        label: 'Reducción de Inflamación Articular',
        description:
          'Reduce la inflamación sistémica mediante la regulación de citoquinas proinflamatorias. El efecto perceptible es menor rigidez articular, mayor rango de movimiento y reducción del dolor en articulaciones.',
        position: [0.14, 0.55, 0.05],
        segments: ['rightLowerLeg', 'rightUpperLeg', 'leftLowerLeg', 'leftUpperLeg'],
        system: 'skeletal',
        color: SYSTEM_COLORS.skeletal,
        cameraOffset: [0.8, -0.4, 2.5],
      },
      {
        id: 'tb-skin',
        label: 'Reparación Cutánea',
        description:
          'Acelera la cicatrización de heridas y reduce la formación de cicatrices promoviendo la migración de queratinocitos. Se observa cierre más rápido de heridas y piel más uniforme.',
        position: [0.42, 1.35, 0.04],
        segments: ['rightForearm', 'upperTorso'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [1.2, 0.2, 1.8],
      },
      {
        id: 'tb-hair',
        label: 'Estimulación Capilar',
        description:
          'Timosina Beta-4 promueve la diferenciación de células madre del folículo piloso, estimulando el crecimiento de cabello nuevo. Se percibe como mayor densidad capilar y fortalecimiento del cabello existente.',
        position: [0, 2.38, 0],
        segments: ['head'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [0.4, 0.8, 1.2],
      },
      {
        id: 'tb-cardio',
        label: 'Protección Cardiovascular',
        description:
          'TB-500 promueve la reparación del tejido cardíaco y la formación de nuevos vasos sanguíneos. Puede percibirse como mejor resistencia cardiovascular y recuperación más rápida del ritmo cardíaco.',
        position: [-0.08, 1.65, 0.09],
        segments: ['upperTorso'],
        system: 'cardiovascular',
        color: SYSTEM_COLORS.cardiovascular,
        cameraOffset: [0.6, 0.4, 1.6],
      },
    ],
    applicationMethods: [
      {
        id: 'tb-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Método preferido para distribución sistémica. La inyección subcutánea permite una absorción gradual y sostenida del péptido.',
        instructions: [
          'Reconstituir con agua bacteriostática (1-2 mL)',
          'Limpiar el sitio con alcohol isopropílico',
          'Inyectar en el tejido subcutáneo del abdomen o muslo',
          'Rotar los sitios de inyección entre aplicaciones',
          'Refrigerar la solución reconstituida y usar dentro de 30 días',
        ],
        positions: [
          [0, 1.2, 0.17],
          [-0.14, 0.78, 0.06],
          [0.14, 0.78, 0.06],
        ],
        segments: ['lowerTorso', 'leftUpperLeg', 'rightUpperLeg'],
        cameraOffset: [0.8, 0, 2.5],
      },
      {
        id: 'tb-im',
        name: 'Inyección Intramuscular',
        type: 'intramuscular',
        isPrimary: false,
        description:
          'Alternativa que permite mayor velocidad de absorción. Se aplica directamente en el músculo deltoides o glúteo para distribución más rápida.',
        instructions: [
          'Reconstituir de la misma manera que para subcutánea',
          'Utilizar aguja apropiada para inyección intramuscular (calibre 25-27)',
          'Inyectar en el músculo deltoides o vasto lateral del muslo',
          'Aspirar antes de inyectar para verificar que no se está en un vaso sanguíneo',
          'Aplicar presión suave después de retirar la aguja',
        ],
        positions: [
          [-0.4, 1.65, 0.05],
          [0.14, 0.78, 0.04],
        ],
        segments: ['leftUpperArm', 'rightUpperLeg'],
        cameraOffset: [1.2, 0.2, 2.0],
      },
    ],
  },

  tirzepatida: {
    effects: [
      {
        id: 'tirz-appetite',
        label: 'Supresión del Apetito',
        description:
          'Tirzepatida actúa sobre los receptores GIP y GLP-1 en el hipotálamo, reduciendo significativamente las señales de hambre. El efecto más notable es una disminución drástica del apetito, reducción de antojos y sensación de saciedad prolongada.',
        position: [0, 2.25, 0.08],
        segments: ['head'],
        system: 'nervous',
        color: SYSTEM_COLORS.nervous,
        cameraOffset: [0.5, 0.7, 1.3],
      },
      {
        id: 'tirz-fat',
        label: 'Reducción de Grasa Corporal',
        description:
          'Promueve la oxidación de ácidos grasos y reduce la acumulación de grasa visceral. El efecto perceptible es una pérdida significativa de peso corporal, especialmente en la zona abdominal, con preservación relativa de masa muscular.',
        position: [0, 1.25, 0.14],
        segments: ['lowerTorso', 'pelvis'],
        system: 'endocrine',
        color: SYSTEM_COLORS.endocrine,
        cameraOffset: [0.8, 0, 2.0],
      },
      {
        id: 'tirz-glucose',
        label: 'Control Glucémico',
        description:
          'Estimula la secreción de insulina dependiente de glucosa y suprime el glucagón. Se percibe como niveles de energía más estables durante el día, sin picos ni caídas de azúcar, y menor necesidad de comer entre comidas.',
        position: [-0.08, 1.38, 0.06],
        segments: ['lowerTorso'],
        system: 'endocrine',
        color: '#dfc06e',
        cameraOffset: [0.8, 0.1, 1.8],
      },
      {
        id: 'tirz-gastric',
        label: 'Retraso del Vaciamiento Gástrico',
        description:
          'Ralentiza el vaciamiento del estómago prolongando la sensación de saciedad. Se percibe como plenitud prolongada después de comer, necesidad de porciones más pequeñas y digestión más lenta.',
        position: [-0.05, 1.48, 0.1],
        segments: ['lowerTorso', 'upperTorso'],
        system: 'digestive',
        color: SYSTEM_COLORS.digestive,
        cameraOffset: [0.7, 0.2, 1.6],
      },
    ],
    applicationMethods: [
      {
        id: 'tirz-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Único método de administración. Se aplica una vez por semana en inyección subcutánea. La rotación de sitios es importante para evitar lipodistrofia.',
        instructions: [
          'Administrar una vez por semana, el mismo día cada semana',
          'Inyectar subcutáneamente en abdomen, muslo o parte posterior del brazo',
          'Rotar el sitio de inyección con cada dosis',
          'Se puede aplicar a cualquier hora del día, con o sin alimentos',
          'Iniciar con dosis baja e incrementar gradualmente según protocolo',
          'No mezclar con otros inyectables en la misma jeringa',
        ],
        positions: [
          [-0.1, 1.22, 0.17],
          [0.1, 1.22, 0.17],
          [-0.14, 0.78, 0.06],
          [0.14, 0.78, 0.06],
          [0.45, 1.55, 0.04],
        ],
        segments: ['lowerTorso', 'leftUpperLeg', 'rightUpperLeg', 'rightUpperArm'],
        cameraOffset: [1.0, 0, 3.0],
      },
    ],
  },

  semaglutida: {
    effects: [
      {
        id: 'sema-appetite',
        label: 'Reducción del Apetito',
        description:
          'Semaglutida activa los receptores GLP-1 en el cerebro, particularmente en el hipotálamo y el área postrema, reduciendo las señales de hambre. Se percibe como una disminución natural del apetito y de la preocupación constante por la comida.',
        position: [0, 2.25, 0.08],
        segments: ['head'],
        system: 'nervous',
        color: SYSTEM_COLORS.nervous,
        cameraOffset: [0.5, 0.7, 1.3],
      },
      {
        id: 'sema-weight',
        label: 'Pérdida de Peso',
        description:
          'Reduce el peso corporal mediante la disminución de ingesta calórica y la mejora del metabolismo de grasas. Se percibe como pérdida progresiva de peso, reducción visible del perímetro abdominal y menor acumulación de grasa visceral.',
        position: [0, 1.25, 0.14],
        segments: ['lowerTorso', 'pelvis'],
        system: 'endocrine',
        color: SYSTEM_COLORS.endocrine,
        cameraOffset: [0.8, 0, 2.0],
      },
      {
        id: 'sema-gastric',
        label: 'Saciedad Prolongada',
        description:
          'Retrasa el vaciamiento gástrico, manteniendo los alimentos en el estómago por más tiempo. El efecto perceptible es sentirse satisfecho con porciones más pequeñas y no sentir hambre entre comidas durante horas.',
        position: [-0.05, 1.45, 0.1],
        segments: ['lowerTorso'],
        system: 'digestive',
        color: SYSTEM_COLORS.digestive,
        cameraOffset: [0.7, 0.2, 1.6],
      },
      {
        id: 'sema-cardio',
        label: 'Protección Cardiovascular',
        description:
          'Semaglutida ha demostrado beneficios cardiovasculares, reduciendo eventos adversos mayores. Se puede percibir como mejor resistencia al ejercicio, presión arterial más estable y mejores marcadores lipídicos.',
        position: [-0.08, 1.65, 0.09],
        segments: ['upperTorso'],
        system: 'cardiovascular',
        color: SYSTEM_COLORS.cardiovascular,
        cameraOffset: [0.6, 0.4, 1.6],
      },
      {
        id: 'sema-glucose',
        label: 'Regulación de Glucosa',
        description:
          'Estimula la secreción de insulina de manera dependiente de glucosa y reduce la producción hepática de glucosa. Se percibe como niveles de energía consistentes y eliminación de "bajones" de azúcar.',
        position: [-0.08, 1.38, 0.06],
        segments: ['lowerTorso'],
        system: 'endocrine',
        color: '#dfc06e',
        cameraOffset: [0.8, 0.1, 1.8],
      },
    ],
    applicationMethods: [
      {
        id: 'sema-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Método principal de administración. Se aplica una vez por semana gracias a su vida media prolongada por la modificación con ácido graso C-18.',
        instructions: [
          'Administrar una vez por semana, preferiblemente el mismo día',
          'Inyectar subcutáneamente en abdomen, muslo o brazo superior',
          'Rotar el sitio de inyección semanalmente',
          'Se puede aplicar con o sin alimentos',
          'Iniciar con dosis baja (0.25 mg) y escalar gradualmente',
          'Almacenar en refrigeración (2-8°C)',
        ],
        positions: [
          [-0.1, 1.22, 0.17],
          [0.1, 1.22, 0.17],
          [-0.14, 0.78, 0.06],
          [0.45, 1.55, 0.04],
        ],
        segments: ['lowerTorso', 'leftUpperLeg', 'rightUpperArm'],
        cameraOffset: [1.0, 0, 3.0],
      },
      {
        id: 'sema-oral',
        name: 'Vía Oral (Tableta)',
        type: 'oral',
        isPrimary: false,
        description:
          'Formulación oral disponible (Rybelsus®). Utiliza el potenciador de absorción SNAC (salcaprozato de sodio) para permitir la absorción intestinal del péptido.',
        instructions: [
          'Tomar en ayunas al despertar con un vaso pequeño de agua (máx. 120 mL)',
          'Esperar al menos 30 minutos antes de comer, beber o tomar otros medicamentos',
          'Tragar la tableta entera, no partir ni masticar',
          'Administración diaria (a diferencia de la inyección semanal)',
          'No tomar con otros líquidos que no sean agua pura',
        ],
        positions: [[0, 2.08, 0.15]],
        segments: ['head', 'lowerTorso'],
        cameraOffset: [0.5, 0.6, 1.5],
      },
    ],
  },

  'ghk-cu': {
    effects: [
      {
        id: 'ghk-collagen',
        label: 'Estimulación de Colágeno',
        description:
          'GHK-Cu activa los genes responsables de la producción de colágeno I y III, elastina y glicosaminoglicanos. Se percibe como piel más firme, reducción visible de arrugas finas y mayor elasticidad cutánea, especialmente en rostro y cuello.',
        position: [0, 2.12, 0.14],
        segments: ['head'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [0.4, 0.7, 1.2],
      },
      {
        id: 'ghk-wrinkle',
        label: 'Reducción de Arrugas',
        description:
          'Promueve la remodelación de la matriz extracelular y aumenta la producción de ácido hialurónico dérmico. El efecto visible es suavización de líneas de expresión, tono de piel más uniforme y aspecto rejuvenecido.',
        position: [0.06, 2.18, 0.12],
        segments: ['head'],
        system: 'integumentary',
        color: '#6ba3c7',
        cameraOffset: [0.3, 0.7, 1.0],
      },
      {
        id: 'ghk-wound',
        label: 'Curación de Heridas',
        description:
          'Acelera todas las fases de la curación cutánea: inflamación controlada, proliferación celular y remodelación. Se observa cierre más rápido de heridas, menor inflamación y cicatrices menos visibles.',
        position: [0.42, 1.35, 0.06],
        segments: ['rightForearm', 'upperTorso'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [1.0, 0.1, 1.8],
      },
      {
        id: 'ghk-hair',
        label: 'Fortalecimiento Capilar',
        description:
          'Aumenta el tamaño de los folículos pilosos y estimula la producción de factores de crecimiento capilar. Se percibe como cabello más grueso, mayor densidad capilar y reducción de la caída.',
        position: [0, 2.38, 0.02],
        segments: ['head'],
        system: 'integumentary',
        color: '#9dc4de',
        cameraOffset: [0.4, 0.9, 1.0],
      },
    ],
    applicationMethods: [
      {
        id: 'ghk-topical',
        name: 'Aplicación Tópica',
        type: 'topical',
        isPrimary: true,
        description:
          'Método más utilizado para efectos dermatológicos. GHK-Cu penetra la piel eficazmente y actúa directamente sobre los fibroblastos dérmicos.',
        instructions: [
          'Limpiar y secar el área de aplicación',
          'Aplicar el sérum o crema en rostro, cuello y zona deseada',
          'Masajear suavemente con movimientos ascendentes',
          'Usar preferiblemente por la noche para máxima regeneración',
          'Compatible con la mayoría de rutinas de skincare (evitar ácidos fuertes)',
          'Resultados visibles típicamente a las 4-8 semanas de uso constante',
        ],
        positions: [
          [0, 2.12, 0.16],
          [0, 1.9, 0.08],
          [0, 2.35, 0.05],
        ],
        segments: ['head', 'neck'],
        cameraOffset: [0.4, 0.7, 1.2],
      },
      {
        id: 'ghk-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: false,
        description:
          'Alternativa para efectos sistémicos más amplios. La inyección permite que GHK-Cu circule por todo el cuerpo, activando la remodelación de colágeno a nivel sistémico.',
        instructions: [
          'Reconstituir con agua bacteriostática',
          'Inyectar subcutáneamente en el abdomen',
          'Mantener una técnica estéril estricta',
          'La solución reconstituida tiene un color azulado característico por el cobre',
          'Refrigerar entre usos',
        ],
        positions: [
          [0, 1.22, 0.17],
          [0.1, 1.22, 0.17],
        ],
        segments: ['lowerTorso'],
        cameraOffset: [0.8, 0, 2.0],
      },
    ],
  },

  epitalon: {
    effects: [
      {
        id: 'epi-sleep',
        label: 'Mejora del Sueño',
        description:
          'Epitalon estimula la producción natural de melatonina por la glándula pineal, regulando el ritmo circadiano. Se percibe como un sueño más profundo, despertar más descansado, facilidad para conciliar el sueño y horarios de descanso más regulares.',
        position: [0, 2.22, -0.02],
        segments: ['head'],
        system: 'endocrine',
        color: SYSTEM_COLORS.endocrine,
        cameraOffset: [0.3, 0.7, 1.2],
      },
      {
        id: 'epi-energy',
        label: 'Vitalidad y Energía',
        description:
          'La activación de telomerasa rejuvenece las células a nivel fundamental, mejorando la función mitocondrial. Se percibe como mayor energía diaria, menos fatiga, mejor resistencia física y sensación general de vitalidad.',
        position: [0, 1.65, 0.1],
        segments: ['upperTorso', 'lowerTorso'],
        system: 'endocrine',
        color: '#dfc06e',
        cameraOffset: [0.8, 0.3, 2.0],
      },
      {
        id: 'epi-skin',
        label: 'Rejuvenecimiento Cutáneo',
        description:
          'La protección telomérica extiende la vida útil de las células de la piel, mejorando su capacidad de renovación. Se observa piel con aspecto más joven, mejor tono y textura, y reducción gradual de signos de envejecimiento.',
        position: [0, 2.1, 0.14],
        segments: ['head', 'upperTorso'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [0.5, 0.6, 1.4],
      },
      {
        id: 'epi-immune',
        label: 'Refuerzo Inmunológico',
        description:
          'Epitalon mejora la función del timo y la producción de linfocitos T, fortaleciendo la respuesta inmune. Se percibe como menor frecuencia de resfriados, recuperación más rápida de infecciones y mayor resistencia general.',
        position: [0, 1.75, 0.07],
        segments: ['upperTorso', 'neck'],
        system: 'immune',
        color: SYSTEM_COLORS.immune,
        cameraOffset: [0.6, 0.4, 1.6],
      },
      {
        id: 'epi-mood',
        label: 'Claridad Mental',
        description:
          'La regulación hormonal pineal y la mejora del sueño impactan positivamente la función cognitiva. Se percibe como mayor claridad mental, mejor concentración y estado de ánimo más equilibrado.',
        position: [0, 2.28, 0.1],
        segments: ['head'],
        system: 'nervous',
        color: SYSTEM_COLORS.nervous,
        cameraOffset: [0.4, 0.8, 1.1],
      },
    ],
    applicationMethods: [
      {
        id: 'epi-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Método estándar de administración. Se aplica típicamente en ciclos (10-20 días) con períodos de descanso para permitir la acción sobre la telomerasa.',
        instructions: [
          'Reconstituir con agua bacteriostática',
          'Inyectar subcutáneamente en el abdomen o brazo superior',
          'Aplicar preferiblemente por la noche para sinergia con la producción natural de melatonina',
          'Protocolos típicos: ciclos de 10-20 días con 4-6 meses de descanso',
          'Rotar los sitios de inyección',
        ],
        positions: [
          [0, 1.22, 0.17],
          [0.45, 1.55, 0.04],
        ],
        segments: ['lowerTorso', 'rightUpperArm'],
        cameraOffset: [0.8, 0, 2.5],
      },
      {
        id: 'epi-nasal',
        name: 'Spray Nasal',
        type: 'nasal',
        isPrimary: false,
        description:
          'Alternativa no invasiva que permite la absorción a través de la mucosa nasal. La proximidad anatómica al cerebro puede facilitar efectos sobre la glándula pineal.',
        instructions: [
          'Preparar la solución nasal con la dilución apropiada',
          'Inclinar ligeramente la cabeza hacia atrás',
          'Aplicar el spray en cada fosa nasal según la dosis indicada',
          'Inhalar suavemente para favorecer la absorción mucosa',
          'No sonarse la nariz durante 10-15 minutos post-aplicación',
        ],
        positions: [[0, 2.08, 0.17]],
        segments: ['head'],
        cameraOffset: [0.3, 0.7, 1.0],
      },
    ],
  },

  selank: {
    effects: [
      {
        id: 'sel-anxiety',
        label: 'Reducción de Ansiedad',
        description:
          'Selank modula el sistema GABAérgico y serotoninérgico sin los efectos sedantes de las benzodiazepinas. Se percibe como calma natural, reducción de pensamientos ansiosos, menor reactividad al estrés y sensación de tranquilidad sin somnolencia.',
        position: [0.05, 2.15, 0.08],
        segments: ['head'],
        system: 'nervous',
        color: SYSTEM_COLORS.nervous,
        cameraOffset: [0.4, 0.7, 1.2],
      },
      {
        id: 'sel-focus',
        label: 'Mejora de Concentración',
        description:
          'Optimiza la función del córtex prefrontal aumentando la señalización dopaminérgica y noradrenérgica. Se percibe como mayor capacidad de enfoque sostenido, menos distracciones, y mejor rendimiento en tareas cognitivas demandantes.',
        position: [0, 2.3, 0.1],
        segments: ['head'],
        system: 'nervous',
        color: '#f0e060',
        cameraOffset: [0.3, 0.8, 1.0],
      },
      {
        id: 'sel-memory',
        label: 'Potenciación de Memoria',
        description:
          'Estimula el factor neurotrófico BDNF y modula la plasticidad sináptica en el hipocampo. Se percibe como mejor retención de información, recordar con más facilidad, y aprendizaje más rápido de nuevos conceptos.',
        position: [-0.06, 2.18, 0.04],
        segments: ['head'],
        system: 'nervous',
        color: '#d4c445',
        cameraOffset: [0.3, 0.7, 1.1],
      },
      {
        id: 'sel-mood',
        label: 'Estabilización del Ánimo',
        description:
          'Regula la expresión de genes relacionados con la serotonina y la encefalina. Se percibe como estado de ánimo más estable y positivo, mayor resiliencia emocional y reducción de irritabilidad.',
        position: [0, 2.25, 0.06],
        segments: ['head'],
        system: 'nervous',
        color: SYSTEM_COLORS.nervous,
        cameraOffset: [0.4, 0.75, 1.15],
      },
      {
        id: 'sel-immune',
        label: 'Modulación Inmune',
        description:
          'Como análogo de la tuftsina (un péptido inmunológico natural), Selank estimula la actividad de fagocitos y la producción de citoquinas protectoras. Se puede percibir como menor susceptibilidad a resfriados e infecciones.',
        position: [0, 1.75, 0.07],
        segments: ['upperTorso', 'neck'],
        system: 'immune',
        color: SYSTEM_COLORS.immune,
        cameraOffset: [0.6, 0.4, 1.6],
      },
    ],
    applicationMethods: [
      {
        id: 'sel-nasal',
        name: 'Spray Nasal',
        type: 'nasal',
        isPrimary: true,
        description:
          'Método principal y más efectivo. La mucosa nasal proporciona absorción directa al sistema nervioso central, evitando la degradación gastrointestinal y el efecto de primer paso hepático.',
        instructions: [
          'Preparar la solución nasal según la concentración requerida',
          'Limpiar suavemente las fosas nasales antes de la aplicación',
          'Aplicar 1-2 sprays en cada fosa nasal',
          'Inhalar suavemente — no con fuerza',
          'Efectos perceptibles típicamente en 10-15 minutos',
          'Se puede usar 2-3 veces al día según necesidad',
          'No exceder la dosis diaria recomendada',
        ],
        positions: [[0, 2.08, 0.17]],
        segments: ['head'],
        cameraOffset: [0.3, 0.7, 1.0],
      },
      {
        id: 'sel-subq',
        name: 'Inyección Subcutánea',
        type: 'subcutaneous',
        isPrimary: false,
        description:
          'Alternativa cuando la vía nasal no es viable. Proporciona absorción sistémica completa aunque con inicio de acción más lento que la vía intranasal.',
        instructions: [
          'Reconstituir con agua bacteriostática',
          'Inyectar subcutáneamente en el abdomen',
          'Mantener técnica estéril',
          'Inicio de acción más lento que la vía nasal (30-60 minutos)',
          'Refrigerar la solución reconstituida',
        ],
        positions: [
          [0, 1.22, 0.17],
          [-0.1, 1.22, 0.17],
        ],
        segments: ['lowerTorso'],
        cameraOffset: [0.8, 0, 2.0],
      },
    ],
  },

  'bpc-157-tb-500-stack': {
    effects: [
      {
        id: 'stack-synergy',
        label: 'Sinergia Regenerativa',
        description:
          'La combinación de BPC-157 y TB-500 produce un efecto sinérgico superior al de cada péptido por separado. BPC-157 promueve la angiogénesis local mientras TB-500 facilita la migración celular, acelerando conjuntamente la recuperación.',
        position: [0, 1.65, 0.12],
        segments: ['upperTorso', 'lowerTorso'],
        system: 'muscular',
        color: SYSTEM_COLORS.muscular,
        cameraOffset: [0.8, 0.3, 2.0],
      },
      {
        id: 'stack-joint',
        label: 'Reparación Articular Completa',
        description:
          'BPC-157 repara tendones y ligamentos mientras TB-500 reduce la inflamación circundante y promueve la regeneración del cartílago. Se percibe como recuperación acelerada de lesiones articulares, mayor movilidad y reducción significativa del dolor.',
        position: [-0.14, 0.55, 0.05],
        segments: ['leftLowerLeg', 'leftUpperLeg', 'rightLowerLeg', 'rightUpperLeg'],
        system: 'skeletal',
        color: SYSTEM_COLORS.skeletal,
        cameraOffset: [0.8, -0.3, 2.5],
      },
      {
        id: 'stack-gut',
        label: 'Protección Gastrointestinal',
        description:
          'BPC-157 aporta su capacidad única de reparar la mucosa gastrointestinal, mientras TB-500 complementa con reducción de inflamación sistémica. Se percibe como mejor digestión y reducción de problemas gastrointestinales.',
        position: [0, 1.35, 0.1],
        segments: ['lowerTorso'],
        system: 'digestive',
        color: SYSTEM_COLORS.digestive,
        cameraOffset: [0.8, 0.1, 1.8],
      },
      {
        id: 'stack-skin',
        label: 'Curación Cutánea Acelerada',
        description:
          'La combinación acelera todas las fases de la cicatrización: TB-500 facilita la migración de células reparadoras mientras BPC-157 promueve la vascularización del tejido nuevo. Resultado: cicatrización notablemente más rápida.',
        position: [0.42, 1.35, 0.06],
        segments: ['rightForearm', 'upperTorso'],
        system: 'integumentary',
        color: SYSTEM_COLORS.integumentary,
        cameraOffset: [1.0, 0.1, 1.8],
      },
      {
        id: 'stack-cardio',
        label: 'Apoyo Cardiovascular',
        description:
          'TB-500 ofrece cardioprotección directa mientras BPC-157 promueve la formación de nuevos vasos sanguíneos. Juntos apoyan la salud cardiovascular integral y la circulación periférica.',
        position: [-0.08, 1.65, 0.09],
        segments: ['upperTorso'],
        system: 'cardiovascular',
        color: SYSTEM_COLORS.cardiovascular,
        cameraOffset: [0.6, 0.4, 1.6],
      },
    ],
    applicationMethods: [
      {
        id: 'stack-subq',
        name: 'Inyección Subcutánea (Combinada)',
        type: 'subcutaneous',
        isPrimary: true,
        description:
          'Ambos péptidos se pueden administrar subcutáneamente. Pueden inyectarse en sitios separados durante la misma sesión, o según algunos protocolos, combinarse en la misma jeringa.',
        instructions: [
          'Reconstituir cada vial por separado con agua bacteriostática',
          'Se pueden mezclar en la misma jeringa o inyectar por separado',
          'Inyectar subcutáneamente en el abdomen o cerca del área lesionada',
          'Usar BPC-157 cerca de la lesión para efecto localizado',
          'TB-500 puede inyectarse en cualquier sitio subcutáneo para efecto sistémico',
          'Rotar los sitios de inyección entre sesiones',
          'Refrigerar las soluciones reconstituidas',
        ],
        positions: [
          [-0.1, 1.22, 0.17],
          [0.1, 1.22, 0.17],
          [-0.14, 0.55, 0.06],
          [0.14, 0.78, 0.06],
        ],
        segments: ['lowerTorso', 'leftLowerLeg', 'rightUpperLeg'],
        cameraOffset: [0.8, 0, 2.8],
      },
    ],
  },
};

// === GETTER ===
export function getPeptideBodyData(slug: string): PeptideBodyData | null {
  return peptideData[slug] || null;
}
