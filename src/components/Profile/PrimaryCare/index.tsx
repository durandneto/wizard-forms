import { useContext, useState } from 'react';
import { InputGroup, DropdownToggle, DropdownItem, DropdownMenu, InputGroupButtonDropdown,  Container, Alert, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import InputMask from 'react-input-mask';
import TableInfo from "./table"

const PhysicianInformation = (props:any) => {
  const { Profile, updateContext }  = useContext(AppContext)
  const { PrimaryCare } = Profile


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState(PrimaryCare.code || "Area")

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
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
          <Col xs="12" sm="6">
            <FormGroup>
              <Label for={`DoctorFullname`}>Doctor Full name</Label>
              <Input bsSize="sm" type="text"   id={`DoctorFullname`} placeholder={"Doctor Full name"} value={PrimaryCare.fullName}
               onChange={(e) => {
                updateContext("fullName", e.target.value)
              }}  />
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
                  value={PrimaryCare.phone} 
                  tag={InputMask}
                  onChange={e => {
                    updateContext("phone", e.target.value)
                  }}
                />
              </InputGroup>
          </Col> 
        </Row>
      </Container>
      </Form>
  </div>
)}


export default PhysicianInformation