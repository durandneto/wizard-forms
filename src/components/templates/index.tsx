import { useContext } from "react"
import { Container, Row, Col } from 'reactstrap';
import { AppContext } from "../../context/App.Contex";

import Progress from "../Progress" 

const TPage = () => {

   const { activePanel } = useContext(AppContext)
   return (
      <div id="wizard_container">
         <div id="top-wizard">
            <Container>
               <Row>
                  <Col>
                     <Progress />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <h3>{activePanel.label}</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                  </Col>
               </Row>
            </Container>
         </div>
         <div id="middle-wizard">
            <activePanel.component />
         </div>
         <div id="bottom-wizard">
         </div>
      </div>
)}


export default TPage