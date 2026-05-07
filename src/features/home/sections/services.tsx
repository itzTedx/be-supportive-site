import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { SectionBreak } from "@/components/layout/section-break";

export const Services = () => {
	return (
		<section className="relative bg-foreground text-background">
			<SectionBreak />
			<div className="px-16 py-12">
				<h2 className="inline-flex items-center gap-2 text-gold-600">
					<CircleDashedIcon className="animate-spin text-primary" />
					What we provide.
				</h2>

				<p className="mt-2 max-w-5xl font-display text-5xl text-background leading-snug">
					We provide a full suite of services to help you start and operate your
					business smoothly in the UAE
				</p>
			</div>
			<ul>
				{SERVICES.map((service, i) => (
					<li
						className="flex items-center justify-between gap-4 border-border/10 border-t px-16 py-12"
						key={service}
					>
						<span className="font-medium text-3xl text-primary">
							{Number(i + 1)}
						</span>

						<h3 className="font-display text-4xl text-brand-foreground">
							{service}
						</h3>
					</li>
				))}
			</ul>
		</section>
	);
};

const SERVICES = [
	"Business Setup (Mainland, Free Zone, Offshore)",
	"UAE Local Sponsorship & Local Service Agent",
	"PRO Services & Government Liaison",
	"Immigration & Visa Services",
	"Tax Consultancy (VAT & Corporate Tax)",
	"HR & Payroll Services",
	"MOHRE & Labor Services",
	"Medical Insurance & Employee Benefits",
	"Notary Services (Private & Public)",
	"Ministry of Justice (MOJ) Services",
	"Abu Dhabi Pension Registration",
	"Department of Health (DOH) Services",
	"CICPA Passes & Security Clearance",
] as const;
