import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

import AboutIllus from "@/images/about-illustration.svg";

export default function About() {
  return (
    <Card className="border p-2 sm:p-4 h-[420px]" shadow="none">
      <CardBody>
        <p className="indent-10 leading-relaxed">
          &quot;A Versatile Javascript Programmer. Graduated from UIN Ar-Raniry
          Banda Aceh Majoring in Information Technology and interest in Mobile
          and Web System. Have experience in programming field since 2019.
          Proficiency in used Javascript as a tool to build modern and
          cross-platform app to increase user experience. Besides that, i have
          some experience in data science especially deep learning with Python
          and love to use Figma for design and prototyping.&quot;
        </p>
        <Image
          alt="about illustration"
          className="w-3/5 ml-auto mt-10"
          src={AboutIllus}
        />
      </CardBody>
    </Card>
  );
}
