export const Button = ({ title }: { title: string }) => {
  return (
    <button className=" text-black bg-orange-500 rounded-2xl w-40 h-10 flex justify-center items-center">
      {title}
    </button>
  );
};

type TOutLineButton = {
  className?: string;
  title: string;
};
export const OutLineButton = ({ title, className }: TOutLineButton) => {
  return (
    <button
      className={` text-black border rounded-md py-1 px-4 flex justify-center items-center ${className}`}
    >
      {title}
    </button>
  );
};
