import { SCCardWrapper, SCCard, SCCardIMG, SCCardText } from "./style";

interface ICard {
  fullSize?: boolean;
  url?: string;
}

export const Card: React.FC<ICard> = (props) => {
  return <SCCard fullSize={props.fullSize}>{props.children}</SCCard>;
};
