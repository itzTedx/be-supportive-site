import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { Slope } from "@/assets/slope";

import { Button } from "../ui/button";
import { SectionBreak } from "./section-break";

export const Cta = () => {
	return (
		<section className="relative max-sm:mb-6">
			<div className="absolute -top-12 z-40 flex h-12 bg-background">
				<div className="flex items-center gap-3 px-6 sm:px-14 md:px-16">
					<CircleDashedIcon className="animate-spin text-primary" />
					<p className="text-gold-600">Your UAE Business Partner.</p>
				</div>
				<Slope className="absolute left-full text-background" />
			</div>
			<div className="flex w-full flex-col items-stretch border-y md:flex-row md:justify-between">
				<div className="flex-1 p-6 max-sm:pb-0 md:w-[60%] md:p-16 md:pl-16">
					<h2 className="text-balance font-display text-3xl text-brand tracking-tight md:text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%]">
						Ready to navigate UAE business with confidence?
					</h2>
				</div>
				<div className="max-w-xl space-y-6 p-6 max-sm:pb-16 md:mr-12 md:w-[40%] md:border-x md:p-12 md:py-16">
					<p className="text-pretty indent-6 text-brand text-lg leading-snug md:indent-12 md:text-xl">
						Let our experts guide you through every step from formation to full
						compliance.
					</p>
					<Button>
						Book a Free Consultation Today <ArrowRightIcon />
					</Button>
				</div>
			</div>
			<SectionBreak className="top-auto bottom-[-25px]" />
		</section>
	);
};
