import { useContext, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, CustomInput, CardImgOverlay } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"

import { FamilyMemberHeartConditions } from "../../../context/Cardiac.Contex"

const Diagnostic = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Cardiac, updateContext, Error }  = useContext(AppContext)
  const { Diagnostic } = Cardiac
  const { Cardiac : { Diagnostic: ComponentError }} = Error
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
                FamilyMemberHeartConditions.map((condition: any) => (
                  <FormGroup check inline key={`Cardiac-FamilyMemberHeartConditions-condition-${condition.value}`}>
                    <Label check>
                      <Input
                        type="checkbox"
                        value={condition.value}
                        checked={Diagnostic.typeOfCardiac.includes(condition.value)}
                        onChange={e => {
                          if (e.target.checked) {
                            updateContext("typeOfCardiac", [
                              ...Diagnostic.typeOfCardiac,
                              e.target.value
                            ])
                          } else {
                            const index = Diagnostic.typeOfCardiac.findIndex((i: string) => i === e.target.value)
                            const newPreviousTests = Diagnostic.typeOfCardiac
                            newPreviousTests.splice(index, 1)
                            updateContext("typeOfCardiac", newPreviousTests)
                          }
                      }}
                    /> { condition.label }
                    </Label>
                  </FormGroup>
                ))
              }
            </Col> 
            </Row>
            <Row>
            <Col xs="12" sm="6" >
              <br />
                <FormGroup>
                <Label for="Cardiac-FamilyMemberHeartConditions-prescrebied-medication-1"><b>Have you ever been prescribed medications for you heart like Nitrates, Renexa or Nitrostat or any other drugs for High Blood Pressure or High Cholesterol?</b></Label>
                <div>
                  {
                    ["Yes", "No"].map((type: string, index: number) => (
                      <CustomInput
                      inline
                      value={type}
                      checked={Diagnostic.prescribedMedications === type}
                      onClick={(e: any) => {
                        updateContext("prescribedMedications", e.target.value)
                      }}
                      type="radio" id={`Cardiac-FamilyMemberHeartConditions-prescrebied-medication-${index}`} key={`Cardiac-FamilyMemberHeartConditions-prescrebied-medication-${index}`} name="Cardiac-FamilyMemberHeartConditions-prescrebied-medication-Radio" label={type} />
                    ))
                  }
                </div>
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col xs="12" sm="6" >
              <FormGroup>
                <Label for="Cardiac-FamilyMemberHeartConditions-diabetesType-1"><b>Do you have any type of diabetes?</b></Label>
                <div>
                  {
                    ["Type 1", "Type 2", "None"].map((type: string, index: number) => (
                      <CustomInput
                      inline
                      onClick={(e: any) => {
                        updateContext("diabetesType", e.target.value)
                      }}
                      value={type}
                      checked={Diagnostic.diabetesType === type}
                      type="radio" id={`Cardiac-FamilyMemberHeartConditions-diabetesType-${index}`} key={`Cardiac-FamilyMemberHeartConditions-diabetesType-${index}`} name="Cardiac-FamilyMemberHeartConditions-diabetesType-Radio" label={type} />
                    ))
                  }
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="Cardiac-FamilyMemberHeartConditions-OTC"><b>List All medications, prescribed medications and all OTC:</b></Label>
                <Input
                  onChange={(e:any) => {
                    updateContext("OTC", e.target.value)
                  }}
                  value={Diagnostic.OTC}
                  type="textarea"
                  name="text"
                  id="Cardiac-FamilyMemberHeartConditions-OTC" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="isRCECardioTransferCheckbox"><b>Check here if doing a RCE cardio transfer</b></Label>
                <div>
                  <CustomInput
                    onClick={(e: any) => {
                      updateContext("isRCECardioTransfer", e.target.checked)
                    }}
                    checked={Diagnostic.isRCECardioTransfer}
                    type="checkbox"
                    id="isRCECardioTransferCheckbox"
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