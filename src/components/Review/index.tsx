/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';

const ModalExample = (props: any) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Form Review</ModalHeader>
            <ModalBody>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="box_contact">
                            <i className="pe-7s-id"></i>
                            <h4>Personal Info</h4>
                            <blockquote className="blockquote styled">
							<small>First name: <cite title=""><b>Jhon</b></cite></small>
							<small>Last name: <cite title=""><b>Doe</b></cite></small>
						</blockquote>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                     
                        <div className="box_contact">
                            <i className="pe-7s-map-marker"></i>
                            <h4>Address</h4>
                            <p>11 Fifth Ave - New York, 45 001238 - USA</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                   <Col>
                        <FormGroup>
                            <Label for="birthDate">Aditional information</Label>
                            <Input type="textarea" placeholder="Comment here if you have anything to add."  rows={5} />
                        </FormGroup>
                    </Col>
                </Row>
          </Container>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                <Button color="primary" onClick={props.toggle}>Submit</Button>{' '}
            </ModalFooter>
        </Modal>
    );
}

export default ModalExample;