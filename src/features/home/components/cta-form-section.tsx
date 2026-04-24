import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SectionHeading } from "./section-heading";

export function CtaFormSection() {
	return (
		<section className="py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border bg-card p-6 sm:p-8 lg:p-10">
					<SectionHeading
						description="Share a few details and our team will recommend the best path for setup and compliance."
						eyebrow="Start Today"
						title="Get your UAE business setup roadmap."
					/>
					<form action="#" className="mt-8 grid gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="full-name">Full name</Label>
							<Input
								id="full-name"
								name="fullName"
								placeholder="Your full name"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Work email</Label>
							<Input
								id="email"
								name="email"
								placeholder="you@company.com"
								required
								type="email"
							/>
						</div>
						<div className="space-y-2 md:col-span-2">
							<Label htmlFor="message">What support do you need?</Label>
							<textarea
								className="min-h-28 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
								id="message"
								name="message"
								placeholder="Tell us your business activity, timeline, and goals."
								required
							/>
						</div>
						<div className="md:col-span-2">
							<Button className="h-10 px-4" type="submit">
								Request consultation
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
