const Card = ({ children }) => {
  return (
    <div className="bg-neutral-surface flex flex-col rounded-3xl">
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="bg-neutral-header rounded-t-3xl leadind-[120%] text-xl font-bold text-center text-neutral-text p-4">
      {children}
    </div>
  );
};

const CardBody = ({ children }) => {
  return (
    <div className="py-6 px-4 flex flex-col grow justify-center">
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
