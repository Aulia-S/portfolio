import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import ServiceCard from "./service-card";

import feIllus from "@/images/frontend.svg";
import beIllus from "@/images/backend.svg";
import uiIllus from "@/images/uiux.svg";

export default function Services() {
  return (
    <Card className="border p-2 sm:p-4 h-[420px]" shadow="none">
      <CardBody className="flex flex-col gap-14 sm:justify-center items-center">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-5">
          <ServiceCard image={feIllus} title="Frontend Development" />
          <ServiceCard image={beIllus} title="Backend Development" />
          <ServiceCard image={uiIllus} title="UI/UX Design" />
        </div>
        <div className="mb-10 sm:mb-0">
          <Button
            aria-label="Send Message"
            as={Link}
            className="font-semibold bg-black text-white w-fit"
            href="mailto:auliasabri43@gmail.com"
            size="lg"
          >
            What&apos;s Your Idea?
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
