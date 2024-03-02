export type TImage = {
  alt?: string;
  imgSrc: string;
  className: string;
};

const Image = ({ imgSrc, className, alt }: TImage) => {
  return <img className={className} src={imgSrc} alt={alt} />;
};

export default Image;
