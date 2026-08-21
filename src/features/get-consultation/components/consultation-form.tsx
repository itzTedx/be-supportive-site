"use client";

import { useActionState } from "react";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

import { sendConsultationEmail } from "../actions/send-consultation";
import type { ConsultationFormState } from "../actions/types";

const initialState: ConsultationFormState = {
	success: false,
	message: "",
};

export function ConsultationForm() {
	const [state, formAction, isPending] = useActionState(
		sendConsultationEmail,
		initialState
	);

	if (state.success) {
		return (
			<div className="flex flex-col items-center justify-center space-y-6 rounded-lg border border-border/10 bg-black/20 p-8 text-center shadow-sm">
				<div className="flex size-20 items-center justify-center rounded-full bg-gold-900/30 font-bold text-3xl text-primary">
					✓
				</div>
				<div className="space-y-2">
					<h3 className="font-display text-2xl text-background tracking-tight">
						Request Sent Successfully!
					</h3>
					<p className="text-lg text-brand-foreground">{state.message}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-lg border border-border/10 bg-black/20 p-6 shadow-sm sm:p-10 md:p-12">
			<form action={formAction} className="space-y-6">
				{state.message && !state.success && (
					<div className="rounded-md border border-destructive/20 bg-destructive/10 p-4 font-medium text-destructive text-sm">
						{state.message}
					</div>
				)}

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div className="space-y-2">
						<Label className="text-background" htmlFor="firstName">First Name</Label>
						<Input
							className="h-12 w-full rounded-lg border border-border/20 bg-black/20 px-4 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
							disabled={isPending}
							id="firstName"
							name="firstName"
							placeholder="John"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label className="text-background" htmlFor="lastName">Last Name</Label>
						<Input
							className="h-12 w-full rounded-lg border border-border/20 bg-black/20 px-4 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
							disabled={isPending}
							id="lastName"
							name="lastName"
							placeholder="Doe"
							required
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label className="text-background" htmlFor="email">Email Address</Label>
					<Input
						className="h-12 w-full rounded-lg border border-border/20 bg-black/20 px-4 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
						disabled={isPending}
						id="email"
						name="email"
						placeholder="john@example.com"
						required
						type="email"
					/>
				</div>

				<div className="space-y-2">
					<Label className="text-background" htmlFor="phone">Phone Number</Label>
					<Input
						className="h-12 w-full rounded-lg border border-border/20 bg-black/20 px-4 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
						disabled={isPending}
						id="phone"
						name="phone"
						placeholder="+971 50 123 4567"
						required
						type="tel"
					/>
				</div>

				<div className="space-y-2">
					<Label className="text-background" htmlFor="service">Service of Interest</Label>
					<Input
						className="h-12 w-full rounded-lg border border-border/20 bg-black/20 px-4 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
						disabled={isPending}
						id="service"
						name="service"
						placeholder="e.g. Business Setup, Golden Visa..."
					/>
				</div>

				<div className="space-y-2">
					<Label className="text-background" htmlFor="message">How can we help you?</Label>
					<textarea
						className="flex min-h-32 w-full rounded-lg border border-border/20 bg-black/20 px-4 py-3 text-base text-background transition-colors placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
						disabled={isPending}
						id="message"
						name="message"
						placeholder="Tell us about your business goals and requirements..."
						required
					/>
				</div>

				<Button
					className="w-full rounded-lg py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
					disabled={isPending}
					size="lg"
					type="submit"
				>
					{isPending ? (
						<>
							Sending... <Spinner className="ml-2" />
						</>
					) : (
						<>
							Request Consultation <ArrowRightIcon weight="bold" />
						</>
					)}
				</Button>

				<p className="pt-4 text-center text-brand-foreground text-sm">
					By submitting this form, you agree to our privacy policy and terms of
					service.
				</p>
			</form>
		</div>
	);
}
