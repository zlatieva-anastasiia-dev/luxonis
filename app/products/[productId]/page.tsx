import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import { Carousel } from "@/components/ui/Carousel/Carousel";
import { getProduct } from "@/lib/api/products";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ productId: string }>;
}) {
	const { productId } = await params;
	const product = await getProduct(productId);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="min-h-screen py-12">
			<div className="mx-auto w-full max-w-7xl px-6 md:px-12">
				<div className="mb-8">
					<Link
						href="/products"
						className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors group"
					>
						<div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
								className="transition-transform group-hover:-translate-x-0.5"
							>
								<path d="m15 18-6-6 6-6" />
							</svg>
						</div>
						Back to Products
					</Link>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
					<div>
						{product.productImages && product.productImages.length > 0 ? (
							<Carousel images={product.productImages} />
						) : (
							<div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-8">
								<div className="relative w-full h-full">
									<Image
										src={product.mainImage.src}
										alt={product.mainImage.altText}
										fill
										className="object-contain"
										priority
									/>
								</div>
							</div>
						)}
					</div>
					<div className="space-y-4">
						<div className="space-y-4">
							<h1 className="text-4xl font-bold text-gray-900 tracking-tight">
								{product.name}
							</h1>

							<div className="flex flex-col">
								<span className="text-3xl font-bold text-gray-900">
									${product.price}
								</span>
								<span className="text-sm text-gray-500 font-medium mt-1">
									${product.priceWithVat} VAT incl.
								</span>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-2">
							{product.availability.map((item) => (
								<Badge key={item.status} item={item} />
							))}
						</div>

						<div className="prose prose-gray max-w-none text-gray-600 leading-7">
							<p>
								<strong className="text-gray-900">{product.name}</strong>{" "}
								{product.shortDescription}
							</p>
						</div>

						{product.heroFeatures && (
							<ul className="space-y-3 text-sm text-gray-700">
								{product.heroFeatures.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<span className="text-indigo-500 font-bold">–</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						)}

						<div className="pt-8 border-t border-gray-100">
							{product.cameraVariants.length > 0 && (
								<>
									<p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
										Select Model
									</p>
									<div className="flex flex-wrap gap-2">
										{product.cameraVariants.map((variant) => (
											<button
												key={variant}
												type="button"
												className="px-5 py-3 bg-gray-100 text-gray-900 hover:bg-gray-200 text-xs font-bold uppercase tracking-wide rounded-sm transition-colors first:bg-gray-900 first:text-white"
											>
												{variant}
											</button>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
