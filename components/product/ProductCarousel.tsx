"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProductImage } from "@/lib/types/product";
import { cn } from "@/lib/utils";

interface ProductCarouselProps {
	images: ProductImage[];
}

export function ProductCarousel({ images }: ProductCarouselProps) {
	const [mainApi, setMainApi] = useState<CarouselApi>();
	const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!mainApi) return;
		const handleSelect = () => {
			const index = mainApi.selectedScrollSnap();
			setCurrent(index);
			if (thumbnailApi) thumbnailApi.scrollTo(index);
		};

		mainApi.on("select", handleSelect);
		return () => {
			mainApi.off("select", handleSelect);
		};
	}, [mainApi, thumbnailApi]);

	const onThumbClick = (index: number) => {
		if (mainApi) mainApi.scrollTo(index);
	};

	if (!images || images.length === 0) return null;

	return (
		<div className="flex flex-col gap-4">
			<Carousel setApi={setMainApi} className="w-full">
				<CarouselContent>
					{images.map((img, index) => (
						<CarouselItem key={index} className="px-2 w-full">
							<div className="relative aspect-4/3 w-full rounded-xl  bg-white flex items-center justify-center p-8">
								<div className="relative w-full h-full">
									<Image
										src={img.src}
										alt={img.altText}
										fill
										className="object-contain"
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-4 bg-white-80 hover:bg-white border-gray-200 cursor-pointer" />
				<CarouselNext className="right-4 bg-white-80 hover:bg-white border-gray-200 cursor-pointer" />
			</Carousel>

			<Carousel setApi={setThumbnailApi}>
				<CarouselContent className="flex justify-center">
					{images.map((img, index) => (
						<CarouselItem key={index} className="pl-2 basis-[100px]">
							<button
								type="button"
								onClick={() => onThumbClick(index)}
								className={cn(
									"relative w-24 h-24 overflow-hidden rounded-lg border bg-white transition-all",
									current === index
										? "border-indigo-600"
										: "border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100",
								)}
							>
								<Image
									src={img.src}
									alt={img.altText}
									fill
									className="object-contain p-2"
								/>
							</button>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}
