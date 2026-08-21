import "server-only";
import { render } from "@react-email/render";

import ContactFormSubmissionEmail, { type ConsultationTemplateProps } from "../templates/contact-form-submission";

export function createContactMailText(data: ConsultationTemplateProps): string {
	return [
		"New consultation request from Be Supportive",
		`Name: ${data.firstName} ${data.lastName}`,
		`Email: ${data.email || "Not provided"}`,
		`Phone: ${data.phone || "Not provided"}`,
		`Service of Interest: ${data.service || "Not specified"}`,
		"",
		"Message:",
		data.message || "No message provided",
	].join("\n");
}

export async function createContactMailHtml(
	data: ConsultationTemplateProps
): Promise<string> {
	return render(
		ContactFormSubmissionEmail({
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			phone: data.phone,
			service: data.service,
			message: data.message,
		})
	);
}
