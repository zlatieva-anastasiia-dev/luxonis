"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useCarouselButtons } from "@/hooks/useCarouselButtons";
import type { ProductImage } from "@/lib/types/product";
import { NextButton, PrevButton } from "./CarouselArrowButtons";

type ProductCarouselProps = {
	images: ProductImage[];
};

export function Carousel({ images }: ProductCarouselProps) {
	const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
	const [thumbRef, thumbApi] = useEmblaCarousel({
		align: "start",
		containScroll: "keepSnaps",
		dragFree: true,
	});

	const [selectedIndex, setSelectedIndex] = useState(0);

	const {
		onPrevButtonClick,
		onNextButtonClick,
		prevBtnDisabled,
		nextBtnDisabled,
	} = useCarouselButtons(mainApi);

	const onSelect = useCallback(() => {
		if (!mainApi || !thumbApi) return;
		setSelectedIndex(mainApi.selectedScrollSnap());
		thumbApi.scrollTo(mainApi.selectedScrollSnap());
	}, [mainApi, thumbApi]);

	useEffect(() => {
		if (!mainApi) return;
		onSelect();
		mainApi.on("select", onSelect);
		mainApi.on("reInit", onSelect);
	}, [mainApi, onSelect]);

	const onThumbClick = useCallback(
		(index: number) => {
			if (!mainApi) return;
			mainApi.scrollTo(index);
		},
		[mainApi],
	);

	if (images.length === 0) return null;

	return (
		<div className="flex flex-col  gap-6 ">
			<div
				className="relative overflow-hidden rounded-xl border border-gray-100 group"
				ref={mainRef}
			>
				<div className="flex">
					{images.map((img, index) => (
						<div
							key={img.src}
							className="flex-[0_0_100%] min-w-0 relative aspect-4/3 flex items-center justify-center p-8"
						>
							<div className="relative w-full h-full">
								<Image
									src={img.src}
									alt={img.altText}
									fill
									className="object-contain"
									priority={index === 0}
								/>
							</div>
						</div>
					))}
				</div>
				<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>

			<div className="overflow-hidden" ref={thumbRef}>
				<div className="flex justify-center gap-4">
					{images.map((img, index) => (
						<button
							key={img.src}
							type="button"
							onClick={() => onThumbClick(index)}
							className={`
                relative w-24 h-24 shrink-0 rounded-lg border bg-gray-50 overflow-hidden transition-all duration-200
                ${
									index === selectedIndex
										? "border-indigo-600 opacity-100"
										: "border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100"
								}
              `}
						>
							<Image
								src={img.src}
								alt={img.altText}
								fill
								className="object-contain"
							/>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
