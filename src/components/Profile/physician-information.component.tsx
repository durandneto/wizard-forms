import { Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

interface formInputInterface {
  id: string;
  label: string;
}
const FormInput = ({id, label}: formInputInterface) => (
  <FormGroup>
    <Label for={`form-input-id-${id}`}>{label}</Label>
    <Input type="text" name="lastName" id={`form-input-id-${id}`} placeholder={label} />
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
            <FormInput id="ContactPhone" label="Contact Phone" />
          </Col> 
          <Col xs="12" sm="6">
            <FormInput id="address" label="Address" />
          </Col>
          <Col xs="12" sm="6">
            <FormInput id="address2" label="Address (line 2)" />
          </Col> 
          <Col xs="12" sm="6" md="4">
            <FormInput id="city" label="City" />
          </Col> 
          <Col xs="12" sm="6" md="4">
            <FormGroup>
              <Label for="StateCustomSelect">State</Label>
              <CustomInput type="select" id="StateCustomSelect" name="customSelectState">
                <option value="">Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </CustomInput>
            </FormGroup>
          </Col>
          <Col xs="12" sm="6" md="4">
            <FormInput id="postalCode" label="Postal Code" />
          </Col> 
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PhysicianInformation