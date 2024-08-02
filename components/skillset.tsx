import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

import SkillStat from "./skill-stat";

import js from "@/images/tech-logo/js.png";
import ts from "@/images/tech-logo/ts.png";
import py from "@/images/tech-logo/python.png";
import win from "@/images/tech-logo/windows.png";
import linux from "@/images/tech-logo/linux.png";
import tf from "@/images/tech-logo/tensorflow.png";
import keras from "@/images/tech-logo/keras.png";
import figma from "@/images/tech-logo/figma.png";
import react from "@/images/tech-logo/react.png";
import node from "@/images/tech-logo/nodejs.png";
import ex from "@/images/tech-logo/express.png";
import mongo from "@/images/tech-logo/mongodb.png";
import postgres from "@/images/tech-logo/postgresql.png";
import mysql from "@/images/tech-logo/mysql.png";
import html from "@/images/tech-logo/html.png";
import css from "@/images/tech-logo/css.png";
import nextjs from "@/images/tech-logo/nextjs.png";
import electron from "@/images/tech-logo/electron.png";
import tailwind from "@/images/tech-logo/tailwindcss.png";
import bootstrap from "@/images/tech-logo/bootstrap.png";
import vscode from "@/images/tech-logo/vscode.png";
import git from "@/images/tech-logo/git.png";
import github from "@/images/tech-logo/github.png";
import gitlab from "@/images/tech-logo/gitlab.png";
import vercel from "@/images/tech-logo/vercel.png";
import netlify from "@/images/tech-logo/netlify.png";
import wp from "@/images/tech-logo/wordpress.png";
import elementor from "@/images/tech-logo/elementor.png";
import ghost from "@/images/tech-logo/ghost.png";

const TechLogo = ({ item }: any) => {
  return (
    <Tooltip content={item.name} placement="bottom" showArrow={true}>
      <Image alt={item.name} className="w-auto h-7" src={item.logo} />
    </Tooltip>
  );
};

export default function Skillset() {
  return (
    <Card className="border p-2 sm:p-4 h-[420px]" shadow="none">
      <CardBody>
        <h3 className="font-semibold mb-6">Percentage of Expertise:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
          <SkillStat code="frontend" fieldName="Frontend" percentage={94} />
          <SkillStat code="backend" fieldName="Backend" percentage={86} />
          <SkillStat code="uiux" fieldName="UI/UX" percentage={82} />
          <SkillStat code="data" fieldName="Data Science" percentage={72} />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <Card
            className="border bg-white col-span-12 sm:col-span-4"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">
                Programming Language
              </h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.language.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-6"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">Frontend</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.frontend.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-2"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">UI/UX</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.uiux.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-4"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">Backend</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.backend.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-3"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">Tools</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.tools.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-3"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">Data Science</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.data.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
          <Card
            className="border bg-white col-span-12 sm:col-span-2"
            shadow="none"
          >
            <CardBody>
              <h3 className="font-semibold mb-2 text-black">OS</h3>
              <div className="flex gap-4 flex-wrap">
                {skillset.os.map((item) => (
                  <TechLogo key={item.name} item={item} />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}

const skillset = {
  frontend: [
    {
      logo: html,
      name: "HTML",
    },
    {
      logo: css,
      name: "CSS",
    },
    {
      logo: react,
      name: "React & React Native",
    },
    {
      logo: nextjs,
      name: "NextJS",
    },
    {
      logo: electron,
      name: "Electron",
    },
    {
      logo: tailwind,
      name: "TailwindCSS",
    },
    {
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      logo: wp,
      name: "Wordpress",
    },
    {
      logo: elementor,
      name: "Elementor",
    },
    {
      logo: ghost,
      name: "Ghost",
    },
  ],
  backend: [
    {
      logo: node,
      name: "NodeJS",
    },
    {
      logo: ex,
      name: "ExpressJS",
    },
    {
      logo: mongo,
      name: "MongoDB",
    },
    {
      logo: postgres,
      name: "PostgreSql",
    },
    {
      logo: mysql,
      name: "MySql",
    },
  ],
  language: [
    {
      logo: js,
      name: "Javascript",
    },
    {
      logo: ts,
      name: "Typescript",
    },
    {
      logo: py,
      name: "Python",
    },
  ],
  os: [
    {
      logo: win,
      name: "Windows",
    },
    {
      logo: linux,
      name: "Linux",
    },
  ],
  data: [
    {
      logo: tf,
      name: "Tensorflow",
    },
    {
      logo: keras,
      name: "Keras",
    },
  ],
  uiux: [
    {
      logo: figma,
      name: "Figma",
    },
  ],
  tools: [
    {
      logo: vscode,
      name: "VSCode",
    },
    {
      logo: git,
      name: "Git",
    },
    {
      logo: github,
      name: "Github",
    },
    {
      logo: gitlab,
      name: "Gitlab",
    },
    {
      logo: netlify,
      name: "Netlify",
    },
    {
      logo: vercel,
      name: "Vercel",
    },
  ],
};
