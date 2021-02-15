import { useContext, useState } from 'react';
import { InputGroup, DropdownToggle, DropdownItem, DropdownMenu, InputGroupButtonDropdown,  Container, Alert, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import InputMask from 'react-input-mask';
import TableInfo from "./table"
import FormItem from "../../Form/Item"

const PhysicianInformation = (props:any) => {
  const { Profile, updateContext }  = useContext(AppContext)
  const { tabs: { PrimaryCare } } = Profile

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState(PrimaryCare.data.code || "Area")

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  
  if (props.table) {
    return <TableInfo {...props} />
  }
  return (
  <div className="col-xs-12">
    <Form>
      <Container>
        {
          PrimaryCare.error && (
              <Row>
                  <Col>
                      <Alert color="danger">
                          {PrimaryCare.error}
                      </Alert>
                  </Col>
              </Row>
          )
        }
        <Row>
          <Col xs="12" sm="6">
            <FormItem
              label="Doctor Full name"
              id={`DoctorFullname`}
              placeholder={"Doctor Full name"}
              value={PrimaryCare.data.fullName}
              onChange={(e: any) => {
                updateContext("fullName", e.target.value)
              }}
            />
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
                  value={PrimaryCare.data.phone} 
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