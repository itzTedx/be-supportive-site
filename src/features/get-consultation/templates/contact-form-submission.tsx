import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

export type ConsultationTemplateProps = {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	service?: string;
	message?: string;
};

// Form theme: Dark elegant theme matching the consultation form overlay
const tailwindConfig = {
	theme: {
		extend: {
			colors: {
				background: "#FAF8F5", // The website's light background color (used as text here)
				brand: "#E5C27A", // Gold primary
				"brand-muted": "rgba(229, 194, 122, 0.2)",
				surface: "#111111", // Dark card surface
				"surface-inset": "#1A1A1A", // Slightly lighter inset
				border: "rgba(250, 248, 245, 0.1)", // Light border
				muted: "rgba(250, 248, 245, 0.7)",
				"muted-foreground": "rgba(250, 248, 245, 0.5)",
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					"sans-serif",
				],
				display: [
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					"sans-serif",
				],
			},
		},
	},
};

const ContactFormSubmissionEmail = (props: ConsultationTemplateProps) => {
	return (
		<Html dir="ltr" lang="en">
			<Tailwind config={tailwindConfig}>
				<Head />
				<Preview>
					{`New consultation request from ${[props.firstName, props.lastName].filter(Boolean).join(" ")}`}
				</Preview>
				<Body className="bg-[#3B2E21] py-[60px] font-sans">
					<Container className="mx-auto max-w-[600px] rounded-[16px] border border-border border-solid bg-black/20 px-[40px] py-[48px] shadow-2xl">
						{/* Header with Logo */}
						<Section className="mb-[40px] text-left">
							<Link className="inline-block" href="https://besupportive.ae">
								<Img
									alt="Be Supportive"
									height="48"
									src="https://besupportive.ae/svg/logo.svg"
									style={{
										color: "#FAF8F5",
										fontSize: "14px",
										fontWeight: "bold",
									}}
									width="58"
								/>
							</Link>
						</Section>

						{/* Main Content */}
						<Section>
							<Heading className="mb-[12px] text-center font-display font-medium text-[28px] text-background tracking-tight">
								New Consultation Request
							</Heading>
							<Text className="mb-[40px] text-center text-[16px] text-muted leading-[26px]">
								A potential client has reached out through your website. Here
								are their details:
							</Text>

							{/* Contact Details */}
							<Section className="mb-[40px] rounded-[12px] border border-border border-solid bg-black/20 p-[32px]">
								<Text className="m-0 mb-[8px] font-bold text-[12px] text-brand uppercase tracking-wider">
									Client Name
								</Text>
								<Text className="m-0 mb-[28px] font-medium text-[18px] text-background">
									{props.firstName} {props.lastName}
								</Text>

								<Text className="m-0 mb-[8px] font-bold text-[12px] text-brand uppercase tracking-wider">
									Email Address
								</Text>
								<Text className="m-0 mb-[28px] font-medium text-[18px] text-background">
									{props.email ? (
										<Link
											className="text-background underline decoration-2 decoration-brand underline-offset-4"
											href={`mailto:${props.email}`}
										>
											{props.email}
										</Link>
									) : (
										"Not provided"
									)}
								</Text>

								<Text className="m-0 mb-[8px] font-bold text-[12px] text-brand uppercase tracking-wider">
									Phone Number
								</Text>
								<Text className="m-0 mb-[28px] font-medium text-[18px] text-background">
									{props.phone ? (
										<Link
											className="text-background underline decoration-2 decoration-brand underline-offset-4"
											href={`tel:${props.phone}`}
										>
											{props.phone}
										</Link>
									) : (
										"Not provided"
									)}
								</Text>

								<Text className="m-0 mb-[8px] font-bold text-[12px] text-brand uppercase tracking-wider">
									Service of Interest
								</Text>
								<Text className="m-0 mb-[28px] font-medium text-[18px] text-background">
									{props.service || "Not specified"}
								</Text>

								<Text className="m-0 mb-[8px] font-bold text-[12px] text-brand uppercase tracking-wider">
									Message
								</Text>
								<Text className="m-0 whitespace-pre-wrap font-medium text-[16px] text-background leading-[26px]">
									{props.message || "Not provided"}
								</Text>
							</Section>

							<Hr className="mx-0 my-[32px] border-border border-solid" />

							<Text className="text-center text-[14px] text-muted-foreground leading-[24px]">
								This email was sent automatically from your Be Supportive
								website.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormSubmissionEmail;
