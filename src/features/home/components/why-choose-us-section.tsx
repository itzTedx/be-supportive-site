import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SectionHeading } from "./section-heading";

const DIFFERENTIATORS = [
	{
		title: "Local expertise, strategic guidance",
		description:
			"Work with advisors who understand UAE regulations and help you choose decisions that scale long term.",
	},
	{
		title: "Fast response and ownership",
		description:
			"Every request is tracked by a dedicated team that stays accountable from first call to final approval.",
	},
	{
		title: "Full-service operational support",
		description:
			"Consolidate setup, tax, HR, and compliance under one coordinated partner instead of fragmented vendors.",
	},
];

export function WhyChooseUsSection() {
	return (
		<section className="py-20 sm:py-24" id="why-us">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
					<div>
						<SectionHeading
							description="We combine execution speed with advisory depth so your company is set up correctly from day one."
							eyebrow="Why Be Supportive"
							title="A support partner built for UAE growth."
						/>
						<div className="mt-6">
							<Button
								className="h-10 px-4"
								nativeButton={false}
								render={<Link href="/about" />}
								variant="outline"
							>
								Learn more about our team
							</Button>
						</div>
					</div>
					<div className="grid gap-4">
						{DIFFERENTIATORS.map((item) => (
							<Card className="rounded-2xl border" key={item.title} size="sm">
								<CardHeader>
									<CardTitle>{item.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{item.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
