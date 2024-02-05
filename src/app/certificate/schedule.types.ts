export interface ISchedule {
	title: string,
	description: string | null,
	summary: string | null,
	startAt: string,
	endAt: string,
	duration: number,
	status: "SCHEDULED",
	thumbnail: string | null,
	maxParticipants: number,
	examinationType: "Online" | "Offline",
	certificateType: "IELTS" | "PTE" | "CEFR",
	address: string | null,
	price: number,
	currency: "VND" | "USD",
	isActive: boolean,
	examinationRegisters: number
}