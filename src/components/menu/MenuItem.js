import Image from 'next/image';

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4  rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
    <div className="text-center ">
    {/* <img src="/menu1.png" alt="pizza" className="max-h-auto max-h-40 block mx-auto" /> */}
    <Image src="/menu1.png" alt="pizza" width={200} height={200} className="max-h-auto w-full block mx-auto" />
    

    </div>
   
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm  mt-3">
        Pepperoni pizza is a classic favorite, featuring a thin or thick crust
        topped{" "}
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 font-bold mt-3">
        Add to cart $12
      </button>
    </div>
  );
}
