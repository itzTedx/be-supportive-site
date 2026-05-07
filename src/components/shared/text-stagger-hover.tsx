"use client";
import * as React from "react";

import { HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { ANIMATION_VARIANTS, AnimationT } from "./animation-variants";
import { StaggerDirection, setStaggerDirection } from "./set-stagger-direction";
import { splitText } from "./split-text";

interface TextStaggerHoverContextValue {
	isMouseIn: boolean;
}
const TextStaggerHoverContext = React.createContext<
	TextStaggerHoverContextValue | undefined
>(undefined);
function useTextStaggerHoverContext() {
	const context = React.useContext(TextStaggerHoverContext);
	if (!context) {
		throw new Error(
			"useTextStaggerHoverContext must be used within an TextStaggerHoverContextProvider"
		);
	}
	return context;
}

export const TextStaggerHover = ({
	children,
	className,
	...props
}: React.ComponentProps<"span">) => {
	const [isMouseIn, setIsMouseIn] = React.useState<boolean>(false);
	const handleMouse = () => setIsMouseIn((prevState) => !prevState);

	return (
		<TextStaggerHoverContext.Provider value={{ isMouseIn }}>
			<span
				className={cn("relative inline-block overflow-hidden", className)}
				{...props}
				onMouseEnter={handleMouse}
				onMouseLeave={handleMouse}
			>
				{children}
			</span>
		</TextStaggerHoverContext.Provider>
	);
};

interface TextStaggerHoverContentProps extends HTMLMotionProps<"span"> {
	animation?: AnimationT;
	staggerDirection?: StaggerDirection;
}
export const TextStaggerHoverActive = ({
	animation = "bottom",
	staggerDirection = "first",
	className,
	children,
	transition,
	...props
}: TextStaggerHoverContentProps) => {
	const { characters, characterCount } = splitText(String(children));
	const animationVariants = ANIMATION_VARIANTS[animation];

	const { isMouseIn } = useTextStaggerHoverContext();
	return (
		<span className={cn("inline-block", className)}>
			{characters.map((char, index) => {
				const staggerDelay = setStaggerDirection({
					direction: staggerDirection,
					totalItems: characterCount,
					index,
				});
				return (
					<motion.span
						animate={isMouseIn ? "hidden" : "visible"}
						className="inline-block"
						initial="visible"
						key={`${char}-${Number(index)}-hidden`}
						transition={{
							delay: staggerDelay,
							...transition,
						}}
						variants={animationVariants}
						{...props}
					>
						{char}
						{char === " " && index < characters.length - 1 && <>&nbsp;</>}
					</motion.span>
				);
			})}
		</span>
	);
};

export const TextStaggerHoverHidden = ({
	animation = "top",
	staggerDirection = "first",
	children,
	className,
	transition,
	...props
}: TextStaggerHoverContentProps) => {
	const { characters, characterCount } = splitText(String(children));
	const animationVariants = ANIMATION_VARIANTS[animation];
	const { isMouseIn } = useTextStaggerHoverContext();
	return (
		<span className={cn("absolute top-0 left-0 inline-block", className)}>
			{characters.map((char, index) => {
				const staggerDelay = setStaggerDirection({
					direction: staggerDirection,
					totalItems: characterCount,
					index,
				});
				return (
					<motion.span
						animate={isMouseIn ? "visible" : "hidden"}
						className="inline-block"
						initial="hidden"
						key={`${char}-${Number(index)}-hidden`}
						transition={{
							delay: staggerDelay,
							...transition,
						}}
						variants={animationVariants}
						{...props}
					>
						{char}
						{char === " " && index < characters.length - 1 && <>&nbsp;</>}
					</motion.span>
				);
			})}
		</span>
	);
};
