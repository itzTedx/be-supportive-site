import { cn } from "@/lib/utils";

interface SectionBreakProps {
	className?: string;
}

export const SectionBreak = ({ className }: SectionBreakProps) => {
	return (
		<div
			className={cn(
				"absolute inset-x-0 top-[-25px] z-20 flex h-[50px] sm:right-12 sm:left-auto sm:w-[40%] sm:max-w-xl",
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
