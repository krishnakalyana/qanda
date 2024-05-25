import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Intro from "./_homeComponents/Intro";
import TrendingQuestions from "./_homeComponents/TrendingQuestions";

export default function Home() {
  const words = [
    {
      text: "Got",
    },
    {
      text: "a ",
    },
   {text:"    "},
    {
      text: "  Question ?",
      className: "text-primary tracking-[1rem]",
    },
  ];
  return (
 <main className=" h-full grid grid-cols-2 items-center"> 
 <div>
  <TypewriterEffect words={words} className=""/>
  <Intro/>
 </div>
  <TrendingQuestions/>
 </main>
  );
}
