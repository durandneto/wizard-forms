import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Col,
  Row,
  Container
 } from 'reactstrap';

const MedicareID = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
      <Container>
        <Row>
          <Col xs="12">
            <Form>
              <InputGroup>
                <Input placeholder="Medicare ID" />
                <InputGroupAddon addonType="append"><Button color="secondary">Check Elgibility</Button></InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
  );
}


export default MedicareID;