export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  purity: string;
  quantity: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  specifications: { label: string; value: string }[];
  inStock: boolean;
  featured: boolean;
  badge?: string;
  image: string;
}

export const categories = [
  { id: "all", name: "Todos", count: 8 },
  { id: "regeneracion", name: "Regeneración", count: 3 },
  { id: "metabolismo", name: "Metabolismo", count: 2 },
  { id: "longevidad", name: "Longevidad", count: 2 },
  { id: "cognitivo", name: "Cognitivo", count: 1 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "BPC-157",
    slug: "bpc-157",
    category: "regeneracion",
    price: 1299,
    originalPrice: 1599,
    purity: "99.1%",
    quantity: "5mg",
    description:
      "BPC-157 (Body Protection Compound-157) es un pentadecapéptido parcial derivado de la proteína de protección corporal (BPC) encontrada en el jugo gástrico humano. Este péptido ha demostrado notables propiedades regenerativas en numerosos estudios preclínicos, incluyendo la reparación de tejidos musculares, tendones, ligamentos y el tracto gastrointestinal. Su mecanismo de acción involucra la modulación del sistema de óxido nítrico y la promoción de la angiogénesis.",
    shortDescription:
      "Pentadecapéptido con propiedades regenerativas para tejidos musculares, tendones y sistema gastrointestinal.",
    benefits: [
      "Promueve la reparación de tejidos conectivos",
      "Apoya la salud gastrointestinal",
      "Favorece la angiogénesis",
      "Modula la respuesta inflamatoria",
    ],
    specifications: [
      { label: "Secuencia", value: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val" },
      { label: "Peso molecular", value: "1419.53 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.1%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "137525-51-0" },
    ],
    inStock: true,
    featured: true,
    badge: "Más vendido",
    image: "/products/bpc-157.jpg",
  },
  {
    id: "2",
    name: "TB-500",
    slug: "tb-500",
    category: "regeneracion",
    price: 1499,
    originalPrice: 1799,
    purity: "99.3%",
    quantity: "5mg",
    description:
      "TB-500 es un péptido sintético de la proteína natural Timosina Beta-4. Este péptido desempeña un papel fundamental en la protección, regeneración y remodelación de tejidos dañados. TB-500 promueve la migración celular, la diferenciación de células madre y la reducción de la inflamación, siendo un péptido de gran interés en la investigación de medicina regenerativa.",
    shortDescription:
      "Péptido sintético de Timosina Beta-4 para regeneración y remodelación de tejidos dañados.",
    benefits: [
      "Promueve la migración celular",
      "Apoya la diferenciación de células madre",
      "Reduce la inflamación sistémica",
      "Favorece la formación de nuevos vasos sanguíneos",
    ],
    specifications: [
      { label: "Secuencia", value: "Ac-SDKP (fragmento activo)" },
      { label: "Peso molecular", value: "4963.44 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.3%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "77591-33-4" },
    ],
    inStock: true,
    featured: true,
    badge: "Popular",
    image: "/products/tb-500.jpg",
  },
  {
    id: "3",
    name: "Tirzepatida",
    slug: "tirzepatida",
    category: "metabolismo",
    price: 2899,
    purity: "99.5%",
    quantity: "10mg",
    description:
      "Tirzepatida es un agonista dual de los receptores GIP y GLP-1 de gran interés en la investigación metabólica. Este péptido innovador actúa sobre ambas vías incretinas simultáneamente, lo que lo convierte en un candidato único para estudios relacionados con el metabolismo de la glucosa y la homeostasis energética. Los estudios clínicos han mostrado resultados prometedores en la modulación del peso corporal y los parámetros metabólicos.",
    shortDescription:
      "Agonista dual GIP/GLP-1 para investigación en metabolismo de glucosa y homeostasis energética.",
    benefits: [
      "Agonista dual GIP/GLP-1",
      "Modulación del metabolismo glucémico",
      "Investigación en homeostasis energética",
      "Estudios de señalización incretina",
    ],
    specifications: [
      { label: "Peso molecular", value: "4813.45 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.5%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "2023788-19-2" },
    ],
    inStock: true,
    featured: true,
    badge: "Nuevo",
    image: "/products/tirzepatida.jpg",
  },
  {
    id: "4",
    name: "Semaglutida",
    slug: "semaglutida",
    category: "metabolismo",
    price: 2499,
    purity: "99.2%",
    quantity: "10mg",
    description:
      "Semaglutida es un análogo del péptido similar al glucagón tipo 1 (GLP-1) utilizado extensamente en investigación metabólica. Con una vida media prolongada gracias a su modificación con ácido graso, este péptido ha generado un enorme interés científico por su capacidad de modular múltiples vías metabólicas. Es uno de los péptidos más estudiados en la actualidad.",
    shortDescription:
      "Análogo de GLP-1 de vida media prolongada para investigación metabólica avanzada.",
    benefits: [
      "Análogo de GLP-1 de larga duración",
      "Investigación en señalización metabólica",
      "Estudios de homeostasis glucémica",
      "Alta estabilidad in vivo",
    ],
    specifications: [
      { label: "Peso molecular", value: "4113.58 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.2%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "910463-68-2" },
    ],
    inStock: true,
    featured: false,
    image: "/products/semaglutida.jpg",
  },
  {
    id: "5",
    name: "GHK-Cu",
    slug: "ghk-cu",
    category: "longevidad",
    price: 999,
    originalPrice: 1199,
    purity: "99.0%",
    quantity: "50mg",
    description:
      "GHK-Cu (Glicil-L-Histidil-L-Lisina Cobre) es un tripéptido de cobre que se encuentra naturalmente en el plasma humano. Sus niveles disminuyen significativamente con la edad, lo que ha generado gran interés en la investigación de longevidad y rejuvenecimiento. GHK-Cu ha demostrado capacidad para modular la expresión de miles de genes humanos, favoreciendo la síntesis de colágeno y la remodelación de la matriz extracelular.",
    shortDescription:
      "Tripéptido de cobre natural con propiedades de modulación genética y síntesis de colágeno.",
    benefits: [
      "Promueve la síntesis de colágeno",
      "Modula la expresión genética",
      "Actividad antioxidante",
      "Investigación en longevidad celular",
    ],
    specifications: [
      { label: "Secuencia", value: "GHK-Cu" },
      { label: "Peso molecular", value: "403.93 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.0%" },
      { label: "Forma", value: "Polvo liofilizado azul" },
      { label: "Almacenamiento", value: "2-8°C" },
      { label: "CAS", value: "49557-75-7" },
    ],
    inStock: true,
    featured: true,
    image: "/products/ghk-cu.jpg",
  },
  {
    id: "6",
    name: "Epitalon",
    slug: "epitalon",
    category: "longevidad",
    price: 1899,
    purity: "99.4%",
    quantity: "10mg",
    description:
      "Epitalon (Epithalon) es un tetrapéptido sintético basado en la Epithalamina, un extracto natural de la glándula pineal. Es el péptido más estudiado en relación con la telomerasa y la longevidad celular. Epitalon ha demostrado en investigaciones la capacidad de activar la telomerasa, la enzima responsable de mantener la longitud de los telómeros, un factor clave en el envejecimiento celular.",
    shortDescription:
      "Tetrapéptido activador de telomerasa para investigación en longevidad y envejecimiento celular.",
    benefits: [
      "Investigación en activación de telomerasa",
      "Estudios de longevidad celular",
      "Regulación del ciclo circadiano",
      "Investigación en función pineal",
    ],
    specifications: [
      { label: "Secuencia", value: "Ala-Glu-Asp-Gly" },
      { label: "Peso molecular", value: "390.35 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.4%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "307297-39-8" },
    ],
    inStock: true,
    featured: false,
    image: "/products/epitalon.jpg",
  },
  {
    id: "7",
    name: "Selank",
    slug: "selank",
    category: "cognitivo",
    price: 1199,
    purity: "99.2%",
    quantity: "5mg",
    description:
      "Selank es un heptapéptido sintético análogo de la tuftsina, desarrollado por el Instituto de Genética Molecular de la Academia Rusa de Ciencias. Este péptido ha demostrado efectos ansioliticos y nootrópicos en estudios preclínicos, modulando el sistema GABAérgico y serotoninérgico sin los efectos secundarios asociados a las benzodiazepinas. También se investiga su papel en la modulación del sistema inmunológico.",
    shortDescription:
      "Heptapéptido análogo de tuftsina con propiedades nootrópicas y modulación del sistema GABA.",
    benefits: [
      "Modulación del sistema GABAérgico",
      "Investigación en función cognitiva",
      "Estudios de neuroplasticidad",
      "Modulación inmunológica",
    ],
    specifications: [
      { label: "Secuencia", value: "Thr-Lys-Pro-Arg-Pro-Gly-Pro" },
      { label: "Peso molecular", value: "751.88 g/mol" },
      { label: "Pureza (HPLC)", value: "≥99.2%" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "CAS", value: "129954-34-3" },
    ],
    inStock: true,
    featured: false,
    image: "/products/selank.jpg",
  },
  {
    id: "8",
    name: "BPC-157 + TB-500 Stack",
    slug: "bpc-157-tb-500-stack",
    category: "regeneracion",
    price: 2499,
    originalPrice: 2798,
    purity: "99%+",
    quantity: "5mg + 5mg",
    description:
      "Combinación premium de BPC-157 y TB-500, los dos péptidos de regeneración más estudiados. Este stack de investigación permite explorar las sinergias potenciales entre ambos compuestos en estudios de regeneración tisular. Cada vial viene con su respectivo Certificado de Análisis (COA) independiente, garantizando la máxima pureza y trazabilidad.",
    shortDescription:
      "Combinación premium de los dos péptidos regenerativos más estudiados con COA independiente.",
    benefits: [
      "Sinergia de dos péptidos regenerativos",
      "COA independiente por cada vial",
      "Ahorro vs compra individual",
      "Ideal para estudios comparativos",
    ],
    specifications: [
      { label: "Contenido", value: "1x BPC-157 5mg + 1x TB-500 5mg" },
      { label: "Pureza (HPLC)", value: "≥99.0% (cada uno)" },
      { label: "Forma", value: "Polvo liofilizado" },
      { label: "Almacenamiento", value: "-20°C" },
      { label: "COA", value: "Incluido por cada vial" },
    ],
    inStock: true,
    featured: true,
    badge: "Ahorra 10%",
    image: "/products/stack-bpc-tb.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
