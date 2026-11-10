export const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full bg-neutral-darker rounded-lg h-10 overflow-hidden">
      <div
        className="bg-primary-highlight h-full flex items-center justify-center text-neutral-darker text-base leading-[120%] transition-[width] duration-300 ease-in-out"
        style={{
          width: `${percent}%`,
        }}
      >
        {percent}%
      </div>
    </div>
  );
};
