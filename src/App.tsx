/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { TabHeaderInterface, TabItemInterface } from './components/TabHeader'
import ProgressHeader from './components/ProgressHeader';
import { TabsContext } from "./context/Tabs.Context"
import { AppContext } from "./context/App.Contex"

import "./css/animate.min.css"
import "./css/bootstrap.min.css"
import "./css/style.css"
import "./css/icon_fonts/css/all_icons_min.css"
import "./css/magnific-popup.min.css"
import "./css/skins/square/yellow.css"

import "./css/custom.css"

import { validateAddress, checkMedicare } from "./actions/profile"

function App() {
  const [activeTab, setActiveTab] = useState<TabHeaderInterface>(TabsContext[0])
  const [nextTab, setNextTab] = useState<TabHeaderInterface>(TabsContext[1])
  const [prevTab, setPrevTab] = useState<TabHeaderInterface>(TabsContext[-1] || null)
  const [tabsContext, setTabsContext] = useState<TabHeaderInterface[]>(TabsContext)

  // const [Profile, setProfile] = useState<ProfileInterface>(ProfileData)
 
  const backToPrevTab = useCallback(() => {
    console.log("backToPrevTab")
    // setNextTab(activeTab)
    if (prevTab?.index === 0) {
      setPrevTab(tabsContext[- 1])
    } else {
      setPrevTab(tabsContext[prevTab?.index -1])
    }
    setNextTab(activeTab)
    setActiveTab(prevTab)
  },[activeTab, prevTab, setPrevTab, setNextTab, setActiveTab, tabsContext])

  const updateContext = useCallback((key:string, value: any) => {
    setTabsContext((c: any) =>   c.map((context: any) => {
      if (context.id === activeTab.id) {
        return {
          ...context,
          tabs: context.tabs.map((t: any) => {
            if (t.id === activeTab.activeTab.id) {
              t.data = {
                ...t.data,
                [key]: value
              }
            } 
            return t
          })
        }
      } else {
        return context
      }
    }))
  }, [setTabsContext, activeTab])

  const setActivePanel = useCallback((tab: any) => {

      setActiveTab({
        ...activeTab,
        activeTab: tab
      })
      console.log('setActivePanel', tab)
  }, [activeTab, setActiveTab])

  const goToNextTab = useCallback(() => {
    console.log("goToNextTab")
      // setPrevTab(activeTab)
      if (activeTab?.index === 0) {
        setPrevTab(activeTab)
      }  else {
        setPrevTab(tabsContext[activeTab?.index])
      }
      setNextTab(tabsContext[nextTab?.index + 1])
      setActiveTab(nextTab)
  },[activeTab, nextTab, setPrevTab, setNextTab, setActiveTab, tabsContext])

  const ContextProvider = useMemo(() => {
    console.log("ContextProvider")
    return ({
      nextTab,
      prevTab,
      activeTab,
      setActiveTab,
      tabsContext,
      goToNextTab,
      backToPrevTab,
      // Profile,
      // setProfile,
      updateContext,
      validateAddress,
      setTabsContext,
      setActivePanel,
      checkMedicare
   })}, [
      nextTab,
      prevTab,
      activeTab,
      setActiveTab,
      goToNextTab,
      backToPrevTab,
      tabsContext,
      setTabsContext,
      setActivePanel,
      updateContext,
      // Profile,
      // setProfile
   ])

  //  useEffect(() => {
  //   debugger
  //   const newTabsContext = tabsContext
  //   // newTabsContext.Profile = Profile
  //   setTabsContext(newTabsContext)
  //  }, [Profile, tabsContext, activeTab])

   console.log("render")
  return (
   <AppContext.Provider value={ContextProvider}>

    <div id="main_container" className="visible">
      <div id="header_in">
        <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div>
      </div>
      <ProgressHeader />

      <div className="wrapper_in">
        <div className="container-fluid">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="subheader"></div>
              <div className="row">
                <aside className="col-lg-2 col-sm-3">
                  <h2>{activeTab?.label}</h2>
                  <p className="lead">Little brief here to explain what is this for.</p>
                  <ul className="list">
                      {
                        tabsContext.map((tab: any, index: number) => 
                            {
                              console.log("tab", tab)
                              return (<li onClick={() => {
                              setActiveTab(tab)
                              if (tab.index === 0) {
                                setPrevTab(tabsContext[-1])
                              }  else {
                                setPrevTab(tabsContext[tab.index - 1])
                              }
                              setNextTab(tabsContext[tab.index + 1])

                            }} key={`profile-tab-index-${index}`} className={tab.id === activeTab?.id ? "active" : ""}>
                              {tab.label}
                              {
                                tab.tabs.filter((t: TabItemInterface) => t.data.error).length > 0 && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                              }
                              {
                                tab.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                              }
                            </li>)}
                        )
                      }
                  </ul>
                  
                </aside>
                <div className="col-lg-10 col-sm-9">
                  {
                   activeTab?.component ? <activeTab.component /> : <span>Loading... </span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   </AppContext.Provider>
  );
}

export default App;
