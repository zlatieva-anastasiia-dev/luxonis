import { products } from "../mock/product";
import type { Product } from "../types/product";

export async function getProduct(id: string): Promise<Product | undefined> {
	return products.find((p) => p.id === id);
}
