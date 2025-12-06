import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "oak-4-d",
    name: "OAK 4 D",
    price: 849,
    priceWithVat: 1027.29,
    imageSrc: "/OAK_D_1.webp",
    altText: "OAK 4 D AI Camera with purple front",
    shortDescription: "The standard for spatial AI.",
    readMore: "/products/oak-4-d",
    availability: [{ status: "in-stock" }],
    cameraVariants: ["Auto Focus", "Wide"],
    heroFeatures: ["4 TOPS processing", "Stereo Depth"],
  },
  {
    id: "oak-4-s",
    name: "OAK 4 S",
    price: 749,
    priceWithVat: 906.29,
    imageSrc: "/OAK_S_1.webp",
    altText: "OAK 4 S Compact Camera",
    shortDescription: "Compact power for edge computing.",
    readMore: "/products/oak-4-s",
    availability: [
      { status: "early-access" },
      { status: "preorder" },
      { status: "ships-on", date: "DECEMBER 15, 2025" },
    ],
    cameraVariants: ["Fixed Focus"],
  },
  {
    id: "oak-4-d-pro",
    name: "OAK 4 D Pro",
    price: 949,
    priceWithVat: 1148.29,
    imageSrc: "/OAK_D_PRO_1.webp",
    altText: "OAK 4 D Pro Professional Camera",
    shortDescription:
      "OAK 4 D PRO is the most advanced stereo vision and edge inference camera we have produced.", //
    readMore: "/products/oak-4-d-pro",
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
      "Active stereo: IR dot projector",
    ],
  },
];
