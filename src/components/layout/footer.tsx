import Link from "next/link";

import { Logo } from "@/assets/logo";

import { NAV_ITEMS } from "@/config/navigation";

const SERVICE_LINKS = [
	{ label: "Business Setup UAE", href: "/services/business-setup-uae" },
	{ label: "PRO Services UAE", href: "/services/pro-services-uae" },
	{ label: "Visa Services UAE", href: "/services/visa-services-uae" },
	{ label: "VAT Registration UAE", href: "/services/vat-registration-uae" },
];

export function Footer() {
	return (
		<footer className="border-t bg-muted/30">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
					<div>
						<Link href="/">
							<Logo />
						</Link>
						<p className="mt-4 max-w-sm text-muted-foreground text-sm leading-6">
							Premium UAE business setup and compliance support for founders and
							growing teams.
						</p>
						<p className="mt-3 text-muted-foreground text-sm">
							Abu Dhabi, United Arab Emirates
						</p>
					</div>

					<div>
						<h2 className="font-semibold text-sm uppercase tracking-[0.14em]">
							Company
						</h2>
						<ul className="mt-4 space-y-2.5 text-sm">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<Link
										className="text-muted-foreground transition-colors hover:text-foreground"
										href={item.href}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="font-semibold text-sm uppercase tracking-[0.14em]">
							Core Services
						</h2>
						<ul className="mt-4 space-y-2.5 text-sm">
							{SERVICE_LINKS.map((item) => (
								<li key={item.href}>
									<Link
										className="text-muted-foreground transition-colors hover:text-foreground"
										href={item.href}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-2 border-t pt-6 text-muted-foreground text-xs sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} Be Supportive. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<Link className="hover:text-foreground" href="/privacy-policy">
							Privacy Policy
						</Link>
						<Link className="hover:text-foreground" href="/terms">
							Terms
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
