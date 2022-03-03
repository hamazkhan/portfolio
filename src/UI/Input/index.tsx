import { SCInput, SCWrapper } from "./style";

interface IInput {
  url?: string;
}

export const Input: React.FC<IInput> = ({ url }) => {
  return (
    <SCWrapper>
      <SCInput placeholder="Name" id="name" required />
    </SCWrapper>
  );
};
