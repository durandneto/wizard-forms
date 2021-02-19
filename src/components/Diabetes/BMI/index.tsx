import { useCallback, useContext, useEffect, useState } from "react";
import FormItem from "../../Form/Item";
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
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import TableInfo from "./table";
import { DiabetesDiagnosticDataInterface } from "../../../context/Diabetes.Contex";
import { calculateError } from "../../../utils";

const BMIComponent = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { Diabetes, updateContext } = useContext(AppContext);
  const {
    tabs: { BMI },
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

    if (BMI.data.value === "") {
      error.BMI.value = "BMI can not be empty.";
    }

    updateContext("error", error.BMI);
    updateContext("success", !calculateError(error.BMI));
  }, [BMI.data]);

  useEffect(() => {
    updateContext("save", save);
    return () => {
      save();
    };
  }, [BMI.data]);

  if (props.table) {
    return <TableInfo {...props} />;
  }

  console.log({ BMI });
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          <Row>
            <Col xs="12">
              <FormItem
                label="BMI"
                error={BMI.error?.value}
                onChange={(e: any) => {
                  updateContext("value", e.target.value);
                }}
                placeholder="BMI"
                id="BMI"
                value={BMI.data.value}
                disabled={loading}
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default BMIComponent;
