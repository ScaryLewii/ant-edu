import "~/styles/globals.css";

import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import MainNav from "./_components/navigation";
import Footer from "./_components/footer/footer";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ant edu",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-600 text-white">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainNav />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
