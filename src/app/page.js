import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import About from "@/components/layout/About";
import ContactUs from "@/components/layout/ContactUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <About />
      <ContactUs />
    </>
  );
}
