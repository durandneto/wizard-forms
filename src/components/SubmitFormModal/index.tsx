/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import {  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const SubmitFormModal = (props: any) => {

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} size="lg">
            <ModalHeader toggle={props.toggle}>Form Sync</ModalHeader>
            <ModalBody>
                Sync with backend
            </ModalBody>
            <ModalFooter>
                {/* <Button color="secondary" onClick={props.toggle}>Cancel</Button> */}
                {/* <Button color="primary" onClick={props.toggle}>Submit</Button>{' '} */}
            </ModalFooter>
        </Modal>
    );
}

export default SubmitFormModal;