import { useContext, useState } from "react"
import { DropdownToggle, Alert, DropdownMenu, DropdownItem, InputGroupButtonDropdown, InputGroup, Container, Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import TableInfo from "./table"

import InputMask from 'react-input-mask';
import { AppContext } from "../../../context/App.Contex";
interface formInputInterface {
  id: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
}
const FormInput = ({id, label, value, onChange}: formInputInterface) => (
  <FormGroup>
    <Label for={`form-input-id-${id}`}>{label}</Label>
    <Input onChange={onChange} value={value} bsSize="sm" type="text" name="lastName" id={`form-input-id-${id}`} placeholder={label} />
  </FormGroup>
)

const Ethnicity: Array<string>= ["Asian", "African American", "Ashkenzai Jewish", "Caucasian", "French Canadian", "Hispanic", "Indian", "Middle Eastern", "Native American", "Pacific Islander", "Other"]
const PersonalInfo = (props: any) => {
  const {  Profile, updateContext }  = useContext(AppContext)
  const { PersonalInfo: User } = Profile

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAltOpen, setAltDropdownOpen] = useState(false);
  const [code, setCode] = useState(User.altPhoneCode || "Area")
  const [altCode, setAltCode] = useState(User.altPhoneCode || "Area")

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const toggleAltDropDown = () => setAltDropdownOpen(!dropdownAltOpen);

  if (props.table) {
    return <TableInfo {...props} />
  }

  return (
  <div className="col-xs-12">
    <Form>
      <Container>
      {
          props.error && (
            <Row>
                <Col>
                    <Alert color="danger">
                      {props.error}
                    </Alert>
                </Col>
            </Row>
          )
        }
        <Row>
          <Col xs="12" sm="4">
            <FormInput id="userFirstName" label="First name (*)" value={User.firstName} onChange={e => {updateContext("firstName", e.target.value)}}/>
          </Col>
          <Col xs="12" sm="4">
            <FormInput id="userLastName" label="Last name (*)"  value={User.lastName} onChange={e => {
                 updateContext("lastName", e.target.value)
                }}/>
          </Col>
          <Col xs="12" sm="4">
              <Label for="RadioMale">Gender</Label>
              <FormGroup>
                <CustomInput  onChange={e => {
                  updateContext("gender", e.target.value)
                }}
                bsSize="sm" type="radio" value="male" checked={User.gender === 'male'} name="gender" id="RadioMale" label="Male"  inline/>
                <CustomInput  onChange={e => {
                  updateContext("gender", e.target.value)
                }}
                bsSize="sm" type="radio" value="female" checked={User.gender === 'female'}  name="gender" id="RadioFemale" label="Female"  inline/>
              </FormGroup>
          </Col>
          <Col xs="12" sm="6">
              <Label for={`form-input-id-phone`}>Phone</Label>
              <InputGroup>
                <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}   >
                  <DropdownToggle caret>
                    {code}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Area</DropdownItem>
                    <DropdownItem onClick={() => {
                      setCode("+ 1")
                      updateContext("phoneCode", "+ 1")
                      }}>+ 1</DropdownItem>
                    <DropdownItem onClick={() => {
                      setCode("+ 778")
                      updateContext("phoneCode", "+ 778")
                      }}>+ 778</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                  type="tel"
                  mask="999 999 9999"
                  maskChar=" "
                  id="form-input-id-phone"
                  value={User.phone} 
                  tag={InputMask}
                  onChange={e => {
                    updateContext("phone", e.target.value)
                  }}
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
                    <DropdownItem onClick={() => {
                      setAltCode("+ 1")
                      updateContext("altPhoneCode", "+ 1")
                      }}>+ 1</DropdownItem>
                    <DropdownItem onClick={() => {
                      setAltCode("+ 778")
                      updateContext("altPhoneCode", "+ 778")
                      }}>+ 778</DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                  type="tel"
                  mask="999 999 9999"
                  maskChar=" "
                  id="form-input-id-phone"
                  tag={InputMask}
                  value={User.altPhone} 
                  onChange={e => {
                    updateContext("altPhone", e.target.value)
                  }}
                />
              </InputGroup>
          </Col>
          <br />
          <br />
          <Col xs="12">
            <FormInput id="emailAddress" label="Email Address"  value={User.email} onChange={e => {
              updateContext("email", e.target.value)
            }}/>
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
                value={User.birthDate}
                onChange={e => {
                  updateContext("birthDate", e.target.value)
                }}
                
              />
            </FormGroup>
          </Col>
          <Col xs="12">
              <Label for="RadioEthnicity">Ethnicity</Label>
              <FormGroup>
                {
                  Ethnicity.map((et, key) => (
                    <CustomInput onChange={(e) =>
                      updateContext("ethnicity", e.target.value)
                      
                    } bsSize="sm" type="radio"  value={et} checked={User.ethnicity === et}  name="RadioEthnicity" id={`Ethnicity-id-${key}`} key={`Ethnicity-id-${key}`} label={et}  inline/>
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
                  <Input type="checkbox" value="Cardiac" checked={User.previousTests.includes("Cardiac")} onChange={e => {
                    if (e.target.checked) {
                      updateContext("previousTests", [
                        ...User.previousTests,
                        e.target.value
                      ])
                    } else {
                      const index = User.previousTests.findIndex((i: string) => i === e.target.value)
                      const newPreviousTests = User.previousTests
                      newPreviousTests.splice(index, 1)
                      updateContext("previousTests", newPreviousTests)
                    }
                }}  /> Cardiac
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" value="Diabetes" checked={User.previousTests.includes("Diabetes")}  onChange={e => {
                    if (e.target.checked) {
                      updateContext("previousTests", [
                        ...User.previousTests,
                        e.target.value
                      ])
                    
                    } else {
                      const index = User.previousTests.findIndex((i: string) => i === e.target.value)
                      const newPreviousTests = User.previousTests
                      newPreviousTests.splice(index, 1)

                      updateContext("previousTests", newPreviousTests)
                    }
                }}  /> Diabetes
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" value="Cancer" checked={User.previousTests.includes("Cancer")}   onChange={e => {
                    if (e.target.checked) {
 

                      updateContext("previousTests", [
                        ...User.previousTests,
                        e.target.value
                      ])


                    } else {
                      const index = User.previousTests.findIndex((i: string) => i === e.target.value)
                      const newPreviousTests = User.previousTests
                      newPreviousTests.splice(index, 1)

                      updateContext("previousTests", newPreviousTests)

                    }
                }} />  Cancer
                </Label>
              </FormGroup>
          </Col>
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PersonalInfo