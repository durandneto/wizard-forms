import { Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";
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
                <CustomInput type="radio"  name="gender" id="RadioMale" label="Male"  inline/>
                <CustomInput type="radio"  name="gender" id="RadioFemale" label="Female"  inline/>
              </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="3">
            <FormGroup>
              <Label for="birthDate">Birth Date</Label>
              <Input
                type="date"
                name="date"
                id="birthDate"
                placeholder="Birth date"
              />
            </FormGroup>
          </Col>
          <Col xs="12" sm="6" md="3">
            <FormGroup>
              <Label for="HeightCustomSelect">Height</Label>
              <CustomInput type="select" id="HeightCustomSelect" name="customSelectHeight">
                <option value="">Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </CustomInput>
            </FormGroup>
          </Col>
          <Col xs="12" sm="6" md="3">
            <FormInput id="weight" label="Weight ( lbs. )" />
          </Col>
          <Col xs="12" sm="6" md="3">
            <FormGroup>
              <Label for="EthnicityCustomSelect">Ethnicity</Label>
              <CustomInput type="select" id="EthnicityCustomSelect" name="customSelectEthnicity">
                <option value="">Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </CustomInput>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <FormInput id="emailAddress" label="Email Address" />
          </Col>
          <Col xs="12" sm="4">
            <FormInput id="firstContact" label="Contact Number" />
          </Col>
          <Col xs="12" sm="4">
            <FormInput id="AltContactNumber" label="Alt. Contact Number" />
          </Col>
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PersonalInfo