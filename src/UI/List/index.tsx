import * as SCList from "./style";
import { Rating } from "../Rating";
import { BottomModal } from "../../UI/BottomModal";

type elemType = {
  icon?: JSX.Element | string;
  rating?: number;
  title: string;
};

interface IList {
  skills: elemType[];
  skillsMoreInfo?: {
    "Public Speaker": string;
    Enthusiastic: string;
    Mentoring: string;
  };
}

export const List: React.FC<IList> = (props) => {
  const getInfo = (title: string) => {
    if (props.skillsMoreInfo !== undefined) {
      if (props.skillsMoreInfo[title] !== undefined) {
        return (
          <>
            <BottomModal title={title}>
              {props.skillsMoreInfo[title]}
            </BottomModal>
          </>
        );
      }
    }
  };

  const skillsMap = () => {
    return props.skills.map((e: elemType) => (
      <SCList.ListElem>
        <SCList.ListIcon>{e.icon}</SCList.ListIcon>
        <SCList.ListText>
          {e.title}
          {getInfo(e.title)}
        </SCList.ListText>
        <SCList.ListRating>
          {e.rating !== undefined ? <Rating level={e.rating} /> : null}
        </SCList.ListRating>
      </SCList.ListElem>
    ));
  };

  return <SCList.ListWrapper>{skillsMap()}</SCList.ListWrapper>;
};
