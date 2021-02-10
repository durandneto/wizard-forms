import { TabItemInterface } from './TabHeader'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { useContext } from 'react';
import { AppContext } from '../context/App.Contex';

const MyProgress = () => {
   const { activeTab, setActivePanel, nextTab,
      prevTab, backToPrevTab, goToNextTab} = useContext(AppContext)
   console.log("MyProgress",activeTab)
  return (
   <div className="progress_container">
      <Container>
        <Row>
          <Col className="progress_left_col">
          {
               activeTab.tabs.map((tab: TabItemInterface, index: number) => {

                   const style = tab.success ? {color: '#222' } : {}
                   if (tab.id === activeTab.activeTab.id) style.color = "#409fff"
                   return (
                        <span style={style} onClick={() => {setActivePanel(tab)}} key={`profile-tab-index-${index}`} >
                           {
                              index > 0 && ` | `
                           }
                           {
                              tab.label
                           }
                           {
                              tab.data.error && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                           }
                           {
                              tab.data.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                           }
                        </span>
                  )}
               )
            }
            </Col>
            <Col className="progress_right_col">
               {
                  activeTab.activeTab.index > 0 && <Button onClick={() => {
                     setActivePanel(activeTab.tabs[activeTab.activeTab.index - 1])
                  }} type="button" className="backward"  size="sm" name="prev">Prev</Button>
               }
               {
                  prevTab && activeTab.activeTab.index === 0 && <Button onClick={backToPrevTab} type="button" className="backward" size="sm" name="prev">Back to {prevTab?.label}</Button>
               }
               {
                 activeTab.activeTab.index < activeTab.tabs.length - 1 && <Button onClick={() => {
                  setActivePanel(activeTab.tabs[activeTab.activeTab.index + 1])
               }} type="button" className="forward"  size="sm" name="save">Next</Button>
               }
               
               {
                 nextTab && activeTab.activeTab.index === activeTab.tabs.length - 1 && <Button onClick={goToNextTab} type="button" className="forward" size="sm" name="save">Got to {nextTab?.label}</Button>
               }
               {
                 !nextTab && activeTab.activeTab.index === activeTab.tabs.length - 1 && <Button type="button" className="forward" size="sm"  name="save">Submit</Button>
               } 
            </Col> 
         </Row> 
      </Container> 
   </div>
  );
}

export default MyProgress;