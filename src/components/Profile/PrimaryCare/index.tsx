import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  InputGroup,
  Container,
  Alert,
  Row,
  Col,
  Form,
  FormFeedback,
  Label,
  Input,
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import InputMask from "react-input-mask";
import TableInfo from "./table";
import FormItem from "../../Form/Item";
import { ProfilePrimaryCareDataInterface } from "../../../context/Profile.Contex";
import { calculateError } from "../../../utils";

const PhysicianInformation = (props: any) => {
  const { Profile, updateContext } = useContext(AppContext);
  const {
    tabs: { PrimaryCare },
  } = Profile;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [code, setCode] = useState(PrimaryCare.data.code || "Area");

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const save = useCallback(() => {
    const error: ProfilePrimaryCareDataInterface = {
      fullName: null,
      phone: null,
    };

    if (
      PrimaryCare.data.fullName === null ||
      PrimaryCare.data.fullName === ""
    ) {
      error.fullName = "Name can not be empty.";
    }

    if (PrimaryCare.data.phone === null || PrimaryCare.data.phone === "") {
      error.phone = "Name can not be empty.";
    }

    updateContext("error", error);
    updateContext("success", !calculateError(error));
  }, [PrimaryCare.data, updateContext]);

  useEffect(() => {
    updateContext("save", save);
  }, [PrimaryCare.data]);

  const showError: boolean = useMemo(() => {
    return calculateError(PrimaryCare.error);
  }, [PrimaryCare.error]);

  if (props.table) {
    return <TableInfo {...props} />;
  }

  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <FormItem
                label="Doctor name"
                id={`DoctorFullname`}
                placeholder={"Doctor Full name"}
                value={PrimaryCare.data.fullName}
                error={PrimaryCare.error?.fullName}
                onChange={(e: any) => {
                  updateContext("fullName", e.target.value);
                }}
              />
            </Col>
            <Col xs="12" sm="6">
              <Label for={`form-input-id-phone`}>Phone</Label>
              <InputGroup>
                <Input
                  type="tel"
                  mask="99999999999999999999"
                  maskChar=""
                  id="form-input-id-phone"
                  value={PrimaryCare.data.phone}
                  invalid={PrimaryCare.error?.phone}
                  tag={InputMask}
                  onChange={(e) => {
                    updateContext("phone", e.target.value);
                  }}
                />
                <FormFeedback>{PrimaryCare.error?.phone}</FormFeedback>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default PhysicianInformation;
