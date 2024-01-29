import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section className="mt-10">
      <div className="absolute left-0 right-0 w-full justify-start ">
        <div className="absolute -top-[20px] text-left  -z-20">
          <Image src={"/salad1.png"} width={200} height={200} alt={"sallad"} />
        </div>
        <div className=" absolute -top-12 right-2 -z-20">
          <Image src={"/salad2.jpeg"} width={200} height={200} alt={"sallad"} />
        </div>
      </div>

      <SectionHeader subHeader={"Check out"} mainHeader={"Menu"} />

      <div className="grid grid-cols-3 gap-8 mt-7">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
