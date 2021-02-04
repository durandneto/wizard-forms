import { Fragment, useState } from "react"
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { TabItemInterface } from '../TabHeader'
import PersonalInfo from "./personal-info.component"
import Address from "./address.component"
import MedicareID from "./medical.component"
import PhysicianInformation from "./physician-information.component"

import Progress from "../Progress"

const Tabs: Array<TabItemInterface> = [
   {
      id: 1,
      label: "Personal Information.",
      component: <PersonalInfo />,
      success: true,
      index: 0
   },
   {
      id: 2,
      label: "Address",
      component: <Address />,
      error: true,
      index: 1
   },
   {
      id: 3,
      label: "Medicare ID",
      component: <MedicareID />,
      index: 2
   },
   {
      id: 4,
      label: "Primary Care",
      component: <PhysicianInformation />,
      index: 3
   },
]

const Profile = (props: any) => {
   const [tabIndex, setTab] = useState<number>(0)
   const activeTab: TabItemInterface = Tabs[tabIndex]
   return (
      <div id="wizard_container">
         <div id="top-wizard">
            <Container>
               <Row>
                  <Col>
                     <Progress
                        tabs={Tabs}
                        activeTab={activeTab}
                        nextTab={props.nextTab}
                        prevTab={props.prevTab}
                        setTab={setTab}
                        currentIndex={tabIndex}
                        onNext={() => {
                           setTab(tabIndex + 1)
                        }}
                        goToNextTab={props.goToNextTab}
                        backToPrevTab={props.backToPrevTab}
                        onPrev={() => {
                           setTab(tabIndex - 1)
                        }}
                     />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <h3>{activeTab.label}</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                  </Col>
               </Row>
            </Container>
         </div>
         <div id="middle-wizard">
            {activeTab.component}
         </div>
         <div id="bottom-wizard">
         </div>
      </div>
)}


export default Profile