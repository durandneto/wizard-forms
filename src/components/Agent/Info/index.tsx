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
  CustomInput,
} from "reactstrap";
import { AppContext } from "../../../context/App.Contex";
import TableInfo from "./table";

import FormItem from "../../Form/Item";
import { calculateError } from "../../../utils";

const AgentInfo = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { Agent, updateContext } = useContext(AppContext);

  const {
    tabs: { Info },
  } = Agent;

  const showError: boolean = useMemo(() => {
    return calculateError(Info.error);
  }, [Info.error]);

  const save = useCallback(() => {
    const error: {
      url: null | string;
      name: null | string;
    } = {
      url: null,
      name: null,
    };

    if (Info.data.url === "") {
      error.url = "Url can not be empty.";
    }

    if (Info.data.name === "") {
      error.name = "Name can not be empty.";
    }

    updateContext("error", error);
    updateContext("success", !calculateError(error));
  }, [Info.data]);

  useEffect(() => {
    updateContext("save", save);
  }, [Info.data]);

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
                id={`agentUrlFormFamilyMember-url`}
                label="Recording URL"
                value={Info.data.url}
                error={Info.error?.url}
                onChange={(e: any) => {
                  updateContext("url", e.target.value);
                }}
              />
            </Col>
            <Col xs="12" sm="6">
              <FormItem
                id={`agentNameFormFamilyMember-name`}
                label="Agent name"
                value={Info.data.name}
                error={Info.error?.name || null}
                onChange={(e: any) => {
                  updateContext("name", e.target.value);
                }}
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default AgentInfo;
