export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-transparent border border-solid border-neutral-text text-neutral-text py-3 px-6 flex items-center justify-center cursor-pointer gap-2 rounded-3xl text-4 leading-[120%]"
    >
      {children}
    </button>
  );
};
