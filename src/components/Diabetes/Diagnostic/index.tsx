import { useContext, useState } from 'react';
import { Container, Row, CustomInput, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"

import { DiabetesDiagnosticList } from "../../../context/Diabetes.Contex"

const Diagnostic = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Diabetes, updateContext, Error }  = useContext(AppContext)
  const { Diagnostic } = Diabetes
  const { Diabetes : { Diagnostic: ComponentError }} = Error
  
    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              ComponentError && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {ComponentError}
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12">
                <Label><b>Have you been diagnosed with any of the following?</b></Label>
            </Col>
            <Col xs="12">
                <p> (check all that apply)</p>
            </Col>
            <Col xs="12">
              {
                DiabetesDiagnosticList.map((diagnostic: string) => (
                  <FormGroup check inline>
                    <Label check>
                      <Input type="checkbox" value={diagnostic} checked={Diagnostic.list.includes(diagnostic)} onChange={e => {
                        if (e.target.checked) {
                          updateContext("list", [
                            ...Diagnostic.list,
                            e.target.value
                          ])
                        } else {
                          const index = Diagnostic.list.findIndex((i: string) => i === e.target.value)
                          const newPreviousTests = Diagnostic.list
                          newPreviousTests.splice(index, 1)
                          updateContext("list", newPreviousTests)
                        }
                    }}  /> { diagnostic }
                    </Label>
                  </FormGroup>
                ))
              }
            </Col> 
          </Row>
          <Row>
            <Col xs="12">
              <br />
              <FormGroup>
                <Label for="isRCEDiabetesTransferCheckbox"><b>Check here if doing a RCE Diabetes transfer</b></Label>
                <div>
                  <CustomInput
                    onClick={(e: any) => {
                      updateContext("isRCEDiabetesTransfer", e.target.checked)
                    }}
                    checked={Diagnostic.isRCEDiabetesTransfer}
                    type="checkbox"
                    id="isRCEDiabetesTransferCheckbox"
                    label="Yes, I'm." />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        </Form>
    </div>
  )}
  
  
  export default Diagnostic