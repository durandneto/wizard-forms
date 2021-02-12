import FormItem from  "./Item"
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button, Card, CustomInput } from 'reactstrap';
import { DiabetesFamilyMemberInterface } from "../../context/Diabetes.Contex";
import { useState } from "react";

interface FormDiabetesFamilyMemberInterface {
  success: boolean;
  error: string;
  onSave: (fm: DiabetesFamilyMemberInterface) => void;
  onRemove: () => void;
  id: string;
  loading: boolean;
  disabled: boolean;
  model: DiabetesFamilyMemberInterface;
  index: number;
}

const Relationship = [{value: "MOM", label:"Mom"},
{value: "DAD", label:"Dad"},
{value: "BROTHER", label:"Brother"},
{value: "SISTER", label:"Sister"},
{value: "GRANDMOTHER", label:"Grandmother"},
{value: "GRANDFATHER", label:"Grandfather"},
{value: "COUSIN", label:"Cousin"},
{value: "AUNT", label:"Aunt"},
{value: "UNCLE", label:"Uncle"},
{value: "GREATGRANDMOTHER", label:"Great Grandmother"},
{value: "GREATGRANDFATHER", label:"Great Grandfather"},
{value: "SON", label:"Son"},
{value: "DAUGHTER", label:"Daughter"},
{value: "NIECE", label:"Niece"},
{value: "NEWPHEW", label:"Nephew"},
{value: "HALF-SISTER", label:"Half-sister"},
{value: "HALF-BROTHER", label:"Half-brother"}]

const DiabetesFamilyMemberForm = ({model, success, error, onSave, id, loading, disabled, index, onRemove }: FormDiabetesFamilyMemberInterface) => {
  const [fData, onChange] = useState(model);
  
  return (
  <div className="col-xs-12" style={{marginBottom: "20px"}}>
    <Card style={{padding: "15px"}}>
    <Container >
      <Row>
        <Col xs="11">
        <h4 style={{color: "#007bff"}}>Family Member {index + 1}</h4>
        </Col>
        <Col xs="1">
          <Button outline color="secondary"
            onClick={onRemove}
          >X</Button>
        </Col>
      </Row>
        {
          error && (
            <Row>
                <Col>
                    <Alert color="danger">
                        {error}
                    </Alert>
                </Col>
            </Row>
          )
        }
      <Row>
        <Col xs="12" sm="4">
            <FormItem id={`userFirstNameFormFamilyMember-${id}`} label="First name (*)" value={fData.firstName}
            onChange={(e: any)=>{
              onChange({
                ...fData,
                firstName: e.target.value
              })
            }}/>
          </Col>
          <Col xs="12" sm="4">
            <FormItem id={`userLastNameFormFamilyMember-${id}`} label="Last name (*)"  value={fData.lastName} onChange={(e: any)=>{
              onChange({
                ...fData,
                lastName: e.target.value
              })

            }}/>
          </Col>
          <Col xs="12" sm="4">
            <Label for={`genderFormFamilyMember-${id}-male`}>Gender</Label>
            <FormGroup>
              <CustomInput  onChange={e => {
                onChange({
                ...fData,
                gender: e.target.value
              })
                }}
                bsSize="sm" type="radio" value="male" checked={fData.gender === "male"} name={`genderFormFamilyMember-${id}`} id={`genderFormFamilyMember-${id}-male`} label="Male"  inline/>
                <CustomInput  onChange={e => {
                  onChange({
                ...fData,
                gender: e.target.value
              })
                }}
                bsSize="sm" type="radio" value="female" checked={fData.gender === "female"}  name={`genderFormFamilyMember-${id}`} id={`genderFormFamilyMember-${id}-female`} label="Female"  inline/>
            </FormGroup>
          </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" >
          <FormGroup>
            <Label for="birthDate">Birth Date</Label>
            <Input
              bsSize="sm"
              type="date"
              name="date"
              id="birthDate"
              placeholder="Birth date"
              value={fData.birthDate}
              onChange={e => {
                onChange({
                  ...fData,
                  birthDate: e.target.value
                })
              }}
              
            />
          </FormGroup>
        </Col>
        <Col xs="12" sm="6">
          <FormGroup>
            <Label for={`RelationshipFormFamilyMember`}>Relationship to patient</Label>
            <CustomInput
            value={fData.relationship}
            onChange={(e:any) => {
              onChange({
                ...fData,
                relationship: e.target.value
              })
            }}
             type="select" id={`RelationshipFormFamilyMember`} name="family_member_one_cancer">
              <option value="">Select</option>
              {
                Relationship.map((s) => (
                  <option key={`relationship-diabetes-${s.value}`}  value={s.value} >{s.label}</option>
                ))
              }
            </CustomInput>
          </FormGroup>
        </Col>
          <Col xs="12" sm="6">
            <FormItem id={`DiagnosisOrSymptomFormFamilyMember-${id}`} label="Diagnosis or Symptoms (*)" value={fData.diagnosisOrSymptoms} onChange={(e: any)=>{
              onChange({
                ...fData,
                diagnosisOrSymptoms: e.target.value
              })
            }}/>
          </Col>
          <Col xs="12" sm="6">
            <FormItem 
              id={`AgeOfOnsetFormFamilyMember-${id}`}
              label="Age of onset (*)" value={fData.ageOfOnset}
              onChange={(e: any)=>{
                onChange({
                  ...fData,
                  ageOfOnset: e.target.value
                })
              }}/>
          </Col>
      </Row>
      <Row>
        <Col sm={{ size: '2', offset: 10 }}>
          <Button color="success" onClick={() => {
            onSave(fData)
          }}>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            fData !== model && <span>Unsaved data</span>
          }
        </Col>
      </Row>
    </Container>
  </Card>
</div>
  )}

  export default DiabetesFamilyMemberForm