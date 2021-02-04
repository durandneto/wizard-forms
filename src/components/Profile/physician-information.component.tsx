import { Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

interface formInputInterface {
  id: string;
  label: string;
}
const FormInput = ({id, label}: formInputInterface) => (
  <FormGroup>
    <Label for={`form-input-id-${id}`}>{label}</Label>
    <Input bsSize="sm" type="text" name="lastName" id={`form-input-id-${id}`} placeholder={label} />
  </FormGroup>
)

/** 
Primary Care Doctor Full name - Primary Care Contact Phone
Primary Care Address - Address (Line 2)
Primary Care City - Primary Care State  - Primary Care Postal
*/
const PhysicianInformation = () => {
  return (
  <div className="col-xs-12">
    <Form>
      <Container>
        <Row>
          <Col xs="12" sm="6">
            <FormInput id=" DoctorFullname" label=" Doctor Full name" />
          </Col>
          <Col xs="12" sm="6">
            <FormInput id="ContactPhone" label="Phone" />
          </Col> 
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PhysicianInformation