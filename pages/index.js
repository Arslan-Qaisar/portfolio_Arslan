import Nav from "./(components)/Nav/page";
import Sec1 from "./(components)/Sec1/page";
import About from "./(components)/About/page";
import Skills from "./(components)/Skills/page";
import Contact from "./(components)/Contact/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Nav/>
    <Sec1/>
    <About/>
    <Skills/>
    <Contact/>
    </>
  );
}
