import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { SectionBreak } from "@/components/layout/section-break";

export const Services = () => {
	return (
		<section className="relative bg-foreground text-background">
			<SectionBreak />
			<div className="px-6 py-12 sm:px-9 md:px-16">
				<h2 className="inline-flex items-center gap-2 text-gold-600">
					<CircleDashedIcon className="animate-spin text-primary" />
					What we provide.
				</h2>

				<p className="mt-2 max-w-5xl font-display text-2xl text-background leading-snug md:text-5xl">
					We provide a full suite of services to help you start and operate your
					business smoothly in the UAE
				</p>
			</div>
			<ul>
				{SERVICES.map((service, i) => (
					<li
						className="flex flex-col gap-4 border-border/10 border-t p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9 md:px-16 md:py-12"
						key={service}
					>
						<span className="font-medium text-2xl text-primary md:text-3xl">
							{Number(i + 1)}
						</span>

						<h3 className="font-display text-2xl text-brand-foreground md:text-4xl">
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
