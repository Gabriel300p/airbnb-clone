"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer mr-14"
      height={100}
      width={100}
      alt="Logo"
      src="/images/airbnb.svg"
    />
  );
};

export default Logo;
