import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DropdownToggle,
  Alert,
  DropdownMenu,
  DropdownItem,
  FormFeedback,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
import TableInfo from "./table";

import InputMask from "react-input-mask";
import { AppContext } from "../../../context/App.Contex";
import { ProfileUserDataInterface } from "../../../context/Profile.Contex";
import FormItem from "../../Form/Item";
import { calculateError } from "../../../utils";

const Ethnicity: Array<string> = [
  "Asian",
  "African American",
  "Ashkenzai Jewish",
  "Caucasian",
  "French Canadian",
  "Hispanic",
  "Indian",
  "Middle Eastern",
  "Native American",
  "Pacific Islander",
  "Other",
];

const PersonalInfo = (props: any) => {
  const { Profile, updateContext, ContextData, setContextData } = useContext(
    AppContext
  );
  const {
    tabs: { PersonalInfo },
  } = Profile;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAltOpen, setAltDropdownOpen] = useState(false);
  const [code, setCode] = useState(PersonalInfo.data.altPhoneCode || "Area");
  const [altCode, setAltCode] = useState(
    PersonalInfo.data.altPhoneCode || "Area"
  );

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const toggleAltDropDown = () => setAltDropdownOpen(!dropdownAltOpen);

  const save = useCallback(() => {
    const error: ProfileUserDataInterface = {
      firstName: null,
      lastName: null,
      email: null,
      gender: null,
      birthDate: null,
      phone: null,
      phoneCode: null,
      altPhone: null,
      altPhoneCode: null,
      ethnicity: null,
      salivaSwabTest: null,
      isAlzheimerorDementiatype: null,
      previousTests: null,
      isNursingLiving: null,
    };

    if (
      PersonalInfo.data.firstName === null ||
      PersonalInfo.data.firstName === ""
    ) {
      error.firstName = "First name can not be empty.";
    }

    if (PersonalInfo.data.previousTests.length === 0) {
      error.previousTests = "Previous generic test can not be empty.";
    }

    if (
      PersonalInfo.data.lastName === null ||
      PersonalInfo.data.lastName === ""
    ) {
      error.lastName = "Last name can not be empty.";
    }

    if (PersonalInfo.data.gender === null || PersonalInfo.data.gender === "") {
      error.gender = "Gender can not be empty.";
    }

    if (
      PersonalInfo.data.ethnicity === null ||
      PersonalInfo.data.ethnicity === ""
    ) {
      error.ethnicity = "Ethnicity can not be empty.";
    }

    if (
      PersonalInfo.data.birthDate === null ||
      PersonalInfo.data.birthDate === ""
    ) {
      error.birthDate = "DOB can not be empty.";
    }

    if (PersonalInfo.data.phone === null || PersonalInfo.data.phone === "") {
      error.phone = "Phone can not be empty.";
    }
    if (PersonalInfo.data.email === null || PersonalInfo.data.email === "") {
      error.email = "E-mail can not be empty.";
    }

    updateContext("error", error);
    updateContext("success", !calculateError(error));
  }, [PersonalInfo.data.firstName, updateContext]);

  useEffect(() => {
    updateContext("save", save);
  }, [PersonalInfo.data]);

  const showError: boolean = useMemo(() => {
    console.log(PersonalInfo.error);
    return calculateError(PersonalInfo.error);
  }, [PersonalInfo.error]);

  if (props.table) {
    return <TableInfo {...props} />;
  }

  console.log({ showError });
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          <Row>
            <Col xs="12" sm="4">
              <FormItem
                error={PersonalInfo.error?.firstName}
                id="PersonalInfoFirstName"
                label="First name (*)"
                value={PersonalInfo.data.firstName}
                onChange={(e: any) => {
                  updateContext("firstName", e.target.value);
                }}
              />
            </Col>
            <Col xs="12" sm="4">
              <FormItem
                id="PersonalInfoLastName"
                label="Last name (*)"
                value={PersonalInfo.data.lastName}
                error={PersonalInfo.error?.lastName}
                onChange={(e: any) => {
                  updateContext("lastName", e.target.value);
                }}
              />
            </Col>
            <Col xs="12" sm="4">
              <Label for="RadioMale">Gender</Label>
              <FormGroup>
                <CustomInput
                  invalid={PersonalInfo.error?.gender}
                  onChange={(e) => {
                    updateContext("gender", e.target.value);
                  }}
                  bsSize="sm"
                  type="radio"
                  value="male"
                  checked={PersonalInfo.data.gender === "male"}
                  name="gender"
                  id="RadioMale"
                  label="Male"
                  inline
                />
                <CustomInput
                  onChange={(e) => {
                    updateContext("gender", e.target.value);
                  }}
                  invalid={PersonalInfo.error?.gender}
                  bsSize="sm"
                  type="radio"
                  value="female"
                  checked={PersonalInfo.data.gender === "female"}
                  name="gender"
                  id="RadioFemale"
                  label="Female"
                  inline
                />
                <FormFeedback>{PersonalInfo.error?.gender}</FormFeedback>
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <Label for={`form-input-id-phone`}>Phone</Label>
              <InputGroup>
                {/* <InputGroupButtonDropdown
                  addonType="append"
                  isOpen={dropdownOpen}
                  toggle={toggleDropDown}
                >
                  <DropdownToggle caret>{code}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Area</DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setCode("+ 1");
                        updateContext("phoneCode", "+ 1");
                      }}
                    >
                      + 1
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setCode("+ 778");
                        updateContext("phoneCode", "+ 778");
                      }}
                    >
                      + 778
                    </DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown> */}
                <Input
                  type="tel"
                  mask="999999999999999"
                  maskChar=""
                  id="form-input-id-phone"
                  value={PersonalInfo.data.phone}
                  invalid={PersonalInfo.error?.phone}
                  tag={InputMask}
                  onChange={(e) => {
                    updateContext("phone", e.target.value);
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs="12" sm="4">
              <Label for={`form-input-id-phone`}>Alt. Phone</Label>
              <InputGroup>
                {/* <InputGroupButtonDropdown
                  addonType="append"
                  isOpen={dropdownAltOpen}
                  toggle={toggleAltDropDown}
                >
                  <DropdownToggle caret>{altCode}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Area</DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setAltCode("+ 1");
                        updateContext("altPhoneCode", "+ 1");
                      }}
                    >
                      + 1
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setAltCode("+ 778");
                        updateContext("altPhoneCode", "+ 778");
                      }}
                    >
                      + 778
                    </DropdownItem>
                  </DropdownMenu>
                </InputGroupButtonDropdown> */}
                <Input
                  type="tel"
                  mask="999999999999999"
                  maskChar=""
                  id="form-input-id-phone"
                  tag={InputMask}
                  value={PersonalInfo.data.altPhone}
                  invalid={PersonalInfo.error?.altPhone}
                  onChange={(e: any) => {
                    updateContext("altPhone", e.target.value);
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs="4">
              <FormItem
                id="emailAddress"
                label="Email Address"
                value={PersonalInfo.data.email}
                error={PersonalInfo.error?.email}
                onChange={(e: any) => {
                  updateContext("email", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sx="12" sm="4">
              <FormGroup>
                <Label for="birthDate">Birth Date</Label>
                <Input
                  bsSize="sm"
                  type="date"
                  name="date"
                  id="birthDate"
                  min="1920-01-01"
                  max="2000-01-01"
                  placeholder="Birth date"
                  value={PersonalInfo.data.birthDate}
                  invalid={PersonalInfo.error?.birthDate}
                  onChange={(e) => {
                    updateContext("birthDate", e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Label for="RadioEthnicity">Ethnicity</Label>
              <FormGroup>
                {Ethnicity.map((et, key) => (
                  <CustomInput
                    onChange={(e) => updateContext("ethnicity", e.target.value)}
                    bsSize="sm"
                    type="radio"
                    value={et}
                    invalid={PersonalInfo.error?.ethnicity}
                    checked={PersonalInfo.data.ethnicity === et}
                    name="RadioEthnicity"
                    id={`Ethnicity-id-${key}`}
                    key={`Ethnicity-id-${key}`}
                    label={et}
                    inline
                  />
                ))}
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <br />
              <FormGroup>
                <Label for={`typeOfNursinLiving`}>
                  <b>
                    Currenly living in a nursing home or assisted living
                    facility?
                  </b>
                </Label>
                <CustomInput
                  value={PersonalInfo.data.isNursingLiving}
                  onChange={(e: any) => {
                    updateContext("isNursingLiving", e.target.value);
                  }}
                  type="select"
                  id={`typeOfNursinLiving`}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <br />
              <FormGroup>
                <Label for={`AlzheimerorDementiatype`}>
                  <b>Do you have Alzheimer's or Dementia?</b>
                </Label>
                <CustomInput
                  value={PersonalInfo.data.isAlzheimerorDementiatype}
                  onChange={(e: any) => {
                    updateContext("isAlzheimerorDementiatype", e.target.value);
                  }}
                  type="select"
                  id={`AlzheimerorDementiatype`}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col xs="12">
              <br />
              <Label>
                <b>Have you ever taken a Saliva Swab DNA test?</b>
              </Label>
            </Col>
            <Col xs="12">
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  value="Yes"
                  checked={PersonalInfo.data.salivaSwabTest === "Yes"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateContext("salivaSwabTest", "Yes");
                    } else {
                      updateContext("salivaSwabTest", "No");
                    }
                  }}
                />
                <Label check>Yes, I did.</Label>
              </FormGroup>
            </Col>
            <Col xs="12">
              <br />
              <Label for="RadioEthnicity">
                <b>Previous Generic Test </b>
              </Label>
            </Col>
            <Col xs="12">
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  value="Cardiac"
                  checked={PersonalInfo.data.previousTests.includes("Cardiac")}
                  invalid={PersonalInfo.error?.previousTests}
                  onChange={(e) => {
                    ContextData.Cardiac.show = !e.target.checked;
                    setContextData({ ...ContextData });
                    if (e.target.checked) {
                      updateContext("previousTests", [
                        ...PersonalInfo.data.previousTests,
                        e.target.value,
                      ]);
                    } else {
                      const index = PersonalInfo.data.previousTests.findIndex(
                        (i: string) => i === e.target.value
                      );
                      const newPreviousTests = PersonalInfo.data.previousTests;
                      newPreviousTests.splice(index, 1);
                      updateContext("previousTests", newPreviousTests);
                    }
                  }}
                />
                <Label check>Cardiac</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  value="Diabetes"
                  invalid={PersonalInfo.error?.previousTests}
                  checked={PersonalInfo.data.previousTests.includes("Diabetes")}
                  onChange={(e) => {
                    ContextData.Diabetes.show = !e.target.checked;
                    setContextData({ ...ContextData });
                    if (e.target.checked) {
                      updateContext("previousTests", [
                        ...PersonalInfo.data.previousTests,
                        e.target.value,
                      ]);
                    } else {
                      const index = PersonalInfo.data.previousTests.findIndex(
                        (i: string) => i === e.target.value
                      );
                      const newPreviousTests = PersonalInfo.data.previousTests;
                      newPreviousTests.splice(index, 1);

                      updateContext("previousTests", newPreviousTests);
                    }
                  }}
                />
                <Label check>Diabetes</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  value="Cancer"
                  checked={PersonalInfo.data.previousTests.includes("Cancer")}
                  invalid={PersonalInfo.error?.previousTests}
                  onChange={(e) => {
                    ContextData.Cancer.show = !e.target.checked;
                    setContextData({ ...ContextData });
                    if (e.target.checked) {
                      updateContext("previousTests", [
                        ...PersonalInfo.data.previousTests,
                        e.target.value,
                      ]);
                    } else {
                      const index = PersonalInfo.data.previousTests.findIndex(
                        (i: string) => i === e.target.value
                      );
                      const newPreviousTests = PersonalInfo.data.previousTests;
                      newPreviousTests.splice(index, 1);

                      updateContext("previousTests", newPreviousTests);
                    }
                  }}
                />
                <Label check>Cancer</Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default PersonalInfo;
