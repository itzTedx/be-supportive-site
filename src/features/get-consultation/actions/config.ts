import "server-only";
import type { ContactEmailConfig, EmailSmtpConfig } from "./types";

export function getEmailSmtpConfig(): EmailSmtpConfig | null {
	const host = process.env.SMTP_HOST;
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	if (!host || !user || !pass) return null;
	return {
		host,
		port: Number(process.env.SMTP_PORT ?? 587),
		secure: process.env.SMTP_SECURE === "true",
		user,
		pass,
	};
}

export function getContactEmailConfig(): ContactEmailConfig | null {
	const from = process.env.SMTP_FROM;
	const to = process.env.SMTP_TO;
	if (!from || !to) return null;
	return { from, to };
}
