import { Cta } from "@/components/layout/cta";

import { AboutSection } from "./sections/about";
import { Faq } from "./sections/faq";
import { HeroSection } from "./sections/hero";
import { HowItWorks } from "./sections/how-it-works";
import { Industries } from "./sections/industries";
import { Metrics } from "./sections/metrics";
import { Services } from "./sections/services";

export function HomePageView() {
	return (
		<main>
			<HeroSection />
			<Services />
			<AboutSection />
			<Metrics />
			<Industries />
			<HowItWorks />
			<Faq />
			<Cta />
		</main>
	);
}
