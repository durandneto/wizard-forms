import { useContext, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import TableInfo from "./table"


const Address = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Profile, updateContext, validateAddress }  = useContext(AppContext)
  const { tabs: { Address } } = Profile

    if (props.table) {
        return <TableInfo {...props} />
    }
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              Address.error && (
                <Row>
                    <Col>
                        <Alert color="danger">
                            {Address.error}
                        </Alert>
                    </Col>
                </Row>
              )
            }
          <Row>
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="examplePassword">Full Address</Label>
                <Input disabled={loading} value={Address.data.streetLine} onChange={(e) => {
                  updateContext("streetLine", e.target.value)
                }}/>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="address2">Address (line 2)</Label>
                <Input disabled={loading} value={Address.data.streetLine2} id="address2" onChange={(e) => {
                  updateContext("streetLine2", e.target.value)
                }}/>
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="city">City</Label>
                <Input disabled={loading} value={Address.data.city} id="city"  onChange={(e) => {
                  updateContext("city", e.target.value)
                }}/>
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="State">State</Label>
                <Input disabled={loading} value={Address.data.state} id="State" onChange={(e) => {
                  updateContext("state", e.target.value)
                }} />
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="postalcode">Postal code</Label>
                <Input disabled={loading} value={Address.data.postalCode} id="postalcode" 
                 onChange={(e) => {
                  updateContext("postalCode", e.target.value)
                }}/>
              </FormGroup>
            </Col> 
          </Row>
          <Row>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 4, offset: 8 }}>
                <Button color={loading ? '' : "success"} onClick={() => {
                    if (!loading) {

                      setLoading(true)
                      validateAddress(Address)
                      .then((r: any) => {
                        setLoading(false)
                        updateContext("error", null)
                      })
                      .catch((err: any) => {
                        updateContext("error", err.response.data.message)
                        setLoading(false)
                      })
                    }
                     
                }} 
                >
                 {
                   loading 
                    ? `Validating ...`
                    : `Validate Address`
                 } 
                </Button>
            </Col> 
          </Row>
        </Container>
        </Form>
    </div>
  )}
  
  
  export default Address