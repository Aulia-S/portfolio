"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import Profile from "@/components/profile";
import About from "@/components/about";
import Skillset from "@/components/skillset";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  const [selected, setSelected] = useState("about");

  return (
    <Card className="border">
      <CardHeader className="flex justify-end relative">
        <div className="z-10 border-t-[26px] border-r-[30px] border-t-black dark:border-t-white border-r-transparent block w-3/5 absolute left-0 top-0" />
        <div className="border-t-[26px] border-r-[30px] border-t-gray-500 border-r-transparent block w-3/5 absolute left-4 -top-1" />
        <ThemeSwitch />
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <Profile />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex w-full flex-col">
              <Tabs
                aria-label="Options"
                classNames={{ tabList: "bg-transparent" }}
                selectedKey={selected}
                size="lg"
                onSelectionChange={(key) => setSelected(key as string)}
              >
                <Tab key="about" title="About Me">
                  <About />
                </Tab>
                <Tab key="skillset" title="Skillset">
                  <Skillset />
                </Tab>
                <Tab key="experience" title="Experiences">
                  <Experiences />
                </Tab>
                <Tab key="projects" title="Projects">
                  <Projects />
                </Tab>
                <Tab key="services" title="Services">
                  <Services />
                </Tab>
                <Tab key="contact" title="Let's Connect">
                  <Contact />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-end relative">
        <p className="lg:hidden text-center text-sm font-light w-full">
          Created by Aulia Sabri
        </p>
        <div className="z-10 border-b-[26px] border-l-[30px] border-b-black dark:border-b-white border-l-transparent block w-1/5 absolute right-0 bottom-0" />
        <div className="border-b-[26px] border-l-[30px] border-b-gray-500 border-l-transparent block w-1/5 absolute right-4 -bottom-1" />
      </CardFooter>
    </Card>
  );
}
