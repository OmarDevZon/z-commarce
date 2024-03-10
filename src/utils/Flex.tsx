/* eslint-disable @typescript-eslint/no-explicit-any */
type TFlex = {
    children: any;
    className? : string;
}

export const Flex: React.FC<TFlex> = ({ children, className }) => {
  return (
    <>
      <div className={`flex justify-between items-center ${className}`}> {children}</div>
    </>
  );
};
