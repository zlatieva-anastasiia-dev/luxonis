export type Availability =
	| { status: "early-access" }
	| { status: "preorder" }
	| { status: "ships-on"; date: string }
	| { status: "in-stock" };

export type CameraVariant = "Auto Focus" | "Fixed Focus" | "Wide";

export type Product = {
	id: string;
	name: string;
	price: number;
	priceWithVat: number;
	availability: Availability[];
	imageSrc: string;
	altText: string;
	cameraVariants: CameraVariant[];
	shortDescription: string;
	readMore: string;
	heroFeatures?: string[];
};
