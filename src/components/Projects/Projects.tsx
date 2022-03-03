import { SCProjects } from "../../styles";
import { Button } from "../../UI/Button";
import { TextContext } from "../../UI/TextContext";
import { Card } from "../../UI/Card";
import { Subtitle } from "../../UI/Subtitle";
import { Image } from "../../UI/Image";
import { v1 as uuidv1 } from "uuid";
import { CardIMG } from "../../UI/CardIMG";

export const Projects = () => {
  const c1 = (
    <>
      <Card>
        <Subtitle>QR code generator</Subtitle>
        <Image
          url={
            "https://cdn.pixabay.com/photo/2019/02/02/14/27/qr-code-3970681_960_720.jpg"
          }
        />
        <TextContext>Simple QR code generator.</TextContext>

        <a href="https://www.google.by/">
          <Button>More</Button>
        </a>
      </Card>

      <Card>
        <Subtitle>Recipe Book App</Subtitle>
        <Image
          url={
            "https://cdn.pixabay.com/photo/2021/04/30/15/52/baking-6219238_960_720.jpg"
          }
        />
        <TextContext>Recipe Book App</TextContext>

        <a href="https://www.google.by/">
          <Button>More</Button>
        </a>
      </Card>
    </>
  );
  const c2 = (
    <>
      <Card>
        <Subtitle>21</Subtitle>
        <TextContext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
          pariatur aliquam porro dolor, dolorem odio, voluptatum, veritatis ad
          in qui corporis optio? Tempora obcaecati iusto doloribus inventore,
          voluptatibus voluptatem.
        </TextContext>
      </Card>
      <Card>
        <Subtitle>22</Subtitle>
        <TextContext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
          pariatur aliquam porro dolor, dolorem odio, voluptatum, veritatis ad
          in qui corporis optio? Tempora obcaecati iusto doloribus inventore,
          voluptatibus voluptatem.
        </TextContext>
      </Card>
      <Card>
        <Subtitle>23</Subtitle>
        <TextContext>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
          pariatur aliquam porro dolor, dolorem odio, voluptatum, veritatis ad
          in qui corporis optio? Tempora obcaecati iusto doloribus inventore,
          voluptatibus voluptatem.
        </TextContext>
      </Card>
    </>
  );

  const projectsArray = [
    {
      id: uuidv1(),
      title: "Projects",
      project: c1
    },
    {
      id: uuidv1(),
      title: "Selfeducation Projects",
      project: c2
    }
  ];

  const test = {
    imgURL: "string",
    cardTitle: "cardTitle",
    cardText: "cardText",
    projectURL: "string"
  };

  return (
    <SCProjects>
      {/* <Collapse contentArray={projectsArray} /> */}
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
      <CardIMG cardTitle={"cardTitle"} cardText={"cardText"} />
    </SCProjects>
  );
};
