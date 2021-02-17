import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,
    Alert, Button } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';
import { ProfileAddressDataInterface } from '../../../context/Profile.Contex';
import { calculateError } from '../../../utils';
import TableInfo from "./table"


const Address = (props:any) => {

  const [loading, setLoading] = useState<boolean>(false)

  const { Profile, updateContext, validateAddress }  = useContext(AppContext)
  const { tabs: { Address } } = Profile

  const save = useCallback(() => {
    const error: ProfileAddressDataInterface = {
      streetLine: null,
      streetLine2: null,
      city: null,
      state: null,
      postalCode: null,
    }

    if (Address.data.streetLine === null || Address.data.streetLine === "") {
      error.streetLine = "Street line can not be empty."
    }

    if (Address.data.postalCode === null || Address.data.postalCode === "") {
      error.postalCode = "Postal Code can not be empty."
    }
     
    if (Address.data.city === null || Address.data.city === "") {
      error.city = "City can not be empty."
    }
     
    if (Address.data.state === null || Address.data.state === "") {
      error.state = "State can not be empty."
    }

    updateContext("error", error)
    updateContext("success", !calculateError(error))

  },[Address.data, updateContext])

  useEffect(() => {
    updateContext("save", save)
    return () => {
      save()
    }
  }, [Address.data])

  const showError: boolean = useMemo(() => {
    return calculateError(Address.error)
  },[Address.error])

  if (props.table) {
    return <TableInfo {...props} />
}
console.log("Address", {Address})
    return (
    <div className="col-xs-12">
      <Form>
        <Container>
            {
              showError && (
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
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="examplePassword">Full Address</Label>
                <Input 
                invalid={Address.error?.streetLine}
                disabled={loading} value={Address.data.streetLine} onChange={(e) => {
                  updateContext("streetLine", e.target.value)
                }}/>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup className="position-relative">
                <Label for="address2">Address (line 2)</Label>
                <Input
                
                disabled={loading} value={Address.data.streetLine2} id="address2" onChange={(e) => {
                  updateContext("streetLine2", e.target.value)
                }}/>
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="city">City</Label>
                <Input
                invalid={Address.error?.city}
                disabled={loading} value={Address.data.city} id="city"  onChange={(e) => {
                  updateContext("city", e.target.value)
                }}/>
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="State">State</Label>
                <Input
                invalid={Address.error?.state}
                disabled={loading} value={Address.data.state} id="State" onChange={(e) => {
                  updateContext("state", e.target.value)
                }} />
              </FormGroup>
            </Col> 
            <Col xs="12" sm="4" >
              <FormGroup className="position-relative">
                <Label for="postalcode">Postal code</Label>
                <Input
                invalid={Address.error?.postalCode}
                disabled={loading} value={Address.data.postalCode} id="postalcode" 
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
                      validateAddress(Address.data)
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