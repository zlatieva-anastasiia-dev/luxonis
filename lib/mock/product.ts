import type { Product } from "../types/product";

export const products: Product[] = [
	{
		id: "oak-4-d",
		name: "OAK 4 D",
		price: 849,
		priceWithVat: 1027.29,
		mainImage: {
			src: "/OAK_D_1.webp",
			altText: "OAK 4 D AI Camera with purple front",
		},

		shortDescription: "The standard for spatial AI.",
		availability: [{ status: "in-stock" }],
		cameraVariants: ["Auto Focus", "Wide"],
		heroFeatures: ["4 TOPS processing", "Stereo Depth"],
	},
	{
		id: "oak-4-s",
		name: "OAK 4 S",
		price: 749,
		priceWithVat: 906.29,
		mainImage: {
			src: "/OAK_S_1.webp",
			altText: "OAK 4 S Compact Camera",
		},

		shortDescription: "Compact power for edge computing.",
		availability: [
			{ status: "early-access" },
			{ status: "preorder" },
			{ status: "ships-on", date: "DECEMBER 15, 2025" },
		],
		cameraVariants: ["Fixed Focus"],
		heroFeatures: ["4 TOPS processing", "Stereo Depth"],
	},
	{
		id: "oak-4-d-pro",
		name: "OAK 4 D Pro",
		price: 949,
		priceWithVat: 1148.29,
		mainImage: {
			src: "/OAK_D_PRO_1.webp",
			altText: "OAK 4 D Pro Professional Camera",
		},
		productImages: [
			{
				src: "/OAK_D_Pro_1.webp",
				altText: "OAK 4 D Pro - Front View",
			},
			{
				src: "/OAK_D_2.webp",
				altText: "OAK 4 D Pro - Side Angled View",
			},
			{
				src: "/OAK_D_3.webp",
				altText: "OAK 4 D Pro - Rear View with Ports",
			},
			{
				src: "/OAK_D_4.webp",
				altText: "OAK 4 D Pro - Top View",
			},
		],

		shortDescription:
			"OAK 4 D is the most advanced stereo vision and edge inference camera we have produced. A true standalone device running Luxonis OS, the OAK 4 D combines an elegant design, industrial grade materials, and industry leading compute in a single unit.",
		availability: [
			{ status: "early-access" },
			{ status: "preorder" },
			{ status: "ships-on", date: "DECEMBER 15, 2025" },
		],
		cameraVariants: ["Auto Focus", "Fixed Focus", "Wide"],
		heroFeatures: [
			"8-core CPU, 8GB RAM, 128GB of storage",
			"48 TOPS for AI inferencing",
			"48MP RGB camera",
			"Microphone",
			"Both USB3 and PoE for power and communication",
			"Status LED",
			"IP67 Rating",
			"Running Linux based Luxonis OS",
			"9-axis IMU",
		],
	},
];
