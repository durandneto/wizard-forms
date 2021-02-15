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
           <span dangerouslySetInnerHTML={{__html: tab.data.error}} ></span>
       </PopoverBody>
       </>
   );
   }

const MyProgress = () => {
   const { activeTab, setActivePanel, nextTab,
      prevTab, backToPrevTab, goToNextTab, setIsReviewingData} = useContext(AppContext)
  return (
   <div className="progress_container">
      <Container>
        <Row>
          <Col className="progress_left_col">
          
            </Col>
            <Col className="progress_right_col">
               <Button  type="button" color="success"  size="sm" name="prev">Save</Button>
               {
                 activeTab.activeTab.index < activeTab.tabs.length - 1 && <Button  type="button" color="success"  size="sm" name="save">Save/Next</Button>
               }
               
               {
                 nextTab && activeTab.activeTab.index === activeTab.tabs.length - 1 && <Button   type="button" className="forward" size="sm" name="save">Save and go to {nextTab?.label}</Button>
               }
               {
                 !nextTab && activeTab.activeTab.index === activeTab.tabs.length - 1 && <Button type="button" color="success" size="sm" onClick={() => {setIsReviewingData(true)}} name="save">Save and Submit {`>`}</Button>
               } 
            </Col> 
         </Row> 
      </Container> 
   </div>
  );
}

export default MyProgress;