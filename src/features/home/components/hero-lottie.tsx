"use client";

import Lottie from "lottie-react";

import animationData from "@/assets/lottie/hero.json";

interface HeroLinesProps {
	className?: string;
}

export default function HeroLines({ className }: HeroLinesProps) {
	return (
		<Lottie animationData={animationData} className={className} loop={false} />
	);
}
