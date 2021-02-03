import { Fragment, useState } from "react"
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { TabItemInterface } from '../TabHeader'
import DummyComponent from "../DummyComponent"

const Tabs: Array<TabItemInterface> = [
   {
      id: 1,
      label: "Diagnostic",
      component: <DummyComponent />,
      success: true
   },
   {
      id: 2,
      label: "Medications",
      component: <DummyComponent />,
      success: true
   },
   {
      id: 3,
      label: "Family Member",
      component: <DummyComponent />,
      success: true
   },
]

const Cardiac = () => {
   const [tabIndex, setTab] = useState<number>(0)
   const activeTab: TabItemInterface = Tabs[tabIndex]
   return (
   <Fragment>
      <aside className="col-xl-3 col-lg-4">
         <h2>Cardiac Section.</h2>
         <p className="lead">Little brief here to explain what is this for.</p>
         <ul className="list">
            {
               Tabs.map((tab: TabItemInterface, index: number) => 
                  <li onClick={() => setTab(index)} key={`Cardiac-tab-index-${index}`} className={index === tabIndex ? "active" : ""}>
                     {tab.label}
                     {
                        tab.error && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                     }
                     {
                        tab.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                     }
                  </li>
               )
            }
         </ul>
         
      </aside>
      <div className="col-xl-9 col-lg-8">
         <div id="wizard_container">
            <div id="top-wizard">
            <Container>
                  <Row>
                     <Col>
                        <Breadcrumb>
                           <BreadcrumbItem>Cardiac</BreadcrumbItem>
                           <BreadcrumbItem active>{activeTab.label}</BreadcrumbItem>
                        </Breadcrumb>
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
               <button  type="button" className="forward" name="save">Save</button>
            </div>
         </div>
      </div>
   </Fragment>
)}


export default Cardiac