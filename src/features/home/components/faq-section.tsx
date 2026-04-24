import Link from "next/link";

import { Button } from "@/components/ui/button";

import { SectionHeading } from "./section-heading";

const FAQ_ITEMS = [
	{
		question: "How long does business setup in the UAE usually take?",
		answer:
			"Timelines vary by business activity and jurisdiction, but most setups can be completed in a few weeks with complete documentation.",
	},
	{
		question: "Can you support both mainland and free zone companies?",
		answer:
			"Yes. We guide structure selection and execution across mainland and leading free zones based on your goals and budget.",
	},
	{
		question: "Do you provide support after company registration?",
		answer:
			"Yes. We continue with PRO, visa renewals, VAT, corporate tax, payroll, and HR support so operations stay compliant.",
	},
];

export function FaqSection() {
	return (
		<section className="border-y bg-muted/30 py-20 sm:py-24" id="faqs">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					description="Answers to common questions from founders expanding into the UAE."
					eyebrow="FAQs"
					title="Everything you need to know before getting started."
				/>
				<div className="mt-10 space-y-4">
					{FAQ_ITEMS.map((faq) => (
						<article
							className="rounded-2xl border bg-card p-6"
							key={faq.question}
						>
							<h3 className="font-heading text-xl tracking-tight">
								{faq.question}
							</h3>
							<p className="mt-3 text-muted-foreground">{faq.answer}</p>
						</article>
					))}
				</div>
				<div className="mt-8">
					<Button
						nativeButton={false}
						render={<Link href="/contact" />}
						variant="link"
					>
						Have another question? Talk to our team.
					</Button>
				</div>
			</div>
		</section>
	);
}
