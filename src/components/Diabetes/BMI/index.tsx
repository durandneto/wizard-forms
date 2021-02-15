import { useContext, useState } from 'react';
import FormItem from  "../../Form/Item"
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"


const BMIComponent = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Diabetes, updateContext }  = useContext(AppContext)
  const { tabs: { BMI }} = Diabetes

    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              BMI.error && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {BMI.error}
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12">
              <FormItem 
                label="BMI"
                  error={BMI.error}
                  onChange={(e: any) => {
                    updateContext("value", e.target.value)
                  }}
                  placeholder="BMI"
                  id="BMI"
                  value={BMI.data.value}
                  disabled={loading}
                />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  )}
  
  
  export default BMIComponent