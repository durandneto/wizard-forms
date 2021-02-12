import { useContext, useState } from 'react';
import CancerFamilyMemberForm from  "../../Form/CancerFamilyMember"
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"
import { familyMemberData, CancerFamilyMemberInterface } from '../../../context/Cancer.Contex';
import { guidGenerator } from '../../../utils';


const CancerFamilyMemberComponent = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(3)

  const { Cancer, updateContext, Error, setError }  = useContext(AppContext)
  const { FamilyMember } = Cancer
  console.log("FamilyMember", FamilyMember)
    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              Error.Cancer.FamilyMember && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {Error.Cancer.FamilyMember}
                        </Alert>
                    </Col>
                </Row>
              )
            }
            {
              FamilyMember.list.length > 0 && FamilyMember.list.map((FM: CancerFamilyMemberInterface, index: number) =>(
                <Row key={`CancerFamilyMemberDataInterface-${FM.id}`}>
                  <Col xs="12">
                    <CancerFamilyMemberForm 
                      index={index}
                      error={Error.Cancer.FamilyMember && Error.Cancer.FamilyMember[index]}
                      id={`CancerFamilyMemberDataInterface-id-${FM.id}`}
                      success={false}
                      onSave={(fm: CancerFamilyMemberInterface) => {
                        console.log("CancerFamilyMemberForm | onchange", {fm},{index})
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
  
  
  export default CancerFamilyMemberComponent