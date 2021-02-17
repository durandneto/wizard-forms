import FormItem from  "./Item"
import { Container, Row, Col, FormGroup, Label, Input,
    Alert, Button, Card, CustomInput } from 'reactstrap';
import { CardiacFamilyMemberInterface, FamilyMemberHeartConditions, Relationship } from "../../context/Cardiac.Contex";
import { useState } from "react";

interface FormCardiacFamilyMemberInterface {
  success: boolean;
  error: string;
  onSave: (fm: CardiacFamilyMemberInterface) => void;
  onRemove: () => void;
  id: string;
  loading: boolean;
  disabled: boolean;
  model: CardiacFamilyMemberInterface;
  index: number;
}

const CardiacsFamilyMember = ({model, success, error, onSave, id, loading, disabled, index, onRemove }: FormCardiacFamilyMemberInterface) => {
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
      <Col xs="12" sm="3" >
          <FormGroup>
            <Label for={`conditionDateCardiacFormFamilyMember${id}`}>Condition Date</Label>
            <Input
              bsSize="sm"
              type="date"
              name="date"
              id={`conditionDateCardiacFormFamilyMember${id}`}
              placeholder="Condition date"
              value={fData.conditionDate}
              onChange={e => {
                onChange({
                  ...fData,
                  conditionDate: e.target.value
                })
              }}
            />
          </FormGroup>
        </Col>
      <Col xs="12" sm="3">
          <FormGroup>
            <Label for={`RelationshipCardiacFormFamilyMember${id}`}>Relationship</Label>
            <CustomInput
            value={fData.relationship || ''}
            onChange={(e:any) => {
              onChange({
                ...fData,
                relationship: e.target.value
              })
            }}
             type="select" id={`RelationshipCardiacFormFamilyMember${id}`}>
              <option value="">Select</option>
              {
                Relationship.map((s) => (
                  <option value={s.value} >{s.label}</option>
                ))
              }
            </CustomInput>
          </FormGroup>
        </Col>
      <Col xs="12" sm="3">
          <FormGroup>
            <Label for={`materialOrPaternalCardiacFormFamilyMember${id}`}>Maternal or Paternal</Label>
            <CustomInput
            value={fData.materialOrPaternal || ''}
            onChange={(e:any) => {
              onChange({
                ...fData,
                materialOrPaternal: e.target.value
              })
            }}
             type="select" id={`materialOrPaternalCardiacFormFamilyMember${id}`}>
              <option value="">Select</option>
              <option value="Maternal" >Maternal</option>
              <option value="Paternal" >Paternal</option>
            </CustomInput>
          </FormGroup>
        </Col>
        <Col xs="12" sm="3">
          <FormItem
            id={`ageCardiacFormFamilyMember-${id}`}
            label="Family Member Age" 
            value={fData.age}
            onChange={(e: any)=>{
              onChange({
                ...fData,
                age: e.target.value
              })
            }}/>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
            <Label><b>Have you been diagnosed with any of the following?</b></Label>
        </Col>
        <Col xs="12">
            <p> (check all that apply)</p>
        </Col>
        <Col xs="12">
          {
            FamilyMemberHeartConditions.map((condition: any, index: number) => (
              <FormGroup check inline key={`CardiacsFamilyMember-heart-condition-${index}`}>
                <Label check>
                  <Input
                    type="checkbox"
                    value={condition.value}
                    checked={fData.heartConditions.includes(condition.value)}
                    onChange={e => {
                      if (e.target.checked) {
                        onChange({
                          ...fData,
                          heartConditions: 
                          [
                            ...fData.heartConditions,
                            e.target.value
                          ]
                        })
                      } else {
                        const index = fData.heartConditions.findIndex((i: string) => i === e.target.value)
                        const heartConditions = fData.heartConditions
                        heartConditions.splice(index, 1)
                        onChange({
                          ...fData,
                          heartConditions
                        })
                      }
                    }}/> { condition.label }
                </Label>
              </FormGroup>
            ))
          }
        </Col> 
      </Row>
      <Row>
        <Col xs="4" >
          <br />
          <FormGroup>
            <Label for={`typeOfCardiacCardiacFormFamilyMember${id}`}>Has any type of Cardiac?</Label>
            <CustomInput
            value={fData.typeOfCardiac}
            onChange={(e:any) => {
              onChange({
                ...fData,
                typeOfCardiac: e.target.value
              })
            }}
             type="select" id={`typeOfCardiacCardiacFormFamilyMember${id}`}>
              <option value="">Select</option>
              <option value="Yes" >Yes</option>
              <option value="No" >No</option>
            </CustomInput>
          </FormGroup>
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

  export default CardiacsFamilyMember