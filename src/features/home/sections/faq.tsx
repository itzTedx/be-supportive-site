import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@/assets/icons/arrow";

const FAQS = [
	{
		id: "item-1",
		title: "What is the easiest way to start a business in the UAE?",
		content:
			"The easiest way is to work with a professional business setup consultant who handles licensing, approvals, visas, and compliance on your behalf. This saves time, reduces risk, and ensures your company is legally established without delays.",
	},
	{
		id: "item-2",
		title: "How long does it take to set up a company in the UAE?",
		content:
			"Depending on the business activity and jurisdiction, company setup can take anywhere from 2 days to 2 weeks.",
	},
	{
		id: "item-3",
		title: "Do I need a local sponsor in the UAE?",
		content:
			"This depends on your business activity and jurisdiction. Mainland companies may require a local sponsor, while many Free Zones allow 100% foreign ownership.",
	},
	{
		id: "item-4",
		title: "Can foreigners fully own a company in the UAE?",
		content:
			"Yes, foreigners can own 100% of a business in many Free Zones and selected Mainland activities, depending on the license type and business activity.",
	},
	{
		id: "item-5",
		title: "What is the cost of business setup in the UAE?",
		content:
			"Costs vary based on jurisdiction, business activity, and visa requirements. Free Zone packages are usually more cost-effective, while Mainland costs depend on office space and approvals.",
	},
	{
		id: "item-6",
		title: "Which is better: Mainland or Free Zone company?",
		content:
			"Mainland companies allow you to trade across the UAE without restrictions, while Free Zones offer 100% ownership and lower setup costs. The right choice depends on your business goals.",
	},
	{
		id: "item-7",
		title: "Do I need an office space to start a business in the UAE?",
		content:
			"Mainland businesses typically require a physical office, while many Free Zones offer flexible options such as shared offices or virtual desks.",
	},
	{
		id: "item-8",
		title: "How many visas can I get with my company?",
		content:
			"The number of visas depends on your license type, office size, and jurisdiction. Free Zones offer visa packages, while Mainland visas are linked to office space.",
	},
	{
		id: "item-9",
		title: "What documents are required to start a business in the UAE?",
		content:
			"Generally, you need passport copies, visa copies (if applicable), business activity details, and completed application forms. Requirements may vary by authority.",
	},
	{
		id: "item-10",
		title: "What taxes apply to businesses in the UAE?",
		content:
			"The UAE applies a 9% corporate tax on profits above the threshold and 5% VAT on applicable goods and services. Proper tax planning ensures compliance.",
	},
	{
		id: "item-11",
		title: "Can you assist with UAE business bank account opening?",
		content:
			"Yes, we guide you through the bank account opening process, help prepare documentation, and connect you with trusted banking partners in the UAE.",
	},
	{
		id: "item-12",
		title: "Do you provide support after company formation?",
		content:
			"Yes, we offer ongoing support including PRO services, visa processing, tax compliance, HR, and payroll services to keep your business running smoothly.",
	},
];

export const Faq = () => {
	return (
		<section className="relative flex justify-between p-12 md:p-16">
			<div className="sticky top-[40vh] h-fit max-w-3xl">
				<div className="py-6">
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Clear Answers. Trusted Guidance.
					</h2>
					<p className="mt-2 text-balance font-display text-gold-800 md:text-4xl lg:text-5xl">
						Frequently Asked Questions About Business Setup in the UAE
					</p>

					<p className="mt-4 text-balance text-brand text-lg">
						Get clear, expert answers to the most common questions about
						starting a business in Abu Dhabi and across the UAE. From costs and
						timelines to visas and legal requirements, we help you make informed
						decisions with confidence.
					</p>
				</div>
				<div className="mt-4 max-w-md rounded-md border border-gold-300/20 bg-card p-6">
					<h3 className="text-balance font-display text-2xl text-brand">
						Still have questions about setting up your business in the UAE?
					</h3>
					<p className="mt-2 mb-4 text-balance text-muted-foreground text-xl">
						Speak with our experts for personalized guidance.
					</p>
					<Button variant="outline">
						Get a Free Consultation <ArrowRightIcon />
					</Button>
				</div>
			</div>
			<Accordion className="relative z-10" defaultValue={["item-1"]}>
				{FAQS.map((item) => (
					<AccordionItem key={item.id} value={item.id}>
						<AccordionHeader>
							<AccordionTrigger>{item.title}</AccordionTrigger>
						</AccordionHeader>
						<AccordionPanel>{item.content}</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>

			{/* <Image
				alt=""
				className="object-cover opacity-20"
				fill
				src="/images/faq-bg.webp"
			/> */}
		</section>
	);
};
