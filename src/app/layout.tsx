import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/footer/footer";
import MainNav from "./_components/navigation/navigation";
import GTM from "./_components/third-party/gtm";
import Zalo from "./_components/third-party/zalo";

const svn = localFont({
  src: [
    {
      path: '../../public/font/SVN-Arsilon.otf',
      weight: '400'
    }    
  ],
  variable: '--font-svn'
})

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Trung tâm khảo thí AI Boosted English",
  description: "Trung tâm khảo thí AI BOOSTED ENGLISH là một trong những thành viên thuộc hệ sinh thái Ant Edu, chuyên trách về kiểm tra, đánh giá kết quả giáo dục đối với người học, thông qua một quy trình chặt chẽ nhằm đo lường mức độ đạt được của người học về kiến thức, kỹ năng, thái độ hay năng lực ngoại ngữ.",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-600 text-white">
      <body className={`font-sans ${svn.variable} ${inter.variable}`}>
        <GTM />
        <TRPCReactProvider cookies={cookies().toString()}>
            <MainNav />
            {children}
            <Footer />
        </TRPCReactProvider>
        <Zalo />
      </body>
    </html>
  );
}
