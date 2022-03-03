import { SCButton } from "./style";

interface IButton {
  glowing?: boolean;
  onClick?: () => void;
  small?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <SCButton
      glowing={props.glowing}
      onClick={props.onClick}
      small={props.small}
    >
      {props.children}
    </SCButton>
  );
};
