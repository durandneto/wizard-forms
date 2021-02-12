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
import { PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';

const reversePopulate = 
  // eslint-disable-next-line array-callback-return

    (Context: Array<TabHeaderInterface>) => Context.reduce( (acc: any, c: any) => {
      acc[c.slug]= c.tabs.reduce(
        (a: any, cc: any) => 
        { 
          a[cc.slug] = cc.data
          return a
        },{})
      return acc;
  },{})

const generateErrors = 
  // eslint-disable-next-line array-callback-return
  (Context: Array<TabHeaderInterface>) => Context.reduce( (acc: any, c: any) => {
        acc[c.slug]= c.tabs.reduce(
          (a: any, cc: any) => 
          { 
            a[cc.slug] =  null 
            return a
          },{})
        return acc;
    },{})


    const PopoverContent = ({ tabs, setActivePanel }: any) => {
    
      return (
          <>
          <PopoverHeader>Error <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i></PopoverHeader>
          <PopoverBody>
              {
                // eslint-disable-next-line array-callback-return
                tabs.map((t: any) => {

                  if (t.data.error) {
                    return (<div onClick={() => {setActivePanel(t)}} >
                    <h6>{t.label}</h6>
                    <p dangerouslySetInnerHTML={{__html: t.data.error}} ></p>
                  </div>)
                  }
                })
              }
          </PopoverBody>
          </>
      );
      }
  
const PopoverContentSuccess = (props: any) => {
    
    return (
        <>
        <PopoverHeader>Success <i style={{color: "#155724"}} className="icon-ok-1"></i></PopoverHeader>
        <PopoverBody>
            This section was successfully Validated
        </PopoverBody>
        </>
    );
  }
  
function App() {
  const [activeTab, setActiveTab] = useState<TabHeaderInterface>(TabsContext[0])
  const [nextTab, setNextTab] = useState<TabHeaderInterface>(TabsContext[1])
  const [prevTab, setPrevTab] = useState<TabHeaderInterface>(TabsContext[-1] || null)
  const [tabsContext, setTabsContext] = useState<TabHeaderInterface[]>(TabsContext)
  const [ContextData, setContextData] = useState<any>(() => reversePopulate(TabsContext))
  const [Profile, setProfile] = useState<any>(ContextData.Profile)
  const [Diabetes, setDiabetes] = useState<any>(ContextData.Diabetes)
  const [Cardiac, setCardiac] = useState<any>(ContextData.Cardiac)
  const [Cancer, setCancer] = useState<any>(ContextData.Cancer)
  const [Error, setError] = useState(() => generateErrors(TabsContext))
  const backToPrevTab = useCallback(() => {
    if (prevTab?.index === 0) {
      setPrevTab(tabsContext[- 1])
    } else {
      setPrevTab(tabsContext[prevTab?.index -1])
    }
    setNextTab(activeTab)
    setActiveTab(prevTab)
  },[activeTab, prevTab, setPrevTab, setNextTab, setActiveTab, tabsContext])

  const updateContext = useCallback((key:string, value: any) => {
    console.log("update context",key, value)
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
      Profile,
      Diabetes,
      Cardiac,
      Cancer,
      updateContext,
      validateAddress,
      setTabsContext,
      Error,
      setError,
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
      Error,
      setError,
      setActivePanel,
      updateContext,
      Profile,
      Diabetes,
      Cardiac,
      Cancer
   ])

   useEffect(() => {
    setContextData(reversePopulate(tabsContext))
   }, [tabsContext])

   useEffect(() => {
    setProfile(ContextData.Profile)
    setDiabetes(ContextData.Diabetes)
    setCardiac(ContextData.Cardiac)
    setCancer(ContextData.Cancer)
   }, [ContextData])

   console.log("render",{Error}, {tabsContext})
  return (
   <AppContext.Provider value={ContextProvider}>

    <div id="main_container" className="visible">
      <div id="header_in">
        {/* <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div> */}
        <div id="logo_in">Form</div>
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
                              return (<li  id={`profile-tab-index-${index}`}  key={`profile-tab-index-${index}`}  onClick={() => {
                              setActiveTab(tab)
                              if (tab.index === 0) {
                                setPrevTab(tabsContext[-1])
                              }  else {
                                setPrevTab(tabsContext[tab.index - 1])
                              }
                              setNextTab(tabsContext[tab.index + 1])

                            }} className={tab.id === activeTab?.id ? "active" : ""}>
                             <span>{tab.label}</span>
                              {
                                tab.tabs.filter((t: TabItemInterface) => t.data.error).length > 0 && 
                                <>
                                <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                                <UncontrolledPopover trigger="hover" placement="left" target={`profile-tab-index-${index}`}>
                                {({ scheduleUpdate }) => (
                                    <PopoverContent tabs={tab.tabs} setActivePanel={(tab2:any) => {
                                      // setActivePanel(tab2)
                                    }}/>
                                )}
                                </UncontrolledPopover>
                                </>
                              }
                              {
                                tab.success && <>
                                <i style={{color: "#155724"}} className="icon-ok-1"></i>
                                  <UncontrolledPopover trigger="hover" placement="left" target={`profile-tab-index-${index}`}>
                                {({ scheduleUpdate }) => (
                                    <PopoverContentSuccess />
                                )}
                                </UncontrolledPopover>
                                </>
                              }
                            </li>
                            )
                            }
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
