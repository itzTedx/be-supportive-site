"use client";

import { MetricCard } from "../components/metrics-card";

export const METRICS = [
	{
		id: 1,
		value: "500+ Companies",
		label: "Successfully Formed Across UAE",
	},
	{
		id: 2,
		value: "10,000+ Government",
		label: "Transactions Completed",
	},
	{
		id: 3,
		value: "100% Compliance",
		label: "With UAE Regulations & Authorities",
	},
	{
		id: 4,
		value: "200+ Employees",
		label: "Managed Through HR & Payroll Service",
	},
] as const;

export const Metrics = () => {
	return (
		<section className="px-6 py-12 md:p-16">
			<div className="flex flex-col gap-6 text-brand md:flex-row md:justify-between md:gap-12">
				<h2 className="font-display text-5xl sm:text-6xl md:text-7xl">
					Outsized Value.
				</h2>
				<p className="max-w-lg text-xl md:text-2xl">
					We help entrepreneurs, startups, and global investors establish and
					grow their presence in the UAE with confidence, speed, and full
					compliance.
				</p>
			</div>
			<ul className="mt-16 grid items-end gap-6 text-brand md:grid-cols-4">
				{METRICS.map((metric, i) => (
					<MetricCard index={i} key={metric.id} metric={metric} />
				))}
			</ul>
		</section>
	);
};
