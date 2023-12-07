import Image from "next/image";
import HomeBackground from "public/background/main-bg.jpg"
import About from "./home/about/about";
import Certificate from "./home/certificate/certificate";
import Schedule from "./home/schedule/schedule";
import News from "./home/news/news";
import Partner from "./home/partner/partner";

export default function Home() {

  return (
    <main>
      <section className="flex h-screen overflow-hidden flex-col items-center justify-center relative">
        <Image src={HomeBackground} width={1920} height={1080} alt="home background"
          className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="container flex flex-col items-center justify-center gap-8 z-20 text-center">
          <h1 className="text-[26px] max-w-[80%] xl:text-[65px] font-bold text-glow">Trung tâm Khảo thí Ant Edu</h1>
          <i className="xl:text-[26px] max-w-[90%]">Một nút nhấn cho ngàn mục tiêu</i>
        </div>
      </section>

      <About />

      <Certificate />

      <Schedule />

      <News />

      <Partner />
    </main>
  );
}