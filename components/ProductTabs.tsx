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

interface ProductTabsProps {
	product: Product;
}

const tabTriggerStyles = cn(
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

const contentStyles = cn(
	"text-gray-600",
	"animate-in fade-in slide-in-from-top-2 duration-300",
	"mt-8",
);

export function ProductTabs({ product }: ProductTabsProps) {
	const specs = product.technicalSpecs;
	return (
		<div className="mx-auto">
			<Tabs defaultValue="description" className="w-full">
				<TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b border-gray-200 rounded-none gap-8">
					<TabsTrigger value="description" className={tabTriggerStyles}>
						Description
					</TabsTrigger>
					<TabsTrigger value="specs" className={tabTriggerStyles}>
						Technical Specifications
					</TabsTrigger>
					<TabsTrigger value="packageContents" className={tabTriggerStyles}>
						Package Includes
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="description"
					className="animate-in fade-in slide-in-from-top-2 duration-300"
				>
					<div className="max-w-4xl text-gray-600">
						<p className="mb-8 leading-relaxed text-base">
							<strong className="text-gray-900 font-bold">
								{product.name}
							</strong>{" "}
							{product.fullDescription.replace(`${product.name} `, "")}
						</p>
						{product.keyFeatures && (
							<>
								<div className="mb-10">
									<h3 className="text-gray-900 font-bold text-lg mb-4">
										Key features
									</h3>
									{product.keyFeatures.label && (
										<p className="font-bold text-gray-900 mb-3 text-sm">
											{product.keyFeatures.label}
										</p>
									)}

									<ul className="space-y-2">
										{product.keyFeatures.values.map((feature, index) => (
											<li key={index} className="flex items-start gap-2">
												<span className="text-indigo-600 font-bold mt-1.5 text-xs">
													–
												</span>
												<span className="leading-relaxed">{feature}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="text-gray-900 font-bold text-lg mb-4">
										Specifications:
									</h3>
									<ul className="space-y-2">
										{product.keyFeatures.specifications.map((spec, index) => (
											<li key={index} className="flex items-start gap-2">
												<span className="text-indigo-600 font-bold mt-1.5 text-xs">
													–
												</span>
												<span className="leading-relaxed">
													<strong className="text-gray-900">
														{spec.label}:
													</strong>{" "}
													{spec.value}
												</span>
											</li>
										))}
									</ul>
								</div>
							</>
						)}
					</div>
				</TabsContent>
				{specs && (
					<TabsContent value="specs" className={contentStyles}>
						<div className="mb-10 flex flex-col gap-6">
							{specs.sensorTable && (
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
													{specs.sensorTable.headers.map((header, i) => (
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
												{specs.sensorTable.rows.map((row, i) => (
													<TableRow key={i} className="hover:bg-gray-50/50">
														<TableCell className="font-medium text-gray-700 bg-white sticky left-0 z-10 border-r border-gray-100 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
															{row.label}
														</TableCell>
														{row.values.map((val, j) => (
															<TableCell
																key={j}
																className="text-center text-gray-600"
															>
																{val}
															</TableCell>
														))}
													</TableRow>
												))}
											</TableBody>
										</Table>
									</div>
								</section>
							)}

							{specs.stereoDepth && (
								<section id="stereo-depth-specification">
									<h4 className="text-gray-900 font-semibold mb-4">
										Stereo depth specification:
									</h4>
									<span className="text-gray-600 text-sm">
										{specs.stereoDepth.description.text}
									</span>
									{specs.stereoDepth.description.characteristics && (
										<ul className="my-2 text-gray-600 text-sm">
											{specs.stereoDepth.description.characteristics.map(
												(charac, index) => (
													<li key={index} className="flex items-start gap-3">
														<span className="text-indigo-500 font-bold">–</span>
														<span>{charac}</span>
													</li>
												),
											)}
										</ul>
									)}

									{specs.stereoDepth.accuracy && (
										<div className="mt-4 flex flex-col gap-1 text-sm">
											<h4 className="text-gray-900 font-semibold">
												Depth accuracy
											</h4>
											<span>{specs.stereoDepth.accuracy.conditions}</span>
											<ul className="my-2 text-gray-600 text-sm">
												{specs.stereoDepth.accuracy.values.map(
													(value, index) => (
														<li key={index} className="flex items-start gap-3">
															<span className="text-indigo-500 font-bold">
																–
															</span>
															<span>{value}</span>
														</li>
													),
												)}
											</ul>
										</div>
									)}
								</section>
							)}
						</div>
					</TabsContent>
				)}
				<TabsContent value="packageContents" className={contentStyles}>
					{product.packageContents && (
						<ul className="my-2 text-gray-600 text-sm">
							{product.packageContents.map((charac, index) => (
								<li key={index} className="flex items-start gap-3">
									<span className="text-indigo-500 font-bold">–</span>
									<span>{charac}</span>
								</li>
							))}
						</ul>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
