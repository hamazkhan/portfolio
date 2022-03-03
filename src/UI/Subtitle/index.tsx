import { SCSubtitle, SCSubtitleNavbar } from "./style";

export const Subtitle: React.FC = ({ children }) => {
  return <SCSubtitle>{children}</SCSubtitle>;
};

export const SubtitleNavbar: React.FC = ({ children }) => {
  return <SCSubtitleNavbar>{children}</SCSubtitleNavbar>;
};
