import { SvgIcon } from "./SvgIcon";

{
  /* <ReactStars count={5} size={24} value={3} edit={false} activeColor="#fff" />; */
}

type TStars = {
  count: number;
  value: number;
  activeColor: string;
  size?: string;
  color?: string;
  position?: "horizontal" | "vertical";
};

export const Stars: React.FC<TStars> = ({
  count,
  value,
  activeColor,
  size,
  color,
  position,
}) => {
  const activeIcons = [];

  console.log(`!w-[2xp]`, "file name : Stars line number : +-26");

  for (let index = 0; index < value; index++) {
    activeIcons.push(
      <SvgIcon
        key={index}
        className={`${activeColor} !w-4 !h-4`}
        fill="currentColor"
        path="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    );
  }

  const carnetIcons = [];

  for (let index = 0; index < count - value; index++) {
    carnetIcons.push(
      <SvgIcon
        key={index}
        className={`${color} !w-4 !h-4`}
        fill="none"
        path="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    );
  }

  return (
    <>
      {count < value ? (
        <div>
            <p className="text-red-500">cannot big a value, </p>
        </div>
      ) : (
        <div className={`${position === "horizontal" ? "flex items-center" : ""}`}>
          {activeIcons}
          {carnetIcons}
        </div>
      )}
    </>
  );
};
