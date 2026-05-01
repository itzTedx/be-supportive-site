import { SectionBreak } from "@/components/layout/section-break";

export const Services = () => {
	return (
		<section className="relative bg-primary">
			<SectionBreak />
			<div className="p-12">
				<h2 className="inline-flex items-center gap-2 text-brand-secondary">
					<div className="size-2.5 rounded-full bg-brand-secondary" />
					What we provide.
				</h2>

				<p className="font-display text-4xl text-primary-foreground">
					We provide a full suite of services to help you start and operate your
					business smoothly in the UAE
				</p>
			</div>
			<ul>
				{SERVICES.map((service, i) => (
					<li
						className="flex items-center justify-between gap-4 border-border/10 border-t p-12"
						key={service}
					>
						<span className="font-medium text-3xl text-brand-secondary">
							{Number(i + 1)}
						</span>

						<h3 className="font-display text-4xl text-primary-foreground">
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
