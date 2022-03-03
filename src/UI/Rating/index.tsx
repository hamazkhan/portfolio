import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";

interface IRating {
  level: number;
}

export const Rating: React.FC<IRating> = ({ level }) => {
  const ratingArr: Array<JSX.Element> = [];

  for (let index = 0; index < level; index++) {
    ratingArr.push(<FaRegDotCircle />);
  }

  for (let index = 0; index < 5 - level; index++) {
    ratingArr.push(<FaRegCircle />);
  }

  return ratingArr.map((e: JSX.Element) => e);
};
