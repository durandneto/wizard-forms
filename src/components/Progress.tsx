import React, { useState } from 'react';
import { TabItemInterface } from './TabHeader'
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Alert,
  Progress,
  Container,
  Row,
  Col,
  ToastBody
} from 'reactstrap';

const MyProgress = (props: any) => {

  return (
   <div className="progress_container">
      <Container>
        <Row>
          <Col className="progress_left_col">
          {
               props.tabs.map((tab: TabItemInterface, index: number) => {

                   const style = tab.success ? {color: '#222' } : {}
                   if (tab.id === props.activeTab.id) style.color = "#409fff"
                   return (
                        <span style={style} onClick={() => props.setTab(index)} key={`profile-tab-index-${index}`} >
                           {
                              index > 0 && `| `
                           }
                           {
                              tab.label
                           }
                           {
                              tab.error && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                           }
                           {
                              tab.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                           }
                        </span>
                  )}
               )
            }
            </Col>
            <Col className="progress_right_col">
               {
                  props.currentIndex > 0 && <button onClick={props.onPrev} type="button" className="backward"  name="prev">Prev</button>
               }
               {
                  props.prevTab?.label !==  props.tabs[props.currenIndex]?.label && props.currentIndex === 0 && <button onClick={props.backToPrevTab} type="button" className="backward"  name="prev">Back to {props.prevTab.label}</button>
               }
               {
                 props.currentIndex < props.tabs.length - 1 && <button onClick={props.onNext} type="button" className="forward"  name="save">Next</button>
               }
               {
                 props.nextTab && props.currentIndex === props.tabs.length - 1 && <button onClick={props.goToNextTab} type="button" className="forward"  name="save">Got to {props.nextTab.label}</button>
               }
               {
                 !props.nextTab && props.currentIndex === props.tabs.length - 1 && <button type="button" className="forward"  name="save">Submit</button>
               }
            </Col> 
         </Row> 
      </Container> 
   </div>
  );
}

export default MyProgress;