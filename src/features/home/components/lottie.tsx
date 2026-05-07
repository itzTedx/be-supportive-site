"use client";

import Lottie from "lottie-react";

import heroData from "@/assets/lottie/hero.json";
import linesData from "@/assets/lottie/lines.json";

interface HeroLinesProps {
	className?: string;
}

export function HeroLines({ className }: HeroLinesProps) {
	return <Lottie animationData={heroData} className={className} loop={false} />;
}

export function IndustriesLines({ className }: HeroLinesProps) {
	return <Lottie animationData={linesData} className={className} loop={true} />;
}
