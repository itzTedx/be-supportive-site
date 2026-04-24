import Link from "next/link";

import { Button } from "@/components/ui/button";

const TRUST_POINTS = [
	"Licensed consultants with UAE market depth",
	"Fast-track coordination across government entities",
	"Transparent fixed-fee guidance with no hidden delays",
];

export function HeroSection() {
	return (
		<section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-muted/40">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
				<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="font-semibold text-primary text-xs uppercase tracking-[0.16em]">
							UAE Business Services
						</p>
						<h1 className="mt-4 font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
							Launch and scale your UAE company with confidence.
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-muted-foreground">
							Be Supportive handles setup, compliance, visas, and PRO workflows
							so you can focus on growth. One experienced partner from
							registration to operations.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Button
								className="h-10 px-4"
								nativeButton={false}
								render={<Link href="/contact" />}
							>
								Book a free consultation
							</Button>
							<Button
								className="h-10 px-4"
								nativeButton={false}
								render={<Link href="/services" />}
								variant="outline"
							>
								Explore services
							</Button>
						</div>
					</div>
					<div className="rounded-2xl border bg-card p-6 shadow-sm">
						<p className="font-heading text-xl tracking-tight">
							Why founders choose us
						</p>
						<ul className="mt-5 space-y-4">
							{TRUST_POINTS.map((point) => (
								<li className="flex gap-3" key={point}>
									<span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
									<span className="text-muted-foreground">{point}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
