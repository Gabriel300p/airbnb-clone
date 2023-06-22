"use client";

import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-light text-neutral-500">{subtitle}</p>
    </div>
  );
};

export default Heading;
