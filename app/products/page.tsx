import ProductItem from "@/components/product/ProductItem";
import { products } from "@/lib/mock/product";

export default function ProductList() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
