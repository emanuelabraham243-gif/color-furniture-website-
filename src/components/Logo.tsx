import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.jpg"
      alt="Color Furniture"
      width={144}
      height={144}
      priority
      className="h-10 w-10 shrink-0 rounded-lg object-cover"
    />
  );
}
