import { useContext, useState } from 'react';
import CardiacFamilyMemberForm from  "../../Form/CardiacFamilyMember"
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"
import { familyMemberData, CardiacFamilyMemberInterface } from '../../../context/Cardiac.Contex';
import { guidGenerator } from '../../../utils';


const CardiacFamilyMemberComponent = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(3)

  const { Cardiac, updateContext, Error, setError }  = useContext(AppContext)
  const { FamilyMember } = Cardiac
  console.log("FamilyMember", FamilyMember)
    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              Error.Cardiac.FamilyMember && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {Error.Cardiac.FamilyMember}
                        </Alert>
                    </Col>
                </Row>
              )
            }
            {
              FamilyMember.list.length > 0 && FamilyMember.list.map((FM: CardiacFamilyMemberInterface, index: number) =>(
                <Row key={`CardiacFamilyMemberDataInterface-${FM.id}`}>
                  <Col xs="12">
                    <CardiacFamilyMemberForm 
                      index={index}
                      error={Error.Cardiac.FamilyMember && Error.Cardiac.FamilyMember[index]}
                      id={`CardiacFamilyMemberDataInterface-id-${FM.id}`}
                      success={false}
                      onSave={(fm: CardiacFamilyMemberInterface) => {
                        console.log("CardiacFamilyMemberForm | onchange", {fm},{index})
                        FamilyMember.list[index] = fm;
                        updateContext("list",FamilyMember.list)
                      }}
                      loading={loading}
                      disabled={loading}
                      model={FM}
                      onRemove={() => {
                        FamilyMember.list.splice(index,1);
                        updateContext("list",FamilyMember.list)
                        setLimit(limit + 1)
                      }}
                    />
                  </Col>
                </Row>
              ))
            }
            {
              ( limit > 0 ) && (
                <Row>
                  <Col xs="12">
                    <Button onClick={() => {
                      updateContext("list", [
                        ...FamilyMember.list,
                        {
                          ...familyMemberData,
                          id: guidGenerator()
                        }
                      ])
                      setLimit(limit - 1)
                    }}>Add Family Member</Button>
                  </Col>
                </Row>
              )
            }
        </Container>
      </Form>
    </div>
  )}
  
  
  export default CardiacFamilyMemberComponent