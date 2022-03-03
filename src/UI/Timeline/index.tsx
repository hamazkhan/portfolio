import { Subtitle } from "../Subtitle";
import { TextContext } from "../TextContext";
import {
  SC_RGBRight,
  SC_BlackRight,
  SC_RGBLeft,
  SC_BlackLeft,
  SC_TextRight,
  SC_TextLeft,
  SC_Timeline,
  SC_Test
} from "./style";

interface ITimeline {
  timelineArray: timelineObjType[];
  timelineTitle: string;
}

export const Timeline: React.FC<ITimeline> = (props) => {
  const TimelineRender = () => {
    return props.timelineArray.map((e, index) => (
      <>
        {index % 2 !== 0 ? (
          <SC_RGBLeft>
            <SC_BlackLeft>
              <Subtitle>{e.period}</Subtitle>
              <SC_TextLeft>
                <TextContext>{e.place}</TextContext>
                <TextContext>{e.degree}</TextContext>
                <TextContext>{e.info}</TextContext>
              </SC_TextLeft>
            </SC_BlackLeft>
          </SC_RGBLeft>
        ) : (
          <SC_RGBRight>
            <SC_BlackRight>
              <SC_TextRight>
                <TextContext>{e.place}</TextContext>
                <TextContext>{e.degree}</TextContext>
                <TextContext>{e.info}</TextContext>
              </SC_TextRight>
              <Subtitle>{e.period}</Subtitle>
            </SC_BlackRight>
          </SC_RGBRight>
        )}
      </>
    ));
  };
  return (
    <SC_Timeline>
      <Subtitle>{props.timelineTitle}</Subtitle>
      <SC_Test>{TimelineRender()}</SC_Test>
    </SC_Timeline>
  );
};
