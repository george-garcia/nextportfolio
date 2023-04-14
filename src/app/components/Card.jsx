import Image from "next/image";

function Card({ image, title, description, tools }) {
  return (
    <div className="flex flex-col items-center  shadow-lg p-10 rounded-xl my-10">
      <Image src={image} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">
        Creating elegant designs suited for your needs following core design
        theory.
      </p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  );
}

export default Card;
