/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const SubmitFormModal = (props: any) => {

    return (
        <Modal isOpen={props.isOpen} size="lg">
            <ModalHeader>Form Sync</ModalHeader>
            <ModalBody>
                Saving form ...
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.onCancel}>Cancel</Button>
                {/* <Button color="primary" onClick={props.toggle}>Submit</Button>{' '} */}
            </ModalFooter>
        </Modal>
    );
}

export default SubmitFormModal;