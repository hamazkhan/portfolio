import * as style from "./style";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "../Button";

type elemType = { title: string; scrollToTop: boolean };

interface INavbar {
  navContent: elemType[];
}

export const Navbar: React.FC<INavbar> = ({ navContent }) => {
  const [visibility, setvisibility] = useState(true);

  const navContentMap = () => {
    return navContent.map((e: elemType) => {
      return (
        <Link
          activeClass="active"
          className={`${e.title}FC`}
          to={`${e.title}FC`}
          spy={true}
          smooth={true}
          duration={500}
        >
          <style.NavElement>{e.title}</style.NavElement>
        </Link>
      );
    });
  };

  const clickhandler = () => {
    setvisibility(!visibility);
  };

  const MainButton = () => {
    return (
      <Link
        activeClass="active"
        className={"MainFC"}
        to={"MainFC"}
        spy={true}
        smooth={true}
        duration={500}
      >
        <Button glowing={true}>Main</Button>
      </Link>
    );
  };

  return (
    <style.SCNavbar>
      <style.SCBtnsWrapper visibility={visibility}>
        {navContentMap()}
      </style.SCBtnsWrapper>
      <style.SCMainWrapper>
        <MainButton />
        <style.SCMenuBtnWrapper onClick={clickhandler}>
          {visibility ? <ImMenu4 /> : <ImMenu3 />}
        </style.SCMenuBtnWrapper>
      </style.SCMainWrapper>
    </style.SCNavbar>
  );
};
