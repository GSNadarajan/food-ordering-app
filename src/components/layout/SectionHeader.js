export default function SectionHeader({subHeader, mainHeader}) {
  return (
    <>
      <div className="text-center">
        <h3 className="text-gray-500 uppercase font-semibold leading-4">
          {subHeader}
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
      </div>
    </>
  );
}
