import { AboutSection } from "./sections/about";
import { HeroSection } from "./sections/hero";
import { Metrics } from "./sections/metrics";
import { Services } from "./sections/services";

export function HomePageView() {
	return (
		<main>
			<HeroSection />
			<Services />
			<AboutSection />
			<Metrics />

			{/* <div className="bg-(--color) p-6 text-[contrast-color(var(--color))] [--color:#0c5879]">
				Hello
			</div> */}
		</main>
	);
}
