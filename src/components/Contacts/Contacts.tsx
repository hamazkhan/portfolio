import { SCContacts, SCContactsButtons, SCContactsText } from "../../styles";
import { Button } from "../../UI/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Subtitle } from "../../UI/Subtitle";

export const Contacts = () => {
  return (
    <SCContacts>
      <SCContactsText>
        <Subtitle>Get in Touch</Subtitle>
      </SCContactsText>

      <SCContactsButtons>
        <Button>
          <FaLinkedin size={50} />
        </Button>
        <Button>
          <HiOutlineMail size={50} />
        </Button>
        <Button>
          <FaGithub size={50} />
        </Button>
      </SCContactsButtons>
    </SCContacts>
  );
};
