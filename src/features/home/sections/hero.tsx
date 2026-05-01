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
				<Image
					alt="Background image"
					className="object-cover object-bottom opacity-60"
					fill
					loading="eager"
					priority
					src="/images/hero-banner.webp"
				/>
				<HeroAnimation />
			</div>
			<div className="relative flex h-[43svh] max-h-[440px] w-full bg-background">
				<div className="absolute -top-12 z-99 flex h-12 bg-background">
					<div className="flex items-center gap-3 px-12">
						<CircleDashedIcon className="text-brand" />
						<p className="text-primary-800">Your UAE Business Partner.</p>
					</div>
					<Slope className="absolute left-full text-background" />
				</div>
				<div className="flex w-full items-stretch justify-between border-t">
					<div className="w-[60%] flex-1 p-6 pt-12 pl-12">
						<h1 className="text-balance font-display text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%] text-primary tracking-tight">
							Start your business in the UAE with Confidence.
						</h1>
					</div>
					<div className="mr-12 w-[40%] max-w-xl space-y-6 border-x p-12">
						<p className="text-pretty indent-12 text-brand-foreground text-xl leading-snug">
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
