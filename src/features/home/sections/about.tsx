import Image from "next/image";

import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@/assets/icons/arrow";

export const AboutSection = () => {
	return (
		<section className="relative flex h-screen justify-end">
			<Image
				alt=""
				className="object-cover object-top"
				fill
				src="/images/about-business-setup.webp"
			/>

			<div className="relative z-10 mr-9 max-w-xl border-background border-x md:mr-12 md:w-[40%]">
				<div className="sticky top-24 space-y-6 bg-background p-9 text-brand-foreground md:p-12">
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						About Be Supportive
					</h2>

					<h3 className="font-display font-medium text-2xl text-gold-800 tracking-tight sm:text-3xl md:text-4xl">
						Your Reliable Partner for Business Setup in the UAE
					</h3>

					<p className="indent-6 text-brand text-lg leading-snug md:indent-12 md:text-xl">
						We simplify business setup in Abu Dhabi and across the UAE by
						offering end-to-end corporate services tailored to entrepreneurs,
						startups, and international investors. Our team combines local
						expertise with global standards to ensure your business is
						compliant, efficient, and ready to grow.
						<br />
						<br />
						Whether you’re setting up in{" "}
						<strong className="font-medium">
							Mainland, Free Zone, or Offshore,
						</strong>{" "}
						we guide you through every step with clarity and transparency.
					</p>

					<Button>
						About us <ArrowRightIcon />
					</Button>
				</div>
			</div>
		</section>
	);
};
