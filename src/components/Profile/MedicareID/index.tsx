import { useContext, useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form,
  Col,
  Row,
  Alert,
  Container
 } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

import TableInfo from "./table";

const MedicareID = (props:any) => {
  const [loading, setLoading] = useState<boolean>(false)

  const { activeTab: Profile, checkMedicare, updateContext }  = useContext(AppContext)
  const { data: Medicare } = Profile.activeTab

  if (props.table) {
      return <TableInfo {...props} />
  }
  return (
    <div className="col-xs-12">
      <Container>
      {
        Medicare.error && (
          <Row>
              <Col>
                  <Alert color="danger">
                      <div dangerouslySetInnerHTML={{__html: Medicare.error}} ></div>
                  </Alert>
              </Col>
          </Row>
        )
      }
        <Row>
          <Col xs="12">
            <Form>
              <InputGroup>
                <Input 
                onChange={(e) => updateContext("memberID", e.target.value)}
                placeholder="Medicare ID" value={Medicare.memberID}  disabled={loading} />
                <InputGroupAddon addonType="append">
                  <Button color={
                      loading 
                        ? ``
                        : `secondary`
                    }  onClick={() => {
                      if (!loading) {
                        setLoading(true)
                        checkMedicare({}, Medicare)
                        .then((r: any) => {
                          updateContext("error", r.EDIErrorMessage ? r.EDIErrorMessage : null)
                          setLoading(false)
                        }).catch((err: any) => {
                          updateContext("error", err.response.data.message)
                          setLoading(false)
                        })
                      }
                  }}>
                    {
                      loading 
                        ? `Checking ...`
                        : `Check Elgibility`
                    } 
                 </Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default MedicareID;