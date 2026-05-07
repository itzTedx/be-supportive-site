"use client";

import * as React from "react";

import { HTMLMotionProps, motion } from "motion/react";

import {
	TextStaggerHover,
	TextStaggerHoverActive,
	TextStaggerHoverHidden,
} from "@/components/shared/text-stagger-hover";

import { cn } from "@/lib/utils";

interface SlideshowContextValue {
	activeSlide: number;
	changeSlide: (index: number) => void;
}

const SlideshowContext = React.createContext<SlideshowContextValue | undefined>(
	undefined
);
function useSlideshowContext() {
	const context = React.useContext(SlideshowContext);
	if (context === undefined) {
		throw new Error(
			"useSlideshowContext must be used within a SlideshowProvider"
		);
	}
	return context;
}

export const Slideshow = ({
	children,
	...props
}: React.ComponentProps<"div">) => {
	const [activeSlide, setActiveSlide] = React.useState<number>(0);
	const changeSlide = React.useCallback(
		(index: number) => setActiveSlide(index),
		[setActiveSlide]
	);
	return (
		<SlideshowContext.Provider value={{ activeSlide, changeSlide }}>
			<div {...props}>{children}</div>
		</SlideshowContext.Provider>
	);
};

export const SlideshowIndicator = ({
	index,
	children,
	className,
	...props
}: React.ComponentProps<"div"> & { index: number }) => {
	const { activeSlide, changeSlide } = useSlideshowContext();
	const isActive = activeSlide === index;
	const handleMouse = () => changeSlide(index);
	return (
		<div
			className={cn(
				"relative inline-block origin-bottom overflow-hidden",
				className
			)}
			{...props}
			onMouseEnter={handleMouse}
		>
			<TextStaggerHover className="cursor-pointer">
				<TextStaggerHoverActive
					animate={isActive ? "hidden" : "visible"}
					animation={"top"}
					className="opacity-50"
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					{String(children)}
				</TextStaggerHoverActive>
				<TextStaggerHoverHidden
					animate={isActive ? "visible" : "hidden"}
					animation={"bottom"}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					{String(children)}
				</TextStaggerHoverHidden>
			</TextStaggerHover>
		</div>
	);
};

export const clipPathVariants = {
	visible: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
	},
	hidden: {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
	},
};
export const SlideshowImageContainer = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn(
				"grid overflow-hidden *:col-start-1 *:col-end-1 *:row-start-1 *:row-end-1 *:size-full",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
SlideshowImageContainer.displayName = "SlideshowImageContainer";

export const SlideshowImageWrap = React.forwardRef<
	HTMLDivElement,
	HTMLMotionProps<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
	const { activeSlide } = useSlideshowContext();
	return (
		<motion.div
			animate={activeSlide === index ? "visible" : "hidden"}
			className={cn("inline-block align-middle", className)}
			ref={ref}
			transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
			variants={clipPathVariants}
			{...props}
		/>
	);
});
SlideshowImageWrap.displayName = "SlideshowImageWrap";
