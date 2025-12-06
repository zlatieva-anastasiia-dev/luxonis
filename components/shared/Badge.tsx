import type { Availability } from "@/lib/types/product";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
	item: Availability;
};

const getBadgeStyle = (status: Availability["status"]) => {
	switch (status) {
		case "early-access":
		case "preorder":
			return "bg-[#7C5CFC] text-white";
		case "ships-on":
			return "bg-gray-200 text-gray-800";
		case "in-stock":
			return "bg-green-600 text-white";
		default:
			return "bg-gray-100 text-gray-800";
	}
};

const getBadgeLabel = (item: Availability) => {
	switch (item.status) {
		case "early-access":
			return "EARLY ACCESS";
		case "preorder":
			return "PREORDER";
		case "ships-on":
			return `SHIPS ON: ${item.date}`;
		case "in-stock":
			return "IN STOCK";
		default:
			return "";
	}
};

export default function Badge({ item, className, ...props }: BadgeProps) {
	return (
		<span
			className={`
                inline-block 
                px-2.5 py-1 
                text-xs
                uppercase 
                rounded 
                ${getBadgeStyle(item.status)} 
                ${className}
            `}
			{...props}
		>
			{getBadgeLabel(item)}
		</span>
	);
}
