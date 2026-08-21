import { EnvelopeSimpleIcon, MapPinIcon, CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ConsultationForm } from "./components/consultation-form";

export function GetConsultationView() {
	return (
		<main className="flex-1 bg-foreground text-background pt-24 pb-16 md:pt-32">
			<div className="mx-auto max-w-7xl px-6 sm:px-9 md:px-16">
				<div className="grid items-start gap-12 md:grid-cols-2 lg:gap-24">
					{/* Left Column: Text */}
					<div className="space-y-6 md:sticky md:top-32 md:space-y-8">
						<h2 className="inline-flex items-center gap-2 text-gold-600">
							<CircleDashedIcon className="animate-spin text-primary" />
							Get in touch.
						</h2>
						<h1 className="text-balance font-display text-4xl text-background leading-none tracking-tight md:text-5xl lg:text-7xl">
							Let&apos;s build your business together.
						</h1>
						<p className="max-w-lg text-pretty text-brand-foreground text-lg leading-snug md:text-xl">
							Launch, manage, and grow your company with expert guidance from
							one of the UAE’s trusted business setup consultants. Fill out the
							form and we&apos;ll be in touch shortly to discuss your
							requirements.
						</p>
						<div className="space-y-6 border-t border-border/10 pt-6">
							<div className="flex items-center gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-900/30 text-primary">
									<MapPinIcon size={24} weight="fill" />
								</div>
								<div>
									<p className="font-medium text-background text-lg">
										Office Location
									</p>
									<p className="text-brand-foreground">Dubai, United Arab Emirates</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-900/30 text-primary">
									<EnvelopeSimpleIcon size={24} weight="fill" />
								</div>
								<div>
									<p className="font-medium text-background text-lg">Email Us</p>
									<p className="text-brand-foreground">info@besupportive.ae</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Form */}
					<ConsultationForm />
				</div>
			</div>
		</main>
	);
}
