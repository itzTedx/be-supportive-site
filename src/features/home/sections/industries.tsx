import Image from "next/image";

import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { SectionBreak } from "@/components/layout/section-break";
import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@/assets/icons/arrow";

import {
	Slideshow,
	SlideshowImageContainer,
	SlideshowImageWrap,
	SlideshowIndicator,
} from "../components/slideshow";

const slides = [
	{
		id: "slide-0",
		title: "Retail & E-commerce",
		imageUrl: "/images/about-business-setup.webp",
	},
	{
		id: "slide-1",
		title: "Hospitality & Tourism",
		imageUrl: "/images/internal-external-auditing.webp",
	},
	{
		id: "slide-2",
		title: "Real Estate & Property Management",
		imageUrl: "/images/notary.webp",
	},
	{
		id: "slide-3",
		title: "Logistics & Supply Chain",
		imageUrl: "/images/internal-external-auditing.webp",
	},
	{
		id: "slide-4",
		title: "Manufacturing & Industrial",
		imageUrl: "/images/about-business-setup.webp",
	},
	{
		id: "slide-5",
		title: "Financial Services & FinTech",
		imageUrl: "/images/internal-external-auditing.webp",
	},
	{
		id: "slide-6",
		title: "Education & Training Institutes",
		imageUrl: "/images/about-business-setup.webp",
	},
	{
		id: "slide-7",
		title: "Marketing & Advertising Agencies",
		imageUrl: "/images/about-business-setup.webp",
	},
	{
		id: "slide-8",
		title: "IT Services & Software Development",
		imageUrl: "/images/about-business-setup.webp",
	},
	{
		id: "slide-9",
		title: "Oil & Gas Support Services",
		imageUrl: "/images/about-business-setup.webp",
	},
];

export const Industries = () => {
	return (
		<section className="relative bg-secondary">
			<SectionBreak className="inset-x-0 top-auto bottom-[-25px] w-full max-w-none" />
			<Slideshow className="grid grid-cols-2">
				<div className="flex flex-col items-start space-y-2 p-6 px-12 md:space-y-4 md:px-16">
					<div className="py-6">
						<h2 className="inline-flex items-center gap-2 text-gold-600">
							<CircleDashedIcon className="animate-spin text-primary" />
							Industries we serve
						</h2>
						<p className="text-balance font-display text-brand md:text-4xl lg:text-5xl">
							Supporting Businesses Across Key Sectors
						</p>
					</div>
					{slides.map((slide, index) => (
						<SlideshowIndicator
							className="cursor-pointer font-medium text-gold-800 text-xl"
							index={index}
							key={slide.id}
						>
							{slide.title}
						</SlideshowIndicator>
					))}
					<Button>
						Contact us <ArrowRightIcon />
					</Button>
				</div>
				<div className="relative flex items-center overflow-hidden bg-brand p-12 md:p-16">
					<SlideshowImageContainer className="relative z-10 aspect-4/3 w-full">
						{slides.map((slide, index) => (
							<SlideshowImageWrap
								className="relative overflow-hidden rounded-md border border-brand-foreground/15 shadow-md"
								index={index}
								key={Number(index)}
							>
								<Image
									alt={slide.title}
									className="size-full object-cover"
									fill
									priority={true}
									sizes="(max-width: 768px) 100vw, 50vw"
									src={slide.imageUrl}
								/>
							</SlideshowImageWrap>
						))}
					</SlideshowImageContainer>
				</div>
			</Slideshow>
		</section>
	);
};
