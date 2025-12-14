"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/lib/types/product";
import { cn } from "@/lib/utils";
import { BulletList } from "../BulletList";

const TAB_TRIGGER_STYLES = cn(
	"rounded-none",
	"bg-transparent",
	"px-0 py-3",
	"cursor-pointer",
	"text-gray-500",
	"shadow-none",
	"border-0",
	"border-b-2 border-transparent",
	"hover:text-gray-900",
	"hover:border-gray-200",
	"data-[state=active]:border-indigo-600",
	"data-[state=active]:text-indigo-900",
	"data-[state=active]:bg-transparent",
	"data-[state=active]:shadow-none",
	"data-[state=active]:font-bold",
);

const CONTENT_ANIMATION =
	"animate-in fade-in slide-in-from-top-2 duration-300 mt-8";

const DescriptionTab = ({ product }: { product: Product }) => {
	const { keyFeatures } = product;
	const descriptionText = product.fullDescription.replace(
		`${product.name} `,
		"",
	);

	return (
		<div className="max-w-4xl text-gray-600">
			<p className="mb-8 leading-relaxed text-base">
				<strong className="text-gray-900 font-bold">{product.name}</strong>{" "}
				{descriptionText}
			</p>

			{keyFeatures && (
				<>
					<div className="mb-10">
						<h3 className="text-gray-900 font-bold text-lg mb-4">
							Key features
						</h3>
						{keyFeatures.label && (
							<p className="font-bold text-gray-900 mb-3 text-sm">
								{keyFeatures.label}
							</p>
						)}
						<BulletList items={keyFeatures.values} />
					</div>
					<div>
						<h3 className="text-gray-900 font-bold text-lg mb-4">
							Specifications:
						</h3>
						<BulletList items={keyFeatures.specifications} />
					</div>
				</>
			)}
		</div>
	);
};

const SensorTable = ({
	sensorTable,
}: {
	sensorTable: NonNullable<Product["technicalSpecs"]>["sensorTable"];
}) => {
	if (!sensorTable) return null;

	return (
		<section id="sensor-specification">
			<h3 className="text-gray-900 font-bold text-lg mb-4">
				Sensor specification:
			</h3>
			<div className="rounded-lg border border-gray-200 overflow-x-auto">
				<Table className="min-w-[900px]">
					<TableHeader>
						<TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-200">
							<TableHead className="w-[180px] font-bold text-gray-900 bg-gray-50 sticky left-0 z-10">
								Feature
							</TableHead>
							{sensorTable.headers.map((header, i) => (
								<TableHead
									key={i}
									className="font-bold text-gray-900 text-center"
								>
									{header}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{sensorTable.rows.map((row, i) => (
							<TableRow key={i} className="hover:bg-gray-50/50">
								<TableCell className="font-medium text-gray-700 bg-white sticky left-0 z-10 border-r border-gray-100 shadow-sm">
									{row.label}
								</TableCell>
								{row.values.map((val, j) => (
									<TableCell key={j} className="text-center text-gray-600">
										{val}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</section>
	);
};

const SpecsTab = ({
	specs,
}: {
	specs: NonNullable<Product["technicalSpecs"]>;
}) => (
	<div className="mb-10 flex flex-col gap-6">
		{specs.sensorTable && <SensorTable sensorTable={specs.sensorTable} />}
		{specs.stereoDepth && (
			<section id="stereo-depth-specification">
				<h4 className="text-gray-900 font-semibold mb-4">
					Stereo depth specification:
				</h4>
				<span className="text-gray-600 text-sm block mb-2">
					{specs.stereoDepth.description.text}
				</span>
				<BulletList
					items={specs.stereoDepth.description.characteristics || []}
				/>
				{specs.stereoDepth.accuracy && (
					<div className="mt-4 flex flex-col gap-1 text-sm">
						<h4 className="text-gray-900 font-semibold">Depth accuracy</h4>
						<span className="text-gray-600 mb-2">
							{specs.stereoDepth.accuracy.conditions}
						</span>
						<BulletList items={specs.stereoDepth.accuracy.values} />
					</div>
				)}
			</section>
		)}
	</div>
);

export function ProductTabs({ product }: { product: Product }) {
	const specs = product.technicalSpecs;

	return (
		<div className="mx-auto">
			<Tabs defaultValue="description" className="w-full">
				<TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b border-gray-200 rounded-none gap-8">
					<TabsTrigger value="description" className={TAB_TRIGGER_STYLES}>
						Description
					</TabsTrigger>
					<TabsTrigger value="specs" className={TAB_TRIGGER_STYLES}>
						Technical Specifications
					</TabsTrigger>
					<TabsTrigger value="packageContents" className={TAB_TRIGGER_STYLES}>
						Package Includes
					</TabsTrigger>
				</TabsList>
				<TabsContent value="description" className={CONTENT_ANIMATION}>
					<DescriptionTab product={product} />
				</TabsContent>
				{specs && (
					<TabsContent value="specs" className={CONTENT_ANIMATION}>
						<SpecsTab specs={specs} />
					</TabsContent>
				)}
				<TabsContent value="packageContents" className={CONTENT_ANIMATION}>
					<BulletList items={product.packageContents || []} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
