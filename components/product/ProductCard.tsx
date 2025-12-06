import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types/product";
import Badge from "../shared/Badge";

export default function ProductCard({ product }: { product: Product }) {
    const productUrl = `/products/${product.id}`;

    const isDemoProduct = product.id === 'oak-4-d-pro';
    return (
        <div className="flex flex-col h-full">
            <div className={`rounded-lg p-8 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${!isDemoProduct && 'cursor-not-allowed'}`}>
                {isDemoProduct ? (
                    <Link href={productUrl}>
                        <Image
                            src={product.imageSrc}
                            alt={product.altText}
                            width={400}
                            height={400}
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>
                ) : (
                    <Image
                        src={product.imageSrc}
                        alt={product.altText}
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                )}
            </div>
            <div className="flex flex-col grow gap-2">
                {isDemoProduct ? (<Link href={productUrl}><h3 className="text-xl font-normal text-gray-900">{product.name}</h3></Link>) : (<h3 className="text-xl font-normal text-gray-900">{product.name}</h3>)}
                <div >
                    <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">
                        ${product.priceWithVat} VAT incl.
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    {product.availability.map((item) => (
                        <Badge key={item.status} item={item} />
                    ))}
                </div>
            </div>
        </div >
    );
}
