import type { ComponentPropsWithRef } from "react";

type CarouselArrowButtonType = ComponentPropsWithRef<"button">;

const arrowButtonStyles =
	"absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md backdrop-blur-sm border border-gray-200 text-gray-800 transition-all z-10 disabled:opacity-0 disabled:cursor-not-allowed";

export const PrevButton = (props: CarouselArrowButtonType) => {
	const { children, ...restProps } = props;
	return (
		<button
			className={`${arrowButtonStyles} left-4`}
			type="button"
			aria-label="Previous Slide"
			{...restProps}
		>
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
			>
				<path d="m15 18-6-6 6-6" />
			</svg>
			{children}
		</button>
	);
};

export const NextButton = (props: CarouselArrowButtonType) => {
	const { children, ...restProps } = props;

	return (
		<button
			className={`${arrowButtonStyles} right-4`}
			type="button"
			aria-label="Next Slide"
			{...restProps}
		>
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
			>
				<path d="m9 18 6-6-6-6" />
			</svg>
			{children}
		</button>
	);
};
