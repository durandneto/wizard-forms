import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
import { ProfileMedicareDataInterface } from '../../../context/Profile.Contex';
import { calculateError } from '../../../utils';

const MedicareID = (props:any) => {
  const [loading, setLoading] = useState<boolean>(false)

  const { activeTab, Profile, checkMedicare, registerFunction, updateContext, Error, setError, setActiveTab }  = useContext(AppContext)
  const { tabs: { Medicare } } = Profile
  const { tabs: { PersonalInfo } } = Profile
  console.log({Medicare})
  // const [internalError, setInternalError]  = useState<string | null>(null)

  const save = useCallback(() => {
    if (Medicare.data.memberID === "" || Medicare.data.memberID === null) {
      updateContext("error", "Medicare ID can not be empty.")
    } else {
      setLoading(true)
      checkMedicare(PersonalInfo.data, Medicare.data)
      .then((r: any) => {
        updateContext("error", r.EDIErrorMessage)
        updateContext("success", r.AddtionalInfo)
        setLoading(false)
      }).catch((err: any) => {
        updateContext("success", false)
        updateContext("error", err.response.data.message)
        setLoading(false)
      })
    }
  },[Medicare.data, PersonalInfo.data, checkMedicare, updateContext])

  useEffect(() => {
    updateContext("save", save)
    return () => {
      save()
    }
  }, [PersonalInfo.data])


  const showError: boolean = useMemo(() => {
    return calculateError(Medicare.error)
  },[Medicare.error])

  if (props.table) {
    return <TableInfo {...props} />
  }

  return (
    <div className="col-xs-12">
      <Container>
      {
        (showError || Medicare.success) && !loading && (
          <Row>
              <Col>
              {
                Medicare.error && (<Alert color="danger">
                  <div dangerouslySetInnerHTML={{__html: JSON.stringify(Medicare.error)}} ></div>
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
                // error={Medicare.error}
                onChange={(e: any) => {
                  updateContext("memberID", e.target.value)
                }}
                placeholder="Medicare ID"
                id="memberID"
                value={Medicare.data.memberID}
                disabled={loading}
                appendAddon={() => <InputGroupAddon addonType="append">
                <Button color={
                    loading 
                      ? ``
                      : `secondary`
                  }  onClick={() => {
                    if (!loading) {
                       save()
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