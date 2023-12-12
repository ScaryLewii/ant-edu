import Image from "next/image";
import Background from "public/background/schedule.jpg";
import Schedule from "~/app/certificate/pte/schedule";


export default function SchedulePTE() {
	return (
		<main className="flex h-screen overflow-hidden flex-col items-center justify-center">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<Schedule />
		</main>
	);
}