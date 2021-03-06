import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  InputGroupAddon,
  Button,
  Form,
  Col,
  Row,
  Alert,
  Container,
  Card,
  CardText,
  CardTitle,
  CardColumns,
  Table,
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";

import TableInfo from "./table";
import FormItem from "../../Form/Item";
import { ProfileMedicareDataInterface } from "../../../context/Profile.Contex";
import { calculateError } from "../../../utils";

const MedicareID = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [mResult, setResult] = useState({});

  const {
    activeTab,
    Profile,
    checkMedicare,
    registerFunction,
    updateContext,
    Error,
    setError,
    setActiveTab,
  } = useContext(AppContext);
  const {
    tabs: { MediCare },
  } = Profile;
  const {
    tabs: { PersonalInfo },
  } = Profile;
  // const [internalError, setInternalError]  = useState<string | null>(null)

  const save = useCallback(() => {
    if (MediCare.data.memberID === "" || MediCare.data.memberID === null) {
      updateContext("error", "MediCare ID can not be empty.");
    } else {
      setLoading(true);
      checkMedicare(PersonalInfo.data, MediCare.data)
        .then((r: any) => {
          let message = "";
          let error = false;

          if (true) {
            updateContext("success", true);
            updateContext("error", null);
          } else {
            if (r.PayerName === "MediCare Part A and B") {
              message += r.PayerName;
              error = true;
            }

            if (r.HBPC_Deductible_OOP_Summary) {
              message += ", Patient has aditional Payers";
              error = true;
            }

            if (r.DisclaimerMessage) {
              message += `<br />${r.DisclaimerMessage}`;
              error = true;
            }

            if (r.EDIErrorMessage) {
              updateContext("error", r.EDIErrorMessage);
              updateContext("success", null);
              updateContext("extendedMedicareLeadData", null);
            } else if (error) {
              updateContext("error", message);
              updateContext("success", false);
              updateContext("extendedMedicareLeadData", null);
            } else {
              updateContext("error", null);
              updateContext("success", r.AddtionalInfo);
              updateContext("extendedMedicareLeadData", r);
            }
            setResult(r);
          }

          setLoading(false);
        })
        .catch((err: any) => {
          updateContext("success", false);
          updateContext("error", err.response.data.message);
          updateContext("extendedMedicareLeadData", {});
          setResult({});
          setLoading(false);
        });
    }
  }, [MediCare.data, PersonalInfo.data, checkMedicare, updateContext]);

  useEffect(() => {
    updateContext("save", save);
  }, [PersonalInfo.data]);

  const showError: boolean = useMemo(() => {
    return calculateError(MediCare.error);
  }, [MediCare.error]);

  if (props.table) {
    return <TableInfo {...props} />;
  }
  console.log(MediCare.error);
  return (
    <div className="col-xs-12">
      <Container>
        {(showError || MediCare.success) && !loading && (
          <Row>
            <Col>
              {MediCare.error && (
                <Alert color="danger">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(MediCare.error),
                    }}
                  ></div>
                </Alert>
              )}
              {MediCare.success && (
                <Alert color="success">
                  <div
                    dangerouslySetInnerHTML={{ __html: MediCare.success }}
                  ></div>
                </Alert>
              )}
            </Col>
          </Row>
        )}
        <Row>
          <Col xs="12">
            <Form>
              <FormItem
                label="MediCare ID"
                // error={MediCare.error}
                onChange={(e: any) => {
                  updateContext("memberID", e.target.value);
                }}
                placeholder="MediCare ID"
                id="memberID"
                value={MediCare.data.memberID}
                disabled={loading}
                appendAddon={() => (
                  <InputGroupAddon addonType="append">
                    <Button
                      color={loading ? `` : `secondary`}
                      onClick={() => {
                        if (!loading) {
                          save();
                        }
                      }}
                    >
                      {loading ? `Checking ...` : `Check Elgibility`}
                    </Button>
                  </InputGroupAddon>
                )}
              />
            </Form>
          </Col>
        </Row>
        {/* {mResult && (
          <Row>
            <Col>
              <CardColumns>
                <Card body inverse>
                  <CardTitle tag="h5">Result</CardTitle>
                  <CardText>
                    <Table borderless>
                      <tbody>
                        <tr>
                          <th scope="row">Status</th>
                          <td>{mResult.status}</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardText>
                </Card>
              </CardColumns>
            </Col>
          </Row>
        )} */}
      </Container>
    </div>
  );
};

export default MedicareID;
