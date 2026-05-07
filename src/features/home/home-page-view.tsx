import { AboutSection } from "./sections/about";
import { HeroSection } from "./sections/hero";
import { HowItWorks } from "./sections/how-it-wroks";
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

			{/* <div className="bg-(--color) p-6 text-[contrast-color(var(--color))] [--color:#0c5879]">
				Hello
			</div> */}
		</main>
	);
}
