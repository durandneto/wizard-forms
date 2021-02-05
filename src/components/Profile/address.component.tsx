import { Container, Row, Col, Form, FormGroup, Label, Input, CustomInput, FormFeedback, FormText,
  InputGroup, Button, InputGroupAddon } from 'reactstrap';

interface formInputInterface {
  id: string;
  label: string;
}
const FormInput = ({id, label}: formInputInterface) => (
  <FormGroup>
    <Label for={`form-input-id-${id}`}>{label}</Label>
    <Input type="text" bsSize="sm" name="lastName" id={`form-input-id-${id}`} placeholder={label} />
  </FormGroup>
)
const Address = () => {
  return (
  <div className="col-xs-12">
    <Form>
      <Container>
        <Row>
          <Col  xs="4">
            <FormGroup className="position-relative">
              <Label>Postal code</Label>
              <InputGroup>
                <Input placeholder="Postal code" />
                <InputGroupAddon addonType="append"><Button color="secondary">Search Address</Button></InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <FormGroup className="position-relative">
              <Label for="examplePassword">Full Address</Label>
              <Input invalid />
              <FormFeedback tooltip>Invalid Address, Example of a valid address here.</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12" sm="6">
            <FormInput id="address2" label="Address (line 2)" />
          </Col> 
          <Col xs="12" sm="6" >
            <FormInput id="city" label="City / State" />
          </Col> 
        </Row>
      </Container>
      </Form>
  </div>
)}


export default Address