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
import SubmitFormModal from './components/SubmitFormModal';
import Review from './components/Review';
import TemplatePage from './components/templates';


interface RegisterFunctionInterface {
  name: string;
  _cb: () => void
}


const initialPopulate = 
  // eslint-disable-next-line array-callback-return

    (Context: Array<TabHeaderInterface>) => Context.reduce( (acc: any, c: any) => {
      acc[c.slug]= {
        ...c,
        tabs: c.tabs.reduce(
          (a: any, cc: any) => 
          { 
            a[cc.slug] = {
              ...cc,
              empty: true,
              error: null,
              save: () => {
                console.log(a[cc.slug])
              },
            }
            return a
          },{})
      }
      return acc;
  },{})

const reversePopulate = 
  // eslint-disable-next-line array-callback-return

    (Context: Array<TabHeaderInterface>) => Context.reduce( (acc: any, c: any) => {
      acc[c.slug]= {
        ...c,
        tabs: c.tabs.reduce(
          (a: any, cc: any) => 
          { 
            a[cc.slug] = cc
            return a
          },{})
      }
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

                  if (t.error) {
                    return (<div
                      onClick={() => {
                        setActivePanel(t)}} 
                      >
                    <h6>{t.label}</h6>
                    <p dangerouslySetInnerHTML={{__html: t.error}} ></p>
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
  const [tabsContext, setTabsContext] = useState<TabHeaderInterface[]>(TabsContext)
  const [ContextData, setContextData] = useState<any>(() => initialPopulate(TabsContext))
  
  const [Profile, setProfile] = useState<any>(ContextData.Profile)
  const [Diabetes, setDiabetes] = useState<any>(ContextData.Diabetes)
  const [Cardiac, setCardiac] = useState<any>(ContextData.Cardiac)
  const [Agent, setAgent] = useState<any>(ContextData.Agent)
  const [Cancer, setCancer] = useState<any>(ContextData.Cancer)
  const [Error, setError] = useState(() => generateErrors(TabsContext))
  const [isSavingData, setIsSavingData] = useState(false)
  const [isReviewingData, setIsReviewingData] = useState(false)
  const [validateSubmitForm, setValidadeSubmitForm] = useState<Array<RegisterFunctionInterface>>([])
  
  const [activeTab, setActiveTab] = useState<TabHeaderInterface>(Agent)
  const [activePanel, setCurrentPanel] = useState(Agent.tabs.Info)
  const [prevTab, setPrevTab] = useState<TabHeaderInterface>(Agent.tabs[-1] || null)
  const [nextTab, setNextTab] = useState<TabHeaderInterface>(Profile)

  const backToPrevTab = useCallback(() => {
    console.log("backToPrevTab")
    if (prevTab?.index === 0) {
      setPrevTab(tabsContext[- 1])
    } else {
      setPrevTab(tabsContext[prevTab?.index -1])
    }
    setNextTab(activeTab)
    setActiveTab(prevTab)
  },[activeTab, prevTab, setPrevTab, setNextTab, setActiveTab, tabsContext])


  const registerFunction = useCallback((f: RegisterFunctionInterface) => {
    console.log("registerFunction")
    // validateSubmitForm[f.name] = f._cb
    const newFunction = validateSubmitForm.map(fun => {
      if (fun.name === f.name) {
        fun._cb = f._cb
      }

      return fun
    })
    setValidadeSubmitForm(newFunction)
  }, [validateSubmitForm])

  const updateContext = useCallback((key:string, value: any) => {
    Object.values(ContextData).map((context: any) => {
      return {
        ...context,
        tabs: Object.values(context.tabs).map((tab: any) => {
          if (tab.id === activePanel.id) {
            console.log(context.slug, tab.slug, key, value)
            if (key === "error") {
              ContextData[context.slug].tabs[tab.slug].error = value
              ContextData[context.slug].tabs[tab.slug].empty = false
            } else {
              ContextData[context.slug].tabs[tab.slug].data[key] = value
            }
          }
          return tab
        })
      }
    })
    setContextData({...ContextData})
  }, [ContextData, activePanel.id])

  const verifyErros = useCallback(() => {
    Object.values(ContextData).map((context: any) => {
      return {
        ...context,
        tabs: Object.values(context.tabs).map((tab: any) => {
            console.log(context.slug, tab)
            if (tab.empty) {
              ContextData[context.slug].tabs[tab.slug].error = "mandatory"
            }
          return tab
        })
      }
    })
    setContextData({...ContextData})
  }, [ContextData])

  const setActivePanel = useCallback((tab: any) => {
      setActiveTab({
        ...activeTab,
        activeTab: tab
      })
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
    return ({
      nextTab,
      prevTab,
      activeTab,
      activePanel,
      setActiveTab,
      tabsContext,
      goToNextTab,
      backToPrevTab,
      Profile,
      Diabetes,
      Cardiac,
      Cancer,
      Agent,
      updateContext,
      validateAddress,
      setTabsContext,
      Error,
      setError,
      ContextData,
      setActivePanel,
      checkMedicare,
      setIsSavingData,
      setIsReviewingData,
      registerFunction,
      validateSubmitForm,
      setCurrentPanel
   })}, [
      nextTab,
      prevTab,
      activePanel,
      activeTab,
      setActiveTab,
      goToNextTab,
      backToPrevTab,
      tabsContext,
      ContextData,
      setTabsContext,
      Error,
      setError,
      Agent,
      setActivePanel,
      updateContext,
      Profile,
      Diabetes,
      Cardiac,
      Cancer,
      registerFunction,
      validateSubmitForm
   ])

  //  useEffect(() => {
  //    console.log(tabsContext)
  //   setContextData(reversePopulate(tabsContext))
  //  }, [tabsContext])

  //  useEffect(() => {
  //   setActivePanel(Object.values(activeTab.tabs)[0])
  //  }, [activeTab, setActivePanel])

   useEffect(() => {
    setProfile(ContextData.Profile)
    setDiabetes(ContextData.Diabetes)
    setCardiac(ContextData.Cardiac)
    setCancer(ContextData.Cancer)
    setAgent(ContextData.Agent)
   }, [ContextData])

  return (
   <AppContext.Provider value={ContextProvider}>
     <SubmitFormModal isOpen={isSavingData} onCancel={() => {
       setIsSavingData(false)
     }} />
     <Review isOpen={isReviewingData} toggle={() => {
       setIsReviewingData( !isReviewingData )
     }}/>

    <div id="main_container" className="visible">
      <div id="header_in">
        {/* <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div> */}
        <div id="logo_in">Form</div>
      </div>
      <ProgressHeader toggle={() => {
        verifyErros()
        setIsReviewingData( !isReviewingData )
     }}/>

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
                        
                        Object.values(ContextData).map((tab: any, index: number) => 
                         {
                           return (<li  
                            id={`profile-tab-index-${index}`}  key={`profile-tab-index-${index}`}  
                            onClick={() => {
                              setActiveTab(tab)
                              setCurrentPanel(Object.values(tab.tabs)[0])
                              // if (tab.tabs[index].index === 0) {
                              //   // setPrevTab(tabsContext[-1])
                              // }  else {
                              //   // setPrevTab(tabsContext[tab.index - 1])
                              // }
                              // setNextTab(tabsContext[tab.index + 1])

                            }} 
                            className={tab.id === activeTab?.id ? "active" : ""}
                            >
                             <span>{tab.label}</span>
                              {
                                Object.values(tab.tabs).filter((t: any) => t.error).length > 0 && 
                                <>
                                <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                                <UncontrolledPopover trigger="hover" placement="left" target={`profile-tab-index-${index}`}>
                                {({ scheduleUpdate }) => (
                                    <PopoverContent tabs={Object.values(tab.tabs)} setActivePanel={(tab2:any) => {
                                      // setActivePanel(tab2)
                                    }}/>
                                )}
                                </UncontrolledPopover>
                                </>
                              }
                              {
                                // tab.success && <>
                                // <i style={{color: "#155724"}} className="icon-ok-1"></i>
                                //   <UncontrolledPopover trigger="hover" placement="left" target={`profile-tab-index-${index}`}>
                                // {({ scheduleUpdate }) => (
                                //     <PopoverContentSuccess />
                                // )}
                                // </UncontrolledPopover>
                                // </>
                              }
                            </li>
                            )
                            }
                        )
                      } 
                          
                  </ul>
                  
                </aside>
                <div className="col-lg-10 col-sm-9">
                  <TemplatePage  />
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
