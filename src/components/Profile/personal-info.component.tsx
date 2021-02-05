import { useState } from "react"
import { DropdownToggle, DropdownMenu, DropdownItem, InputGroupButtonDropdown, InputGroup, InputGroupAddon, Button, Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import InputMask from 'react-input-mask';
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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAltOpen, setAltDropdownOpen] = useState(false);
  const [code, setCode] = useState("Area")
  const [altCode, setAltCode] = useState("Area")

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const toggleAltDropDown = () => setAltDropdownOpen(!dropdownAltOpen);

  return (
  <div className="col-xs-12">
    <Form>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <FormInput id="userFirstName" label="First name (*)" />
          </Col>
          <Col xs="12" sm="4">
            <FormInput id="userLastName" label="Last name (*)" />
          </Col>
          <Col xs="12" sm="4">
              <Label for="RadioMale">Gender</Label>
              <FormGroup>
                <CustomInput bsSize="sm" type="radio"  name="gender" id="RadioMale" label="Male"  inline/>
                <CustomInput bsSize="sm" type="radio"  name="gender" id="RadioFemale" label="Female"  inline/>
              </FormGroup>
          </Col>
          <Col xs="12" sm="6">
              <Label for={`form-input-id-phone`}>Phone</Label>
              <InputGroup>
                <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                  <DropdownToggle caret>
                    {code}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Area</DropdownItem>
                    <DropdownItem onClick={() => setCode("+ 1")}>+ 1</DropdownItem>
                    <DropdownItem onClick={() => setCode("+ 778")}>+ 778</DropdownItem>
                    <DropdownItem onClick={() => setCode("+ 236")}>+ 236</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                  type="tel"
                  mask="999 999 9999"
                  maskChar=" "
                  id="form-input-id-phone"
                  tag={InputMask}
                />
              </InputGroup>
          </Col>
          <Col xs="12" sm="6">
              <Label for={`form-input-id-phone`}>Alt. Phone</Label>
              <InputGroup>
                <InputGroupButtonDropdown addonType="append" isOpen={dropdownAltOpen} toggle={toggleAltDropDown}>
                  <DropdownToggle caret>
                    {altCode}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Area</DropdownItem>
                    <DropdownItem onClick={() => setAltCode("+ 1")}>+ 1</DropdownItem>
                    <DropdownItem onClick={() => setAltCode("+ 778")}>+ 778</DropdownItem>
                    <DropdownItem onClick={() => setAltCode("+ 236")}>+ 236</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                  type="tel"
                  mask="999 999 9999"
                  maskChar=" "
                  id="form-input-id-phone"
                  tag={InputMask}
                />
              </InputGroup>
          </Col>
          <br />
          <br />
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