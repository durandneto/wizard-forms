import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button,
  FormFeedback,
  CustomInput,
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import { ProfileAddressDataInterface } from "../../../context/Profile.Contex";
import { calculateError } from "../../../utils";
import TableInfo from "./table";

let states = [
  "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];
const Address = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { Profile, updateContext, validateAddress } = useContext(AppContext);
  const {
    tabs: { Address },
  } = Profile;

  const save = useCallback(() => {
    const error: ProfileAddressDataInterface = {
      streetLine: null,
      streetLine2: null,
      city: null,
      state: null,
      postalCode: null,
    };

    if (Address.data.streetLine === null || Address.data.streetLine === "") {
      error.streetLine = "Street line can not be empty.";
    }

    if (Address.data.postalCode === null || Address.data.postalCode === "") {
      error.postalCode = "Postal Code can not be empty.";
    }

    if (Address.data.city === null || Address.data.city === "") {
      error.city = "City can not be empty.";
    }

    if (Address.data.state === null || Address.data.state === "") {
      error.state = "State can not be empty.";
    }

    updateContext("error", error);
    updateContext("success", !calculateError(error));
  }, [Address.data, updateContext]);

  useEffect(() => {
    updateContext("save", save);
  }, [Address.data]);

  const showError: boolean = useMemo(() => {
    return calculateError(Address.error);
  }, [Address.error]);

  if (props.table) {
    return <TableInfo {...props} />;
  }
  console.log("Address", { Address });
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          {showError && (
            <Row>
              <Col>
                <Alert color="danger">error</Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="examplePassword">Street Address</Label>
                <Input
                  invalid={Address.error?.streetLine}
                  disabled={loading}
                  value={Address.data.streetLine}
                  onChange={(e) => {
                    updateContext("streetLine", e.target.value);
                  }}
                />
                <FormFeedback>{Address.error?.streetLine}</FormFeedback>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="address2">Apartament/ Unit</Label>
                <Input
                  disabled={loading}
                  value={Address.data.streetLine2}
                  id="address2"
                  onChange={(e) => {
                    updateContext("streetLine2", e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup className="position-relative">
                <Label for="city">City</Label>
                <Input
                  invalid={Address.error?.city}
                  disabled={loading}
                  value={Address.data.city}
                  id="city"
                  onChange={(e) => {
                    updateContext("city", e.target.value);
                  }}
                />
                <FormFeedback>{Address.error?.city}</FormFeedback>
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup>
                <Label for="exampleCustomSelect">Custom Select</Label>
                <CustomInput
                  type="select"
                  id="exampleCustomSelect"
                  name="customSelect"
                  disabled={loading}
                  invalid={Address.error?.state}
                  value={Address.data.state}
                  onChange={(e: any) => {
                    updateContext("state", e.target.value);
                  }}
                >
                  <option value="">Select</option>
                  {states.map((s: string) => (
                    <option value={s} key={`state-${s}`}>
                      {s}
                    </option>
                  ))}
                </CustomInput>
                <FormFeedback>{Address.error?.state}</FormFeedback>
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup className="position-relative">
                <Label for="postalcode">Zip code</Label>
                <Input
                  invalid={Address.error?.postalCode}
                  disabled={loading}
                  value={Address.data.postalCode}
                  id="postalcode"
                  onChange={(e) => {
                    updateContext("postalCode", e.target.value);
                  }}
                />
                <FormFeedback>{Address.error?.postalCode}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 4, offset: 8 }}>
              <Button
                color={loading ? "" : "success"}
                onClick={() => {
                  if (!loading) {
                    setLoading(true);
                    validateAddress(Address.data)
                      .then((r: any) => {
                        setLoading(false);
                        updateContext("error", null);
                        updateContext("success", true);
                      })
                      .catch((err: any) => {
                        updateContext(
                          "error",
                          err.response.data.message.join(", ")
                        );
                        updateContext("success", false);
                        setLoading(false);
                      });
                  }
                }}
              >
                {loading ? `Validating ...` : `Validate Address`}
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Address;
