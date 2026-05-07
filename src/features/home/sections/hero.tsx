import Image from "next/image";

import {
	ArrowRightIcon,
	CircleDashedIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { Slope } from "@/assets/slope";

import { HeroLines } from "../components/lottie";

export const HeroSection = () => {
	return (
		<section className="relative flex max-h-svh items-end overflow-hidden pt-[55vh]">
			<div className="absolute inset-x-0 top-0 size-full h-1/2 overflow-hidden bg-brand md:inset-0 md:h-full">
				<div className="absolute inset-x-0 z-10 h-1/4 bg-linear-to-b from-gold-800/60" />
				<Image
					alt="Background image"
					className="object-cover object-bottom opacity-80"
					fill
					loading="eager"
					priority
					src="/images/hero-banner.webp"
				/>
				<HeroLines />
			</div>
			<div className="relative flex h-[55svh] w-full bg-background md:h-[43svh] md:max-h-[440px]">
				<div className="absolute -top-12 z-40 flex h-12 bg-background">
					<div className="flex items-center gap-3 px-6 sm:px-14 md:px-16">
						<CircleDashedIcon className="animate-spin text-primary" />
						<p className="text-gold-600">Your UAE Business Partner.</p>
					</div>
					<Slope className="absolute left-full text-background" />
				</div>
				<div className="flex w-full flex-col items-stretch border-t md:flex-row md:justify-between">
					<div className="px-6 py-6 sm:flex-1 md:w-[60%] md:p-6 md:pt-16 md:pl-16">
						<h1 className="text-balance font-display text-4xl text-brand tracking-tight sm:text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%]">
							Start your business in the UAE with Confidence.
						</h1>
					</div>
					<div className="max-w-xl space-y-6 px-6 sm:border-x sm:p-6 md:mr-12 md:w-[40%] md:p-12 md:py-16">
						<p className="text-pretty indent-6 text-brand text-lg leading-snug md:indent-12 md:text-xl">
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
