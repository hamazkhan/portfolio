import { SCCardWrapper, SCCard, SCCardIMG, SCCardText } from "./style";
import { Line } from "../Line";

interface ICardIMG {
  imgURL?: string;
  cardTitle: string;
  cardText: string;
  projectURL?: string;
}

export const CardIMG: React.FC<ICardIMG> = (props) => {
  return (
    <SCCardWrapper>
      <SCCard>
        <SCCardIMG></SCCardIMG>
        <SCCardText>
          {props.cardTitle}
          <br />
          {props.cardText}
        </SCCardText>
      </SCCard>
    </SCCardWrapper>
  );
};
