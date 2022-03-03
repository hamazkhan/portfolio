import { useState } from "react";
import * as style from "./style";
import { FaExclamation } from "react-icons/fa";
import { Button } from "../../UI/Button";

interface IBottomModal {
  title?: string;
}

export const BottomModal: React.FC<IBottomModal> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button glowing small onClick={openModalHandler}>
        <FaExclamation />
      </Button>
      <style.SCBottomModal show={showModal}>
        <style.SCBottomModalContent>
          <style.SCBottomModalBody>
            <style.SCBottomModalHeader>
              {props.title}
              <style.SCBottomModalButton onClick={closeModalHandler}>
                Close
              </style.SCBottomModalButton>
            </style.SCBottomModalHeader>
            <style.SCBottomModalBody>{props.children}</style.SCBottomModalBody>
            <style.SCBottomModalFooter></style.SCBottomModalFooter>
          </style.SCBottomModalBody>
        </style.SCBottomModalContent>
      </style.SCBottomModal>
    </>
  );
};
