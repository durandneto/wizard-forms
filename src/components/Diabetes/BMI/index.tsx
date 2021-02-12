import { useContext, useState } from 'react';
import FormItem from  "../../Form/Item"
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"


const BMIComponent = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Diabetes, updateContext, Error }  = useContext(AppContext)
  const { BMI } = Diabetes

  console.log("BMI", {BMI})
    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              Error.Diabetes.BMI && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {Error.Diabetes.BMI}
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12">
              <FormItem 
                label="BMI"
                  error={Error.Diabetes.BMI}
                  onChange={(e: any) => {
                    updateContext("value", e.target.value)
                  }}
                  placeholder="BMI"
                  id="BMI"
                  value={BMI.value}
                  disabled={loading}
                />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  )}
  
  
  export default BMIComponent