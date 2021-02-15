import { useContext, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, CustomInput } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"

import FormItem from "../../Form/Item"

const AgentInfo = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Agent, updateContext, Error }  = useContext(AppContext)

  const { tabs: { Info } } = Agent

  if (props.table) {
      return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              Info.error && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {Info.error}
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12" sm="6">
              <FormItem
                id={`agentUrlFormFamilyMember-url`}
                label="Recording URL" 
                value={Info.data.url}
                onChange={(e: any)=>{
                  updateContext("url", e.target.value)
                }}/>
            </Col>
            <Col xs="12" sm="6">
              <FormItem
                id={`agentNameFormFamilyMember-name`}
                label="Agent name" 
                value={Info.data.name}
                onChange={(e: any)=>{
                  updateContext("name", e.target.value)
                }}/>
            </Col> 
            </Row>
        </Container>
        </Form>
    </div>
  )}
  
  
  export default AgentInfo