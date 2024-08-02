import { Chip } from "@nextui-org/chip";
import { CircularProgress } from "@nextui-org/progress";

interface ISkillStat {
  fieldName: string;
  code: string;
  percentage: number;
}

const indicatorClassName: any = {
  frontend: "stroke-black dark:stroke-white",
  backend: "stroke-black dark:stroke-white",
  data: "stroke-black dark:stroke-white",
  uiux: "stroke-black dark:stroke-white",
};

export default function SkillStat({ fieldName, percentage, code }: ISkillStat) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <CircularProgress
        classNames={{
          svg: "w-28 h-28",
          indicator: indicatorClassName[code],
          track: "stroke-black/10 dark:stroke-white/10",
          value: `text-xl font-semibold text-black dark:text-white`,
        }}
        showValueLabel={true}
        strokeWidth={3}
        value={percentage}
      />
      <Chip
        classNames={{
          base: "border-1 border-gray",
          content: `text-black/90 dark:text-white/90 text-small font-semibold`,
        }}
        variant="bordered"
      >
        {fieldName}
      </Chip>
    </div>
  );
}
