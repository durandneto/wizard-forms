import { useCallback, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  CustomInput,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button,
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import TableInfo from "./table";

import {
  DiabetesDiagnostic,
  DiabetesDiagnosticDataInterface,
} from "../../../context/Diabetes.Contex";
import { calculateError } from "../../../utils";

const Diagnostic = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { Diabetes, updateContext } = useContext(AppContext);
  const {
    tabs: { Diagnostic },
  } = Diabetes;

  const save = useCallback(() => {
    const error: DiabetesDiagnosticDataInterface = {
      BMI: {
        value: null,
      },
      Diagnostic: {
        list: null,
        isRCEDiabetesTransfer: null,
      },
      FamilyMemberList: { list: null },
    };

    if (Diagnostic.data.list.length === 0) {
      error.Diagnostic.list = "Diagnostic list can not be empty.";
    }

    updateContext("error", error.Diagnostic);
    updateContext("success", !calculateError(error.Diagnostic));
  }, [Diagnostic.data]);

  useEffect(() => {
    updateContext("save", save);
    return () => {
      save();
    };
  }, [Diagnostic.data]);

  if (props.table) {
    return <TableInfo {...props} />;
  }
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          <Row>
            <Col xs="12">
              <Label>
                <b>Have you been diagnosed with any of the following?</b>
              </Label>
            </Col>
            <Col xs="12">
              <p> (check all that apply)</p>
            </Col>
            <Col xs="12">
              {DiabetesDiagnostic.map((diagnostic: string) => (
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      value={diagnostic}
                      checked={Diagnostic.data.list.includes(diagnostic)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateContext("list", [
                            ...Diagnostic.data.list,
                            e.target.value,
                          ]);
                        } else {
                          const index = Diagnostic.data.list.findIndex(
                            (i: string) => i === e.target.value
                          );
                          const newPreviousTests = Diagnostic.data.list;
                          newPreviousTests.splice(index, 1);
                          updateContext("list", newPreviousTests);
                        }
                      }}
                    />{" "}
                    {diagnostic}
                  </Label>
                </FormGroup>
              ))}
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <br />
              <FormGroup>
                <Label for="isRCEDiabetesTransferCheckbox">
                  <b>Check here if doing a RCE Diabetes transfer</b>
                </Label>
                <div>
                  <CustomInput
                    onClick={(e: any) => {
                      updateContext("isRCEDiabetesTransfer", e.target.checked);
                    }}
                    checked={Diagnostic.data.isRCEDiabetesTransfer}
                    type="checkbox"
                    id="isRCEDiabetesTransferCheckbox"
                    label="Yes, I'm."
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Diagnostic;
