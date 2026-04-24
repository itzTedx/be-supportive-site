import type { Metadata } from "next";

import { HomePageView } from "@/features/home/home-page-view";

export const metadata: Metadata = {
	title: "Business Setup UAE | Be Supportive",
	description:
		"Be Supportive helps founders launch and grow in the UAE with business setup, PRO, visa, tax, payroll, and compliance services.",
};

const homeJsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Be Supportive",
	url: "https://besupportive.ae",
	description:
		"Business setup, PRO, visa, tax, payroll, and compliance support for companies in the UAE.",
	areaServed: "United Arab Emirates",
	serviceType: [
		"Business Setup UAE",
		"PRO Services UAE",
		"Visa Services UAE",
		"VAT Registration UAE",
		"Corporate Tax UAE",
	],
};

export default function HomePage() {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
			<HomePageView />
		</>
	);
}
