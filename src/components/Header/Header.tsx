import { SCHeader } from "../../styles";
import { Subtitle } from "../../UI/Subtitle";
import { Navbar } from "../../UI/Navbar";
import { RiFontColor, RiBold } from "react-icons/ri";

export const Header = () => {
  const navbarArray = [
    { title: "Skills" },
    { title: "Projects" },
    { title: "Education" },
    { title: "Contacts" }
  ];

  return (
    <SCHeader>
      <Navbar navContent={navbarArray} />
    </SCHeader>
  );
};
