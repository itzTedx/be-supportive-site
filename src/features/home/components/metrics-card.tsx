import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

import { METRICS } from "../sections/metrics";

const heights = [
	"md:h-[480px] h-[300px]",
	"md:h-[420px] h-[240px]",
	"md:h-[360px] h-[200px]",
	"md:h-[300px] h-[160px]",
];
const colors = ["bg-[#e78745]", "bg-[#bfe5cb]", "bg-primary", "bg-[#e6dfda]"];

export const MetricCard = ({
	metric,
	index,
}: {
	index: number;
	metric: (typeof METRICS)[number];
}) => {
	const ref = useRef<HTMLLIElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 80%", "end 50%"],
	});
	const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return (
		<motion.li
			className={cn(
				"relative flex flex-col justify-between rounded-sm bg-card p-9",
				heights[index]
			)}
			initial={{
				opacity: 0,
				y: 60,
			}}
			key={metric.id}
			ref={ref}
			transition={{
				duration: 0.7,
				delay: index * 0.12,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{
				once: true,
				amount: 0.3,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
		>
			<motion.div
				className={cn(
					"absolute top-0 left-0 h-full w-1.5 origin-top -translate-x-full bg-brand",
					colors[index]
				)}
				style={{
					scaleY,
				}}
			/>
			<p className="font-display text-3xl sm:text-4xl md:text-5xl">
				{metric.value}
			</p>
			<h3 className="text-brand text-lg md:text-xl">{metric.label}</h3>
		</motion.li>
	);
};
