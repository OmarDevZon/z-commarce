/* eslint-disable @typescript-eslint/no-explicit-any */
type TSecondaryBtn = {
  children: any;
  className?: string;
};

export const SecondaryBtn: React.FC<TSecondaryBtn> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`border focus:bg-orange-500 py-1 px-2 focus:text-white bg-[#fff] ${className}`}
    >
      {children}
    </button>
  );
};
