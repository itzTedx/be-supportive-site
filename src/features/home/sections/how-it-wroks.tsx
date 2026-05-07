import {
	CheckCircleIcon,
	CircleDashedIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@/assets/icons/arrow";

import { IndustriesLines } from "../components/lottie";

export const WORKS = [
	{
		title: "Expert Guidance",
		description: "Deep regulatory knowledge and local expertise.",
	},
	{
		title: "Fast Processing",
		description: "Efficient approvals and quick turnaround.",
	},
	{
		title: "Ongoing Support",
		description: "Long-term partnership beyond setup.",
	},
];

export const STEPS = [
	{
		id: 1,
		title: "Consultation",
		description: "Understand your business needs and goals.",
	},
	{
		id: 2,
		title: "Setup Plan",
		description: "Choose the right jurisdiction and structure.",
	},
	{
		id: 3,
		title: "Documentation",
		description: "We handle all paperwork and approvals.",
	},
	{
		id: 4,
		title: "Launch",
		description: "Get licensed and start operating.",
	},
];

export const HowItWorks = () => {
	return (
		<section className="grid grid-cols-2 bg-card">
			<div className="relative overflow-hidden bg-brand-secondary">
				<div className="relative z-10 flex h-full flex-col justify-between p-12 md:p-16 lg:p-20">
					<h2 className="mt-4 text-balance font-display text-3xl text-brand-foreground">
						Start Your UAE Company in 4 Simple Steps
					</h2>

					<ul className="grid grid-cols-2 gap-3">
						{STEPS.map((step) => (
							<li
								className="relative rounded-sm bg-background p-6"
								key={step.title}
							>
								<span className="absolute top-2 right-2 font-display font-semibold text-6xl text-brand-foreground">
									{step.id}
								</span>
								<h3 className="font-medium text-3xl text-gold-800">
									{step.title}
								</h3>
								<p className="mt-3 text-balance text-brand text-xl">
									{step.description}
								</p>
							</li>
						))}
					</ul>
				</div>
				<IndustriesLines className="absolute top-0 opacity-20" />
			</div>

			<div className="p-12 md:p-16 lg:p-20">
				<span className="inline-flex items-center gap-2 text-gold-600">
					<CircleDashedIcon className="animate-spin text-primary" />
					How it works
				</span>
				<h3 className="mt-2 text-balance font-display text-brand md:text-4xl lg:text-5xl">
					Protect what's important, Pursue what's possible.
				</h3>

				<p className="mt-4 text-balance text-brand text-xl leading-snug">
					From initial consultation to full company setup, we guide you through
					every step with clarity and precision. Our streamlined process ensures
					you're compliant, efficient, and ready to operate.
				</p>

				<ul className="my-14 space-y-6">
					{WORKS.map((work) => (
						<li className="flex items-center gap-4" key={work.title}>
							<span className="grid size-12 place-content-center rounded-full bg-brand-foreground">
								<CheckCircleIcon
									className="size-6 text-gold-600"
									weight="fill"
								/>
							</span>
							<div>
								<h3 className="font-medium text-2xl text-gold-800">
									{work.title}
								</h3>
								<p className="text-brand text-lg tracking-wide">
									{work.description}
								</p>
							</div>
						</li>
					))}
				</ul>

				<Button variant="secondary">
					Start your journey <ArrowRightIcon />
				</Button>
			</div>
		</section>
	);
};
