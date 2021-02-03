/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import TabHeader, { TabItemInterface } from './components/TabHeader'
import Profile from './components/Profile'
import Cancer from './components/Cancer'
import Cardiac from './components/Cardiac'
import Diabets from './components/Diabets'

import "./css/animate.min.css"
import "./css/bootstrap.min.css"
import "./css/style.css"
import "./css/icon_fonts/css/all_icons_min.css"
import "./css/magnific-popup.min.css"
import "./css/skins/square/yellow.css"

import "./css/custom.css"


const tabs: Array<TabItemInterface> = [
  {
    id: 1,
    label: "Agent 1/1",
    component: <Diabets />,
  },
  {
    id: 2,
    label: "Profile 2/3",
    component: <Profile />,
    error: true
  },
  {
    id: 3,
    label: "Cardiac 3/3",
    component: <Cardiac />,
    success: true
  },
  {
    id: 4,
    label: "Cancer 0/5",
    component: <Cancer />
  },
  {
    id: 5,
    label: "Diabets 1/2",
    component: <Diabets />,
  },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabItemInterface>(tabs[0])

  return (
   <React.Fragment>

    <div id="main_container" className="visible">
      <div id="header_in">
        <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div>
      </div>
      <TabHeader tabs={tabs} activeTab={activeTab} onClickTab={(clickedTab: TabItemInterface) => setActiveTab(clickedTab)}/>

      <div className="wrapper_in">
        <div className="container-fluid">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="subheader"></div>
              <div className="row">
                  {activeTab.component}
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   </React.Fragment>
  );
}

export default App;
