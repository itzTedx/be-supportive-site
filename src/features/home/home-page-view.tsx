import { BenefitsSection } from "./components/benefits-section";
import { CtaFormSection } from "./components/cta-form-section";
import { FaqSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";

export function HomePageView() {
	return (
		<main>
			<HeroSection />
			<BenefitsSection />
			<ProcessSection />
			<WhyChooseUsSection />
			<FaqSection />
			<CtaFormSection />
		</main>
	);
}
