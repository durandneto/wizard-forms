import { TabItemInterface } from './TabHeader'
import {
  Container,
  Row,
  Col,
  Button,
  PopoverHeader,
  PopoverBody,
  UncontrolledPopover
} from 'reactstrap';
import { useContext } from 'react';
import { AppContext } from '../context/App.Contex';

const PopoverContent = ({ tab }: any) => {
    
   return (
       <>
       <PopoverHeader>Error <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i></PopoverHeader>
       <PopoverBody>
           <span dangerouslySetInnerHTML={{__html: tab.error}} ></span>
       </PopoverBody>
       </>
   );
   }

const MyProgress = () => {
   const { activeTab, activePanel, setCurrentPanel, nextTab,validateSubmitForm,
      prevTab, backToPrevTab, goToNextTab, setIsReviewingData} = useContext(AppContext)
  return (
   <div className="progress_container">
      <Container>
        <Row>
          <Col className="progress_left_col">
          {
               Object.values(activeTab.tabs).map((tab: any, index: number) => {

                   const style = tab.success ? {color: '#222' } : {}
                   if (tab.id === activePanel.id) style.color = "#409fff"
                   return (
                        <span style={style}
                           onClick={() => {
                              setCurrentPanel(tab)
                           }} key={`profile-tab-index-progress-${index}`} id={`profile-tab-index-progress-${index}`} >
                           {
                              index > 0 && ` | `
                           }
                           {
                              tab.label
                           }
                           {
                              tab.error && <>
                              <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                              <UncontrolledPopover trigger="hover" placement="left" target={`profile-tab-index-progress-${index}`}>
                              {({ scheduleUpdate }) => (
                                  <PopoverContent tab={tab}/>
                              )}
                              </UncontrolledPopover>
                              </>
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
               {/* {
                  activePanel.index > 0 && <Button onClick={() => {
                     // setCurrentPanel(activeTab.tabs[activePanel.index - 1])
                  }} type="button" className="backward"  size="sm" name="prev">Prev</Button>
               }
               {
                  prevTab && activePanel.index === 0 && <Button onClick={backToPrevTab} type="button" className="backward" size="sm" name="prev">Back to {prevTab?.label}</Button>
               } */}
               <Button
                  onClick={activePanel.save}
               type="button" color="success"   size="sm" name="save">Save</Button>
               {/* {
                 activePanel.index < activeTab.tabs.length - 1 && <Button onClick={() => {
                  activePanel.save()
                  // setCurrentPanel(activeTab.tabs[activePanel.index + 1])
               }} tpe="button" className="forward"  size="sm" name="save">Save and Next</Button>
               }
               
               {
                 nextTab && activePanel.index === activeTab.tabs.length - 1 && <Button onClick={() => {
                     activePanel.save()
                     goToNextTab()
                  }
                  } type="button" className="forward" size="sm" name="save">Save and Go to {nextTab?.label}</Button>
               }
               {
                 !nextTab && activePanel.index === activeTab.tabs.length - 1 && <Button type="button" className="forward" size="sm" onClick={() => {
                    console.log({validateSubmitForm})

                    setIsReviewingData(true)}} name="save">Save and Submit</Button>
               }  */}
            </Col> 
         </Row> 
      </Container> 
   </div>
  );
}

export default MyProgress;