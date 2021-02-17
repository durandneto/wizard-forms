import { useCallback, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, CustomInput, CardImgOverlay } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"

import { FamilyMemberHeartConditions, DiagnosedCancerList, TreatmentCancerList, CancerDiagnosticInterface } from "../../../context/Cancer.Contex"
import { calculateError } from '../../../utils';

const Diagnostic = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Cancer, updateContext }  = useContext(AppContext)
  const { tabs: { Diagnostic }} = Cancer


  const save = useCallback(() => {
    const error: CancerDiagnosticInterface = {
      indicationTest: null,
      isDiagnosed: null,
      isRCECancerTransfer: null,
      treatment: null,
      OTC: null,
    }
    
    if (Diagnostic.data.indicationTest === "") {
      error.indicationTest = "Indicated test can not be empty."
    }

    if (Diagnostic.data.OTC === "") {
      error.OTC = "OTC can not be empty."
    }

    updateContext("error", error)
    updateContext("success", !calculateError(error))

  },[Diagnostic.data])

  useEffect(() => {
    updateContext("save", save)
    return () => {
      save()
    }
  }, [Diagnostic.data])

  if (props.table) {
      return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              calculateError(Diagnostic.error) && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            error
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12">
             <FormGroup>
                <Label for="Cancer-FamilyMemberHeartConditions-indicationTest-1"><b>Indication for testing selection</b></Label>
                <div>
                  {
                    DiagnosedCancerList.map((type: any, index: number) => (
                      <CustomInput
                      inline
                      onClick={(e: any) => {
                        updateContext("indicationTest", e.target.value)
                      }}
                      value={type.value}
                      checked={Diagnostic.data.indicationTest === type.value}
                      type="radio" id={`Cancer-FamilyMemberHeartConditions-indicationTest-${index}`} key={`Cancer-FamilyMemberHeartConditions-indicationTest-${index}`} name="Cancer-FamilyMemberHeartConditions-indicationTest-Radio" label={type.label} />
                    ))
                  }
                </div>
              </FormGroup>
            </Col> 
            </Row>
          <Row>
            <Col xs="12">
             <FormGroup>
                <Label for="Cancer-FamilyMemberHeartConditions-isDiagnosed-1"><b>Have you ever been diagnosed with any type of cancer?</b></Label>
                <div>
                  {
                    ["Yes", "No"].map((type: string, index: number) => (
                      <CustomInput
                      inline
                      onClick={(e: any) => {
                        updateContext("isDiagnosed", e.target.value)
                      }}
                      value={type}
                      checked={Diagnostic.data.isDiagnosed === type}
                      type="radio" id={`Cancer-FamilyMemberHeartConditions-isDiagnosed-${index}`} key={`Cancer-FamilyMemberHeartConditions-isDiagnosed-${index}`} name="Cancer-FamilyMemberHeartConditions-isDiagnosed-Radio" label={type} />
                    ))
                  }
                </div>
              </FormGroup>
            </Col> 
            </Row>
          <Row>
            <Col xs="12">
             <FormGroup>
                <Label for="Cancer-FamilyMemberHeartConditions-treatment-1"><b>Previous or current treatment</b></Label>
                <div>
                  {
                    TreatmentCancerList.map((treatment: any, index: number) => (
                      <CustomInput
                      inline
                      onClick={(e: any) => {
                        updateContext("treatment", e.target.value)
                      }}
                      value={treatment.value}
                      checked={Diagnostic.data.treatment.value}
                      type="radio" id={`Cancer-FamilyMemberHeartConditions-treatment-${index}`} key={`Cancer-FamilyMemberHeartConditions-treatment-${index}`} name="Cancer-FamilyMemberHeartConditions-treatment-Radio" label={treatment.label} />
                    ))
                  }
                </div>
              </FormGroup>
            </Col> 
            </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="Cancer-FamilyMemberHeartConditions-OTC"><b>List All medications, prescribed medications and all OTC:</b></Label>
                <Input
                  onChange={(e:any) => {
                    updateContext("OTC", e.target.value)
                  }}
                  value={Diagnostic.data.OTC}
                  type="textarea"
                  name="text"
                  id="Cancer-FamilyMemberHeartConditions-OTC" />
              </FormGroup>
            </Col>
          </Row> 
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="isRCECancerTransferCheckbox"><b>Check here if doing a RCE Cancer transfer</b></Label>
                <div>
                  <CustomInput
                    onClick={(e: any) => {
                      updateContext("isRCECancerTransfer", e.target.checked)
                    }}
                    checked={Diagnostic.data.isRCECancerTransfer}
                    type="checkbox"
                    id="isRCECancerTransferCheckbox"
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