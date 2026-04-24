import { SectionHeading } from "./section-heading";

const PROCESS_STEPS = [
	{
		title: "Discovery and planning",
		description:
			"We assess your business goals, activity, and structure to define the right UAE setup path.",
	},
	{
		title: "Documentation and approvals",
		description:
			"Our team prepares submissions, coordinates authorities, and tracks each milestone end-to-end.",
	},
	{
		title: "Launch and ongoing support",
		description:
			"After registration, we continue with visas, PRO, tax, and payroll support to keep you compliant.",
	},
];

export function ProcessSection() {
	return (
		<section className="border-y bg-muted/30 py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					description="A transparent workflow designed for fast execution and fewer surprises."
					eyebrow="How We Work"
					title="Three clear steps from idea to operation."
				/>
				<ol className="mt-10 grid gap-4 md:grid-cols-3">
					{PROCESS_STEPS.map((step, index) => (
						<li className="rounded-2xl border bg-card p-6" key={step.title}>
							<p className="font-semibold text-primary text-xs uppercase tracking-[0.14em]">
								Step {index + 1}
							</p>
							<h3 className="mt-3 font-heading text-xl tracking-tight">
								{step.title}
							</h3>
							<p className="mt-3 text-muted-foreground">{step.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
