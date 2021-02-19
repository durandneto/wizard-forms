import { useContext, useState } from "react";
import DiabetesFamilyMemberForm from "../../Form/DiabetesFamilyMember";
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
import {
  familyMemberData,
  DiabetesFamilyMemberInterface,
} from "../../../context/Diabetes.Contex";

import { guidGenerator } from "../../../utils";

const DiabetesFamilyMemberComponent = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(3);

  const { Diabetes, updateContext } = useContext(AppContext);
  const {
    tabs: { FamilyMember },
  } = Diabetes;

  if (props.table) {
    return <TableInfo {...props} />;
  }
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          {FamilyMember.data.list.length > 0 &&
            FamilyMember.data.list.map(
              (FM: DiabetesFamilyMemberInterface, index: number) => (
                <Row key={`FamilyMemberDataInterface-${FM.id}`}>
                  <Col xs="12">
                    <DiabetesFamilyMemberForm
                      index={index}
                      error={FamilyMember.error && FamilyMember.error[index]}
                      id={`FamilyMemberDataInterface-id-${FM.id}`}
                      success={false}
                      onSave={(fm: DiabetesFamilyMemberInterface) => {
                        FamilyMember.data.list[index] = fm;
                        updateContext("list", FamilyMember.data.list);
                      }}
                      loading={loading}
                      disabled={loading}
                      model={FM}
                      onRemove={() => {
                        FamilyMember.data.list.splice(index, 1);
                        updateContext("list", FamilyMember.data.list);
                        setLimit(limit + 1);
                      }}
                    />
                  </Col>
                </Row>
              )
            )}
          {limit > 0 && (
            <Row>
              <Col xs="12">
                <Button
                  onClick={() => {
                    updateContext("list", [
                      ...FamilyMember.data.list,
                      {
                        ...familyMemberData,
                        id: guidGenerator(),
                      },
                    ]);
                    setLimit(limit - 1);
                  }}
                >
                  Add Family Member
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </Form>
    </div>
  );
};

export default DiabetesFamilyMemberComponent;
