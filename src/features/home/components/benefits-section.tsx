import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SectionHeading } from "./section-heading";

const BENEFITS = [
	{
		title: "Business setup without bottlenecks",
		description:
			"We coordinate submissions, approvals, and follow-ups to keep your setup moving on schedule.",
	},
	{
		title: "Compliance handled proactively",
		description:
			"From VAT to corporate tax and payroll, we keep your obligations clear before deadlines become risk.",
	},
	{
		title: "Single partner across operations",
		description:
			"Use one team for PRO, visa, HR, insurance, and ongoing support as your company grows in the UAE.",
	},
];

export function BenefitsSection() {
	return (
		<section className="py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					description="Practical execution and strategic advice combined into a single support model."
					eyebrow="Benefits"
					title="Built for founders who need speed, clarity, and trust."
				/>
				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{BENEFITS.map((benefit) => (
						<Card className="rounded-2xl border bg-card" key={benefit.title}>
							<CardHeader>
								<CardTitle>{benefit.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{benefit.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
