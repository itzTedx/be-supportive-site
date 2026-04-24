import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	eyebrow?: string;
	title: string;
	description?: string;
	align?: "left" | "center";
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	align = "left",
}: SectionHeadingProps) {
	const alignClass = align === "center" ? "text-center" : "text-left";
	const maxWidthClass = align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl";

	return (
		<div className={cn(alignClass, maxWidthClass)}>
			{eyebrow ? (
				<p className="font-semibold text-primary text-xs uppercase tracking-[0.12em]">
					{eyebrow}
				</p>
			) : null}
			<h2 className="mt-2 font-heading text-3xl tracking-tight sm:text-4xl">
				{title}
			</h2>
			{description ? (
				<p className="mt-4 text-base text-muted-foreground sm:text-lg">
					{description}
				</p>
			) : null}
		</div>
	);
}
