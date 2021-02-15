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

  const { Cancer, updateContext, Error }  = useContext(AppContext)
  const { tabs: { FamilyMember }} = Cancer
  
    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              FamilyMember.error && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {FamilyMember.error}
                        </Alert>
                    </Col>
                </Row>
              )
            }
            {
              FamilyMember.data.list.length > 0 && FamilyMember.data.list.map((FM: CancerFamilyMemberInterface, index: number) =>(
                <Row key={`CancerFamilyMemberDataInterface-${FM.id}`}>
                  <Col xs="12">
                    <CancerFamilyMemberForm 
                      index={index}
                      error={FamilyMember.error && FamilyMember.error[index]}
                      id={`CancerFamilyMemberDataInterface-id-${FM.id}`}
                      success={false}
                      onSave={(fm: CancerFamilyMemberInterface) => {
                        FamilyMember.data.list[index] = fm;
                        updateContext("list",FamilyMember.data.list)
                      }}
                      loading={loading}
                      disabled={loading}
                      model={FM}
                      onRemove={() => {
                        FamilyMember.data.list.splice(index,1);
                        updateContext("list",FamilyMember.data.list)
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
                        ...FamilyMember.data.list,
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