import { IconSavings } from "../Icons";
import { ProgressBar } from "../ProgressBar";

export const SavingsStatus = ({ percent }) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="m-0 flex items-center text-xl leading-[125%] text-center text-secondary-income gap-2 justify-center">
        <IconSavings /> Economizar
      </p>
      <ProgressBar percent={percent} />
    </div>
  );
};
