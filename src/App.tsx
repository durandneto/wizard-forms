/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Progress } from "reactstrap"
import TabHeader, { TabItemInterface } from './components/TabHeader'
import ProgressHeader from './components/ProgressHeader'
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
    label: "Agent",
    component: (props: any) => <Diabets  {...props}/>,
    index: 0
  },
  {
    id: 2,
    label: "Profile",
    component: (props: any) => <Profile  {...props}/>,
    error: true,
    index: 1
  },
  {
    id: 3,
    label: "Cardiac",
    component: (props: any) => <Cardiac  {...props}/>,
    success: true,
    index: 2
  },
  {
    id: 4,
    label: "Cancer",
    component: (props: any) => <Cancer {...props} />,
    index: 3
  },
  {
    id: 5,
    label: "Diabets",
    component: (props: any) => <Diabets  {...props}/>,
    index: 4
  },
]

function App() {
  const [activeTab, setActiveTab] = useState<TabItemInterface>(tabs[0])
  const [nextTab, setNextTab] = useState<TabItemInterface>(tabs[1])
  const [prevTab, setPrevTab] = useState<TabItemInterface>(tabs[-1] || null)

  return (
   <React.Fragment>

    <div id="main_container" className="visible">
      <div id="header_in">
        <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div>
      </div>
      <ProgressHeader />

      {/* <TabHeader tabs={tabs} activeTab={activeTab} onClickTab={(clickedTab: TabItemInterface) => setActiveTab(clickedTab)}/> */}

      <div className="wrapper_in">
        <div className="container-fluid">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="subheader"></div>
              <div className="row">
                <aside className="col-lg-2 col-sm-3">
                  <h2>{activeTab.label}</h2>
                  <p className="lead">Little brief here to explain what is this for.</p>
                  <ul className="list">
                      {
                        tabs.map((tab: TabItemInterface, index: number) => 
                            <li onClick={() => {
                              setPrevTab(activeTab)
                              setActiveTab(tab)
                              setNextTab(tabs[index + 1])
                              if (index === 0) {
                                setPrevTab(tabs[-1])
                              } 
                            }} key={`profile-tab-index-${index}`} className={tab.id === activeTab.id ? "active" : ""}>
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
                <div className="col-lg-10 col-sm-9">
                  <activeTab.component
                    nextTab={nextTab} 
                    prevTab={prevTab} 
                    backToPrevTab={() => {
                      // setNextTab(activeTab)
                      if (prevTab.index === 0) {
                        setPrevTab(tabs[- 1])
                      } else {
                        setPrevTab(tabs[prevTab.index -1])
                      }
                      setNextTab(activeTab)
                      setActiveTab(prevTab)
                      console.log({prevTab}, {activeTab})
                    }}
                    goToNextTab={() => {

                      // setPrevTab(activeTab)
                      if (activeTab.index === 0) {
                        setPrevTab(activeTab)
                      }  else {
                        setPrevTab(tabs[activeTab.index])
                      }
                      setNextTab(tabs[nextTab.index + 1])
                      setActiveTab(nextTab)
                    }}
                  />
                </div>
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
