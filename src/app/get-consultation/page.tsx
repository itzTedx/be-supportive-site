import type { Metadata } from "next";

import { GetConsultationView } from "@/features/get-consultation/get-consultation-view";

export const metadata: Metadata = {
	title: "Get a Free Consultation | Be Supportive",
	description:
		"Book a free consultation with our business setup experts in the UAE.",
};

export default function GetConsultationPage() {
	return <GetConsultationView />;
}
