import { cn } from "@/lib/utils";

interface SectionBreakProps {
	className?: string;
}

export const SectionBreak = ({ className }: SectionBreakProps) => {
	return (
		<div
			className={cn(
				"absolute top-[-25px] right-12 left-auto z-20 flex h-[50px] w-[40%] max-w-xl",
				className
			)}
		>
			<div className="flex h-full w-1/4 flex-col">
				<div className="w-full flex-1" />
				<div className="w-full flex-1 bg-[#e6dfda]" id="greyBox" />
			</div>
			<div className="flex h-full w-1/4 flex-col">
				<div className="w-full flex-1 bg-[#bfe5cb]" id="seafoamBox" />
				<div className="w-full flex-1" />
			</div>
			<div className="flex h-full w-1/4 flex-col">
				<div className="w-full flex-1" />
				<div className="w-full flex-1 bg-[#e78745]" id="popBox" />
			</div>
			<div className="flex h-full w-1/4 flex-col">
				<div className="w-full flex-1 bg-[#7b3d2c]" id="clayBox" />
				<div className="w-full flex-1" />
			</div>
		</div>
	);
};
