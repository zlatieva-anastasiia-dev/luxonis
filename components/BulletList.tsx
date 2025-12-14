import { cn } from "@/lib/utils";

interface BulletListProps {
    items: string[] | { label?: string; value: string }[];
    className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
    if (!items?.length) return null;

    return (
        <ul className={cn("space-y-2 text-sm text-gray-600", className)}>
            {items.map((item, index) => {
                const isObject = typeof item === "object";
                const content = isObject ? item.value : item;
                const label = isObject ? item.label : null;

                return (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-indigo-500 font-bold shrink-0">–</span>
                        {label && <strong className="text-gray-900 mr-1">{label}:</strong>}
                        <span className="leading-relaxed">{content}</span>
                    </li>
                );
            })}
        </ul>
    );
}
