export type Availability =
	| { status: "early-access" }
	| { status: "preorder" }
	| { status: "ships-on"; date: string }
	| { status: "in-stock" };

export type CameraVariant = "Auto Focus" | "Fixed Focus" | "Wide";

export type ProductImage = {
	src: string;
	altText: string;
	isPrimary?: boolean;
};

export type SensorSpecRow = {
	label: string;
	values: string[];
};

export type ComplianceSection = {
	title: string;
	standards: string[];
	kvPairs?: { label: string; value: string }[];
};

export type SpecificationItem = {
	label: string;
	value: string;
};

export type KeyFeatures = {
	label: string;
	values: string[];
	specifications: SpecificationItem[];
};

export type TechnicalSpecs = {
	sensorTable?: {
		headers: string[];
		rows: SensorSpecRow[];
	};
	stereoDepth?: {
		description: {
			text: string;
			characteristics: string[];
		};
		accuracy?: {
			conditions: string;
			values: string[];
		};
	};
	connectivity: {
		poe: string;
		connectors: string;
		usb: string;
		note?: string;
	};
	operatingConditions: {
		waterResistance: string;
		powerConsumption: string;
		operatingTemperature: string;
		ingressProtection: string;
	};
	vibrationShock: {
		vibration: string[];
		shock: string[];
	};
	compliance: ComplianceSection[];
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
	fullDescription: string;
	keyFeatures?: KeyFeatures;
	packageContents?: string[];
	technicalSpecs?: TechnicalSpecs;
	heroFeatures: string[];
};
