import type { Product } from "../types/product";

export const products: Product[] = [
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
				altText: "OAK 4 D Pro Professional Camera",
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
		technicalSpecs: {
			sensorTable: {
				headers: [
					"Auto Focus",
					"Fixed Focus",
					"Wide",
					"Stereo Pair",
					"Stereo Pair - Wide",
				],
				rows: [
					{
						label: "Sensor",
						values: [
							"IMX586 (PY237)",
							"IMX586 (PY261)",
							"IMX586 (PY262)",
							"OV9282 (PY238)",
							"OV9282 (PY265)",
						],
					},
					{
						label: "DFOV",
						values: ["82.4°", "82.4°", "120.0°", "84.5°", "149.2°"],
					},
					{
						label: "Max resolution",
						values: [
							"48MP (8000x6000)",
							"48MP (8000x6000)",
							"48MP (8000x6000)",
							"1MP (1280x800)",
							"1MP (1280x800)",
						],
					},
					{ label: "Focus", values: ["AF", "FF", "FF", "FF", "FF"] },
					{
						label: "Max Framerate",
						values: ["480 FPS", "480 FPS", "480 FPS", "60 FPS", "60 FPS"],
					},
					{
						label: "Spectral range",
						values: ["Visible", "Visible", "Visible", "Visible", "Visible"],
					},
					{
						label: "Shutter Type",
						values: ["Rolling", "Rolling", "Rolling", "Global", "Global"],
					},
					{
						label: "Sensor size",
						values: ['1/2"', '1/2"', '1/2"', '1/4"', '1/4"'],
					},
					{
						label: "F-number",
						values: [
							"1.79 ± 5%",
							"1.79 ± 5%",
							"1.79 ± 5%",
							"2.0 ± 5%",
							"2.0 ± 5%",
						],
					},
					{
						label: "Effective Focal Length",
						values: ["4.74mm", "4.74mm", "4.74mm", "2.35mm", "1.69mm"],
					},
					{
						label: "Pixel size",
						values: ["0.8µm", "0.8µm", "0.8µm", "3.0µm", "3.0µm"],
					},
				],
			},
			stereoDepth: {
				description: {
					text: "This OAK camera has a baseline of 7.5cm - the distance between the left and the right stereo camera. Minimal and maximal depth perception (MinZ and Max) depends on camera FOV, resolution, and baseline.",
					characteristics: [
						"Ideal depth range: 70cm - 12m",
						"MinZ: ~20cm (400P and extended), ~35cm (400P OR 800P, extended), ~70cm (800P)",
					],
				},

				accuracy: {
					conditions: "FOR NFOV:",
					values: [
						"below 4m: below 1.5% depth error",
						"4m - 8m: below 3% depth error",
						"8m - 12m: below 6% depth error",
					],
				},
			},

			connectivity: {
				poe: "The base board offers full 802.3at, Class 3 PoE compliance with 2.5GBASE-T speeds (up to 2.5Gbps, depending on the network infrastructure). A PoE switch is recommended to power the device and utilize the full potential of PoE connectivity.",
				connectors:
					"M12 PoE connector is used for power and 2.5GBit data transfer. Additionally, there's an M8 connector for IO connectivity; USB2 (D+, D-), camera IOs (FSIN, STROBE), I2C, power, and 2x GPIO (can be used for DBG-UART). Cap for M8 is included when connector is not used to ensure water resistance.",
				usb: "Camera also offers USB-C (USB 3.2 Gen2, 10 Gbps) as an option for power and connectivity.",
				note: "You can also combine both approaches.",
			},

			operatingConditions: {
				waterResistance: "This camera is shipped with IP67 rated enclosure.",
				powerConsumption: "1.5W to 25W",
				operatingTemperature: "-20C to 50C",
				ingressProtection: "IEC 60529",
			},

			vibrationShock: {
				vibration: [
					"ISO 19014-3:2018 — Section 5.6.2",
					"IEC 60068-2-14 — Test Na",
				],
				shock: ["ISO 19014-3:2018 — Section 5.7"],
			},
			compliance: [
				{
					title: "EMC",
					standards: [
						"EN 55032:2015 + A11:2020 — Class A",
						"EN 55035:2017 + A11:2020",
						"47 CFR Part 15, Subpart B",
					],
				},
				{
					title: "Safety",
					standards: [
						"EN 62368-1:2020 + A11:2020",
						"IEC 62368-1:2018 (3rd Edition)",
					],
				},
				{
					title: "Thermal / Environmental Testing",
					standards: [],
					kvPairs: [
						{ label: "Thermal Shock", value: "ISO 16750-4 (−40°C to +60°C)" },
						{
							label: "Testing",
							value: "ISO 19014 according to IEC 60068-2-14 Test Na",
						},
						{ label: "Salt Spray", value: "ISO 9227:2017 — Method NSS" },
						{
							label: "Chemical Resistance",
							value: "SAE J1455, 4.4.3.1; ISO 4628-1,3",
						},
					],
				},
				{
					title: "Environmental Compliance",
					standards: ["RoHS Directive 2015/863"],
				},
			],
		},
		fullDescription:
			"OAK 4 D is the ultimate edge inference, stereo vision camera.  This standalone device is perfect for robotic vision and automated systems, combining stereo depth camera and high-resolution color camera with on-device Neural Network inferencing and Computer Vision capabilities.",
		keyFeatures: {
			label: "RVC4 on-board features",
			values: [
				"6-core ARM CPU (QC 8-series), 8GB RAM, 128GB of storage",
				"Operated by Luxonis OS, based on Linux kernel 5.15",
				"Computer vision: warp (undistortion), resize, crop via ImageManip node, edge detection, feature tracking. You can also run custom CV functions",
				"Stereo depth perception with filtering, post-processing, RGB-depth alignment, and high configurability",
				"Object tracking: 2D and 3D tracking with ObjectTracker node",
			],
			specifications: [
				{ label: "Base line", value: "75mm" },
				{ label: "Ideal depth range", value: "70 cm - 12 m" },
				{ label: "Power consumption", value: "up to 25W" },
				{
					label: "Housing",
					value: "Industrial grade aluminum with Front Gorilla Glass",
				},
				{ label: "Water resistance", value: "IP67 rating enclosure" },
				{ label: "Tripod mount", value: '1/4" tripod mount' },
				{
					label: "Vesa mount",
					value: "75mm M4 Vesa mount on back and bottom cover",
				},
				{ label: "Dimensions", value: "143.5 x 42.5 x 67.3 mm" },
				{ label: "Weight", value: "674g" },
			],
		},
		packageContents: ["1 OAK 4 D", "M12 plug to RJ45 cable, 2m"],
	},
	{
		id: "oak-4-d",
		name: "OAK 4 D",
		price: 849,
		priceWithVat: 1027.29,
		mainImage: {
			src: "/OAK_D_1.webp",
			altText: "OAK 4 D AI Camera with purple front",
		},
		fullDescription: "some description",
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
		fullDescription: "some description",
		shortDescription: "Compact power for edge computing.",
		availability: [
			{ status: "early-access" },
			{ status: "preorder" },
			{ status: "ships-on", date: "DECEMBER 15, 2025" },
		],
		cameraVariants: ["Fixed Focus"],
		heroFeatures: ["4 TOPS processing", "Stereo Depth"],
	},
];
