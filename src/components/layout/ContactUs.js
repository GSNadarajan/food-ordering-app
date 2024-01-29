import SectionHeader from "./SectionHeader";

export default function ContactUs() {
  return (
    <>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />

        <div className="mt-8">
          <a className="text-4xl mt-8" href="tel:+91 8645424345">
            +91 8645424345
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
