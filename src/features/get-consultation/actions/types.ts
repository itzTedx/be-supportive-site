export type EmailSmtpConfig = {
	host: string;
	port: number;
	secure: boolean;
	user: string;
	pass: string;
};

export type ContactEmailConfig = {
	from: string;
	to: string;
};

export type ConsultationFormState = {
	success?: boolean;
	message?: string;
	errors?: {
		firstName?: string[];
		lastName?: string[];
		email?: string[];
		phone?: string[];
		service?: string[];
		message?: string[];
	};
};
