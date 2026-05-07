import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { Slope } from "@/assets/slope";

import { Button } from "../ui/button";

export const Cta = () => {
	return (
		<section className="relative">
			<div className="absolute -top-12 z-40 flex h-12 bg-background">
				<div className="flex items-center gap-3 px-14 md:px-16">
					<CircleDashedIcon className="animate-spin text-primary" />
					<p className="text-gold-600">Your UAE Business Partner.</p>
				</div>
				<Slope className="absolute left-full text-background" />
			</div>
			<div className="flex w-full items-stretch justify-between border-t">
				<div className="w-[60%] flex-1 p-6 pl-12 md:p-12 md:pl-16">
					<h2 className="text-balance font-display text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%] text-brand tracking-tight">
						Ready to navigate UAE business with confidence?
					</h2>
				</div>
				<div className="mr-12 w-[40%] max-w-xl space-y-6 border-x p-12 md:py-16">
					<p className="text-pretty indent-12 text-brand text-xl leading-snug">
						Let our experts guide you through every step from formation to full
						compliance.
					</p>
					<Button>
						Book a Free Consultation Today <ArrowRightIcon />
					</Button>
				</div>
			</div>
		</section>
	);
};
