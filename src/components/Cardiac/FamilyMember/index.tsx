import { useContext, useState } from "react";
import CardiacFamilyMemberForm from "../../Form/CardiacFamilyMember";
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
  CardiacFamilyMemberInterface,
} from "../../../context/Cardiac.Contex";
import { guidGenerator } from "../../../utils";

const CardiacFamilyMemberComponent = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(3);

  const { Cardiac, updateContext } = useContext(AppContext);
  const {
    tabs: { FamilyMember },
  } = Cardiac;

  if (props.table) {
    return <TableInfo {...props} />;
  }
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          {FamilyMember.data.list.length > 0 &&
            FamilyMember.data.list.map(
              (FM: CardiacFamilyMemberInterface, index: number) => (
                <Row key={`CardiacFamilyMemberDataInterface-${FM.id}`}>
                  <Col xs="12">
                    <CardiacFamilyMemberForm
                      index={index}
                      error={FamilyMember.error && FamilyMember.error[index]}
                      id={`CardiacFamilyMemberDataInterface-id-${FM.id}`}
                      success={false}
                      onSave={(fm: CardiacFamilyMemberInterface) => {
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

export default CardiacFamilyMemberComponent;
