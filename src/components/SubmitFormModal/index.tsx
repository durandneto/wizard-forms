/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { useContext, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { submitForm } from "../../actions/medicare";
import { AppContext } from "../../context/App.Contex";

const SubmitFormModal = (props: any) => {
  const { ContextData, APPError } = useContext(AppContext);

  console.log("SubmitFormModal", { APPError });
  return (
    <Modal isOpen={props.isOpen} size="lg">
      <ModalHeader>Form Sync</ModalHeader>
      <ModalBody>
        {APPError ? `${APPError.message}` : "Saving form ..."}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        {/* <Button color="primary" onClick={props.toggle}>Submit</Button>{' '} */}
      </ModalFooter>
    </Modal>
  );
};

export default SubmitFormModal;
