import { SCImage } from "./style";

interface IImage {
  url: string;
}

export const Image: React.FC<IImage> = ({ url }) => {
  return (
    <>
      <SCImage src={url} alt="orange" />
    </>
  );
};
