import {
  SCSkills,
  SCMainSkills,
  SCLangSkills,
  SCOtherSkills,
  SCSoftSkills,
  SCToolsSkills
} from "../../styles";
import { List } from "../../UI/List";
import { Subtitle } from "../../UI/Subtitle";
import { BottomModal } from "../../UI/BottomModal";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiStyledcomponents,
  SiRedux,
  SiGit,
  SiMaterialui,
  SiWebstorm,
  SiJavascript,
  SiTypescript,
  SiJest
} from "react-icons/si";
import { FaLanguage, FaYandex, FaHandshake } from "react-icons/fa";

export const Skills = () => {
  const languages = [
    { icon: <SiHtml5 />, title: "HTML", rating: 4 },
    { icon: <SiCss3 />, title: "CSS", rating: 4 },
    { icon: <SiJavascript />, title: "Javascript", rating: 4 },
    { icon: <SiTypescript />, title: "Typescript", rating: 4 },
    { title: "1C:Enterprise 8", rating: 2 }
  ];

  const toolsFrameworksLibs = [
    { icon: <SiSass />, title: "SASS", rating: 4 },
    { icon: <FaYandex />, title: "BEM", rating: 4 },
    { icon: <SiReact />, title: "React", rating: 4 },
    { icon: <SiRedux />, title: "Redux", rating: 4 },
    { icon: <SiStyledcomponents />, title: "Styled components", rating: 4 },
    { icon: <SiMaterialui />, title: "Material UI", rating: 4 },
    { icon: <SiJest />, title: "TDD (Jest)", rating: 3 }
  ];

  const сommunicationLangs = [
    { icon: <FaLanguage />, title: "English", rating: 3 },
    { icon: <FaLanguage />, title: "Russian (native)", rating: 5 }
  ];

  const softSkills = [
    { icon: <FaHandshake />, title: "Public Speaker", rating: 4 },
    { icon: <FaHandshake />, title: "Organized", rating: 4 },
    { icon: <FaHandshake />, title: "Enthusiastic", rating: 4 },
    { icon: <FaHandshake />, title: "Avid Learner", rating: 4 },
    { icon: <FaHandshake />, title: "Mentor", rating: 4 }
  ];

  const softSkillsMoreInfo = {
    "Public Speaker": "I took an active part in organizing corporate leisure",
    Enthusiastic: "I took an active part in organizing corporate leisure",
    Mentoring:
      "1. I have mentored some of the interns at the Mining Department. 2. I prepared a number of materials for the internal technical training of employees of the Mining Department."
  };

  const languagesMoreInfo = {
    "1C:Enterprise 8": "I have a 1C: Professional certificate"
  };

  const tools = [
    { icon: <SiWebstorm />, title: "Webstorm", rating: 4 },
    { icon: <SiGit />, title: "Git", rating: 3 }
  ];

  return (
    <SCSkills>
      <SCMainSkills>
        <Subtitle>Frameworks + Libraries</Subtitle>
        <List skills={toolsFrameworksLibs} />
      </SCMainSkills>
      <SCLangSkills>
        <Subtitle>Languages</Subtitle>
        <List skills={languages} skillsMoreInfo={languagesMoreInfo} />
      </SCLangSkills>
      <SCOtherSkills>
        <Subtitle>Communication languages</Subtitle>
        <List skills={сommunicationLangs} />
      </SCOtherSkills>
      <SCSoftSkills>
        <Subtitle>Soft Skills</Subtitle>
        <List skills={softSkills} skillsMoreInfo={softSkillsMoreInfo} />
      </SCSoftSkills>
      <SCToolsSkills>
        <Subtitle>Tools</Subtitle>
        <List skills={tools} />
      </SCToolsSkills>
    </SCSkills>
  );
};
