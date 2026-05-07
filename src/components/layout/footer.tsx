import Link from "next/link";

import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
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
		<footer className="m-6 rounded-sm bg-foreground md:m-12">
			<div className="px-6 py-6 lg:px-16 lg:py-14">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<Link href="/">
							<Logo className="text-background" />
						</Link>
						<p className="mt-4 max-w-sm text-brand-foreground text-xl leading-6">
							Premium UAE business setup and compliance support for founders and
							growing teams.
						</p>
						<p className="mt-3 text-brand text-sm">
							Abu Dhabi, United Arab Emirates
						</p>
					</div>

					<div>
						<h2 className="font-medium text-primary uppercase tracking-wider">
							Company
						</h2>
						<ul className="mt-4 space-y-2.5">
							{NAV_ITEMS.map((item) => (
								<li key={item.href}>
									<Link
										className="text-card transition-colors hover:text-primary"
										href={item.href}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="font-medium text-primary uppercase tracking-wider">
							Core Services
						</h2>
						<ul className="mt-4 space-y-2.5">
							{SERVICE_LINKS.map((item) => (
								<li key={item.href}>
									<Link
										className="text-card transition-colors hover:text-primary"
										href={item.href}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-2 border-border/10 border-t pt-6 text-muted-foreground text-xs sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} Be Supportive. All rights reserved.
					</p>
					<p className="text-muted-foreground text-xs sm:text-center">
						Business setup services in Abu Dhabi, UAE • Company formation UAE •
						PRO services Abu Dhabi • Visa services UAE • Tax consultancy UAE •
						Local sponsor UAE
					</p>
					<div className="flex items-center gap-2 sm:gap-4">
						<Link className="hover:text-foreground" href="/privacy-policy">
							Privacy Policy
						</Link>
						<Link className="hover:text-foreground" href="/terms">
							Terms
						</Link>
						<CircleDashedIcon className="size-2.5 animate-spin text-muted" />
						<p className="flex items-center gap-1 tracking-wide md:gap-2">
							Designed from UAE{" "}
							<ArrowRightIcon className="size-2.5 md:size-3" />
							<Link
								className="font-medium text-brand hover:text-foreground"
								href="https://zironpro.ae/?utm_source=be-supportive&utm_medium=footer-link&utm_campaign=brand-credit"
							>
								Ziron Pro
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
