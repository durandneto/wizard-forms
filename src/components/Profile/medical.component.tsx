import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const MedicareID = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div>
      <InputGroup>
        <Input placeholder="Medicare ID" />
        <InputGroupAddon addonType="append"><Button color="secondary">Check Elgibility</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
}


export default MedicareID;