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

const Ethnicity: Array<string>= ["Asian", "African American", "Ashkenzai Jewish", "Caucasian", "French Canadian", "Hispanic", "Indian", "Middle Eastern", "Native American", "Pacific Islander", "Other"]
const Separator = () => <Col xs="12"><hr /></Col>
const PersonalInfo = () => {
  return (
  <div className="col-xs-12">
    <Form>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <FormInput id="userFirstName" label="First name" />
          </Col>
          <Col xs="12" sm="4">
            <FormInput id="userLastName" label="Last name" />
          </Col>
          <Col xs="12" sm="4">
              <Label for="RadioMale">Gender</Label>
              <FormGroup>
                <CustomInput bsSize="sm" type="radio"  name="gender" id="RadioMale" label="Male"  inline/>
                <CustomInput bsSize="sm" type="radio"  name="gender" id="RadioFemale" label="Female"  inline/>
              </FormGroup>
          </Col>
          <Col xs="12" sm="6">
            <FormInput id="firstContact" label="Phone" />
          </Col>
          <Col xs="12" sm="6">
            <FormInput id="AltContactNumber" label="Alt. Phone" />
          </Col>
          <Col xs="12">
            <FormInput id="emailAddress" label="Email Address" />
          </Col>
          <Col xs="12" >
            <FormGroup>
              <Label for="birthDate">Birth Date</Label>
              <Input
                bsSize="sm"
                type="date"
                name="date"
                id="birthDate"
                placeholder="Birth date"
              />
            </FormGroup>
          </Col>
          <Col xs="12">
              <Label for="RadioEthnicity">Ethnicity</Label>
              <FormGroup>
                {
                  Ethnicity.map((et, key) => (
                    <CustomInput bsSize="sm" type="radio"  name="RadioEthnicity" id={`Ethnicity-id-${key}`} key={`Ethnicity-id-${key}`} label={et}  inline/>
                  ))
                }
              </FormGroup>
          </Col>
          <Col xs="12">
              <Label for="RadioEthnicity">Previous Tests only </Label>
          </Col>
          <Col xs="12">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Cardiac
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Diabetes
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" />  Cancer
                </Label>
              </FormGroup>
          </Col>
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PersonalInfo