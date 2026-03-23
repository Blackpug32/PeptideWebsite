import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static generation
  // Use a workaround for the async params
  return params.then(({ slug }) => {
    const product = getProductBySlug(slug);
    if (!product) return { title: "Producto no encontrado" };
    return {
      title: `${product.name} | PeptideLab MX`,
      description: product.shortDescription,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
