import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductRail({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:px-0">
      {products.map((product) => (
        <div key={product.id} className="w-[68vw] flex-none snap-start sm:w-[38vw] md:w-auto">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
