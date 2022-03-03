import {
  SCMain,
  SCMainButtons,
  SCMainPhoto,
  SCMainText,
  SCMainQR
} from "../../styles";
import { Image } from "../../UI/Image";
import { Title } from "../../UI/Title";
import { Subtitle } from "../../UI/Subtitle";
import { TextContext } from "../../UI/TextContext";
import { Button } from "../../UI/Button";
import { FaLinkedin, FaGithub, FaRegFilePdf } from "react-icons/fa";
import { Card } from "../../UI/Card";
import qrCodeLI from "../../img/qrli.png";
import qrCodePDF from "../../img/qrpdf.png";

export const Main = () => {
  const URL =
    "https://img.freepik.com/free-photo/handsome-young-businessman-in-shirt-and-eyeglasses_85574-6228.jpg?size=626&ext=jpg&ga=GA1.2.1377421482.1624924800";
  return (
    <SCMain>
      <SCMainText>
        <Subtitle>Hi,</Subtitle>
        <Title>I'am Artiom Borisov,</Title>
        <Subtitle>web developer</Subtitle>
        <TextContext>Frontend developer / React developer</TextContext>
        <Card>
          <Subtitle>Objective:</Subtitle>
          <TextContext>
            Self driven junior frontend developer with a desire to acquire new
            knowledge and apply it as a software engineer.
          </TextContext>
        </Card>
      </SCMainText>
      <SCMainButtons>
        <Button>
          <FaGithub /> Github
        </Button>
        <Button glowing>
          <FaLinkedin />
          Hire me!
        </Button>
        <Button>
          <FaRegFilePdf />
          Get CV (.pdf)
        </Button>
      </SCMainButtons>
      <SCMainPhoto>
        <Image url={URL} />
      </SCMainPhoto>
      <SCMainQR>
        <Image url={qrCodeLI} />
        <Image url={qrCodePDF} />
      </SCMainQR>
    </SCMain>
  );
};
