import Image from "next/image";

export default function ServiceCard({ image, title }: any) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image alt={title} className="h-[100px]" src={image} />
      <h2 className="font-semibold text-center">{title}</h2>
    </div>
  );
}
