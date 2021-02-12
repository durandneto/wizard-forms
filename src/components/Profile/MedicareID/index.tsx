import { useContext, useState } from 'react';
import {
  InputGroupAddon,
  Button,
  Form,
  Col,
  Row,
  Alert,
  Container,
 } from 'reactstrap';
import { AppContext } from '../../../context/App.Contex';

import TableInfo from "./table";
import FormItem from "../../Form/Item"

const MedicareID = (props:any) => {
  const [loading, setLoading] = useState<boolean>(false)

  const { Profile, checkMedicare, updateContext, Error, setError }  = useContext(AppContext)
  const { Medicare, PersonalInfo } = Profile

  if (props.table) {
      return <TableInfo {...props} />
  }
  return (
    <div className="col-xs-12">
      <Container>
      {
        (Medicare.error || Medicare.success) && (
          <Row>
              <Col>
              {
                Medicare.error && (<Alert color="danger">
                      <div dangerouslySetInnerHTML={{__html: Medicare.error}} ></div>
                  </Alert>)
              }
              {
                Medicare.success && (<Alert color="success">
                      <div dangerouslySetInnerHTML={{__html: Medicare.success}} ></div>
                  </Alert>)
              }
              </Col>
          </Row>
        )
      }
        <Row>
          <Col xs="12">
            <Form >
            <FormItem 
              label="Medicare ID"
                error={Error.Profile.Medicare}
                onChange={(e: any) => {
                  updateContext("memberID", e.target.value)
                }}
                placeholder="Medicare ID"
                id="memberID"
                value={Medicare.memberID}
                disabled={loading}
                appendAddon={() => <InputGroupAddon addonType="append">
                <Button color={
                    loading 
                      ? ``
                      : `secondary`
                  }  onClick={() => {
                    if (!loading) {
                      if (Medicare.memberID === "") {
                        setError({
                          ...Error,
                          Profile: {
                            ...Error.Profile,
                            Medicare: "Medicare ID can not be empty."
                          }
                        })
                      } else {
                        setError({
                          ...Error,
                          Profile: {
                            ...Error.Profile,
                            Medicare: null
                          }
                        })

                        setLoading(true)
                        checkMedicare(PersonalInfo, Medicare)
                        .then((r: any) => {
                          updateContext("error", r.EDIErrorMessage)
                          updateContext("success", r.AddtionalInfo)
                          setLoading(false)
                        }).catch((err: any) => {
                          updateContext("error", err.response.data.message)
                          setLoading(false)
                        })
                      }

                    }
                }}>
                  {
                    loading 
                      ? `Checking ...`
                      : `Check Elgibility`
                  } 
               </Button>
              </InputGroupAddon>}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default MedicareID;