type TSvgIcon = {
  className: string;
  path: string;
};

export const SvgIcon = ({ className, path }: TSvgIcon) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </>
  );
};
