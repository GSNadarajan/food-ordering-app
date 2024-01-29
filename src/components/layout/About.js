import SectionHeader from "@/components/layout/SectionHeader";

export default function About() {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-4xl mx-auto  mt-8 flex flex-col gap-4 ">
          <p>
            Experience the artistry of handcrafted pizzas made with love and the
            finest ingredients. Founded in [Year], we're more than a restaurant
            - we're a community that values great food, sustainability, and
            unforgettable moments. Join us on this pizza adventure!
          </p>
          <p>
            Experience the artistry of handcrafted pizzas made with love and the
            finest ingredients. Founded in [Year], we're more than a restaurant
            - we're a community that values great food, sustainability, and
            unforgettable moments. Join us on this pizza adventure!
          </p>
        </div>
      </section>
    </>
  );
}
