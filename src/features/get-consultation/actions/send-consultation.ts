"use server";

import { getContactEmailConfig } from "./config";
import {
	createContactMailHtml,
	createContactMailText,
} from "./contact-form-submission-content";
import { createSmtpTransporter } from "./transporter";
import type { ConsultationFormState } from "./types";

export async function sendConsultationEmail(
	prevState: ConsultationFormState,
	formData: FormData
): Promise<ConsultationFormState> {
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const email = formData.get("email") as string;
	const phone = formData.get("phone") as string;
	const service = formData.get("service") as string;
	const message = formData.get("message") as string;

	// Basic validation
	if (!firstName || !lastName || !email || !phone || !message) {
		return { success: false, message: "Please fill out all required fields." };
	}

	try {
		const contactEmailConfig = getContactEmailConfig();
		const transporter = createSmtpTransporter();

		if (!contactEmailConfig || !transporter) {
			console.error("Missing SMTP configuration or Transporter.");
			return {
				success: false,
				message: "Server configuration error. Please try again later.",
			};
		}

		const data = {
			firstName,
			lastName,
			email,
			phone,
			service,
			message,
		};

		const html = await createContactMailHtml(data);

		await transporter.sendMail({
			from: contactEmailConfig.from,
			to: contactEmailConfig.to,
			subject: `New Consultation Request from ${firstName} ${lastName}`,
			text: createContactMailText(data),
			html,
		});

		return {
			success: true,
			message:
				"Your consultation request has been sent successfully. We'll be in touch soon!",
		};
	} catch (error) {
		console.error("Failed to send email:", error);
		return {
			success: false,
			message:
				"Failed to send your request. Please try again or contact us directly.",
		};
	}
}
