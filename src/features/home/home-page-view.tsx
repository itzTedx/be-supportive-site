import { HeroSection } from "./sections/hero";
import { Services } from "./sections/services";

export function HomePageView() {
	return (
		<main>
			<HeroSection />
			<Services />
		</main>
	);
}
