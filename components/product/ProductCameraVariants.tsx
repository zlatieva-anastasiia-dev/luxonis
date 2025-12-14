"use client";

import type { CameraVariant } from "@/lib/types/product";
import { useState } from "react";

export function ProductCameraVariants({
	productCameraVariants,
}: {
	productCameraVariants: CameraVariant[];
}) {
	const [selectedCameraVariant, setSelectedCameraVariant] = useState(
		productCameraVariants[0],
	);

	if (productCameraVariants.length === 0) {
		return null;
	}

	return (
		<div className="mt-4 flex flex-col gap-2">
			<span className="text-gray-700 text-sm">
				Rgb camera: {selectedCameraVariant}
			</span>
			<div className="flex flex-wrap gap-2">
				{productCameraVariants.map((variant) => (
					<button
						key={variant}
						type="button"
						onClick={() => setSelectedCameraVariant(variant)}
						className={`px-5 py-3 text-xs font-bold uppercase cursor-pointer rounded-sm ${
							selectedCameraVariant === variant
								? "bg-gray-900 text-white"
								: "bg-gray-200 text-gray-900 hover:bg-gray-300"
						}`}
					>
						{variant}
					</button>
				))}
			</div>
		</div>
	);
}
