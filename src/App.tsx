import "./styles.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import { Education } from "./components/Education/Education";
import { Line } from "./UI/Line";
import { AiFillHeart } from "react-icons/ai";
import { Element } from "react-scroll";

export default function App() {
  return (
    <div className="App">
      <div className="App__navigation">
        <Header />
        {/* navigation */}
      </div>
      <div className="App__content">
        <Element name="MainFC" className="element">
          <Main />
        </Element>
        <Line />
        <Element name="SkillsFC" className="element">
          <Skills />
        </Element>
        <Line />
        <Element name="ProjectsFC" className="element">
          <Projects />
        </Element>
        <Line />
        <Element name="EducationFC" className="element">
          <Education />
        </Element>
        <Line />
        <Element name="ContactsFC" className="element">
          <Contacts />
        </Element>
        <small style={{ color: "white" }}>
          Made with <AiFillHeart /> In Belarus
        </small>
        {/* content */}
      </div>
    </div>
  );
}
