export type Availability =
	| { status: "early-access" }
	| { status: "preorder" }
	| { status: "ships-on"; date: string }
	| { status: "in-stock" };

type CameraVariant = "Auto Focus" | "Fixed Focus" | "Wide";

export type ProductImage = {
	src: string;
	altText: string;
};

export type Product = {
	id: string;
	name: string;
	price: number;
	priceWithVat: number;
	availability: Availability[];
	mainImage: ProductImage;
	productImages?: ProductImage[];
	cameraVariants: CameraVariant[];
	shortDescription: string;
	heroFeatures: string[];
};
