import Image from "next/image";

import {
	ArrowRightIcon,
	CircleDashedIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { Slope } from "@/assets/slope";

import HeroAnimation from "../components/hero-lottie";

export const HeroSection = () => {
	return (
		<section className="relative flex max-h-svh items-end overflow-hidden pt-[55vh]">
			<div className="absolute inset-0 size-full overflow-hidden bg-brand">
				<div className="absolute inset-x-0 z-10 h-1/4 bg-linear-to-b from-primary/60" />
				<Image
					alt="Background image"
					className="object-cover object-bottom opacity-80"
					fill
					loading="eager"
					priority
					src="/images/hero-banner.webp"
				/>
				<HeroAnimation />
			</div>
			<div className="relative flex h-[43svh] max-h-[440px] w-full bg-background">
				<div className="absolute -top-12 z-40 flex h-12 bg-background">
					<div className="flex items-center gap-3 px-14 md:px-16">
						<CircleDashedIcon className="animate-spin text-primary" />
						<p className="text-gold-600">Your UAE Business Partner.</p>
					</div>
					<Slope className="absolute left-full text-background" />
				</div>
				<div className="flex w-full items-stretch justify-between border-t">
					<div className="w-[60%] flex-1 p-6 pt-12 pl-12 md:pt-16 md:pl-16">
						<h1 className="text-balance font-display text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%] text-brand tracking-tight">
							Start your business in the UAE with Confidence.
						</h1>
					</div>
					<div className="mr-12 w-[40%] max-w-xl space-y-6 border-x p-12 md:py-16">
						<p className="text-pretty indent-12 text-brand text-xl leading-snug">
							Launch, manage, and grow your company with expert guidance from
							one of the UAE’s trusted business setup consultants. From company
							formation to visas, tax, and compliance we handle everything so
							you can focus on success.
						</p>
						<Button>
							Get Started Today <ArrowRightIcon />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
