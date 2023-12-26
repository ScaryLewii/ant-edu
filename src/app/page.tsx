import homeHeroBackground from "public/background/main-bg.jpg"
import homeAboutBackground from "public/background/about-bg.jpg";
import Certificate from "./home/certificate/certificate";
import Schedule from "./home/schedule/schedule";
import News from "./home/news/news";
import Partner from "./home/partner/partner";
import Block from "./_components/layout/block";
import Slider from "./home/slider";

export default function Home() {

  return (
    <main>
      <Block backgroundSrc={homeHeroBackground}>
        <div className="container flex flex-col items-center justify-center gap-8 text-center mx-auto">
          <h1 className="text-[26px] max-w-[80%] xl:text-[65px] font-bold text-glow">Trung tâm Khảo thí Ant Edu</h1>
          <i className="xl:text-[26px] max-w-[90%]">Một nút nhấn cho ngàn mục tiêu</i>
        </div>
      </Block>

      <Block id="about" backgroundSrc={homeAboutBackground} childrenClassName="container xl:h-screen px-3 flex flex-col xl:flex-row justify-center items-end z-20 h-full pb-[80px] gap-[120px]">
        <>
          <div className="xl:w-[40%] flex-initial">
            <h1 className="text-[48px] font-bold text-glow">Về chúng tôi</h1>
            <div className="mt-[30px]">
            <span className="font-bold text-cyan italic">Ant Edu</span> là hệ thống giáo dục đào tạo trực tuyến thuộc Ant Group. Với sự đầu tư lớn vào công nghệ và đội ngũ nhân sự chất lượng cao, giàu kinh nghiệm; Ant Edu là đơn vị tiên phong trong việc cá nhân hóa lộ trình của người học dựa trên nền tảng công nghệ.
            </div>

            <div className="mt-[30px]">
            <span className="font-bold text-cyan italic">Trung tâm khảo thí AI BOOSTED ENGLISH</span> là một trong những thành viên thuộc hệ sinh thái Ant Edu, chuyên trách về kiểm tra, đánh giá kết quả giáo dục đối với người học, thông qua một quy trình chặt chẽ nhằm đo lường mức độ đạt được của người học về kiến thức, kỹ năng, thái độ hay năng lực ngoại ngữ.
            </div>
          </div>

          <Slider />
        </>
      </Block>

      <Certificate />

      <Schedule />

      <News />

      <Partner />
    </main>
  );
}