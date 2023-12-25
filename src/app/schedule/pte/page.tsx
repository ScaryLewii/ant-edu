import Image from "next/image";
import Background from "public/background/schedule.jpg";
import Block from "~/app/_components/layout/block";
import Guidance from "~/app/certificate/pte/guidance";
import Schedule from "~/app/certificate/pte/schedule";


export default function SchedulePTE() {
	return (
		<Block backgroundSrc={Background}>
			<Schedule />
			<Guidance />
		</Block>
	);
}