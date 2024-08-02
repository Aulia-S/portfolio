import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function ProjectCard({ project }: any) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={project.image.src}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-lg text-white/90">{project.title}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {project.github ? (
            Array.isArray(project.github) ? (
              <Dropdown classNames={{ content: "min-w-fit" }}>
                <DropdownTrigger>
                  <Button
                    className="text-white hover:text-black dark:hover:text-white"
                    radius="full"
                    size="sm"
                    variant="ghost"
                  >
                    Code
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {project.github.map((github: any) => (
                    <DropdownItem
                      key={github.name}
                      as={Link}
                      className="text-black dark:text-white border-none"
                      href={github.github}
                      target="_blank"
                    >
                      {github.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                as={Link}
                className="text-white hover:text-black dark:hover:text-white"
                href={project.github}
                radius="full"
                size="sm"
                target="_blank"
                variant="ghost"
              >
                Code
              </Button>
            )
          ) : null}
          {project.url && (
            <Button
              as={Link}
              href={project.url}
              radius="full"
              size="sm"
              target="_blank"
            >
              View
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
