/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TabHeaderInterface, TabItemInterface } from "./components/TabHeader";
import ProgressHeader from "./components/ProgressHeader";
import { TabsContext } from "./context/Tabs.Context";
import { AppContext } from "./context/App.Contex";

import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/icon_fonts/css/all_icons_min.css";
import "./css/magnific-popup.min.css";
import "./css/skins/square/yellow.css";

import "./css/custom.css";

import { validateAddress, checkMedicare } from "./actions/profile";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";
import SubmitFormModal from "./components/SubmitFormModal";
import Review from "./components/Review";
import TemplatePage from "./components/templates";
import { submitForm } from "./actions/medicare";
import { calculateError } from "./utils";

interface RegisterFunctionInterface {
  name: string;
  _cb: () => void;
}

const initialPopulate =
  // eslint-disable-next-line array-callback-return

  (Context: Array<TabHeaderInterface>) =>
    Context.reduce((acc: any, c: any) => {
      acc[c.slug] = {
        ...c,
        show: true,
        tabs: c.tabs.reduce((a: any, cc: any) => {
          a[cc.slug] = {
            ...cc,
            isRequired: cc.isRequired ? true : false,
            empty: cc.isRequired ? true : false,
            error: null,
            success: false,
            save: () => {
              console.log(a[cc.slug]);
            },
          };
          return a;
        }, {}),
      };
      return acc;
    }, {});

const reversePopulate =
  // eslint-disable-next-line array-callback-return

  (Context: Array<TabHeaderInterface>) =>
    Context.reduce((acc: any, c: any) => {
      acc[c.slug] = {
        ...c,
        tabs: c.tabs.reduce((a: any, cc: any) => {
          a[cc.slug] = cc;
          return a;
        }, {}),
      };
      return acc;
    }, {});

const generateErrors =
  // eslint-disable-next-line array-callback-return
  (Context: Array<TabHeaderInterface>) =>
    Context.reduce((acc: any, c: any) => {
      acc[c.slug] = c.tabs.reduce((a: any, cc: any) => {
        a[cc.slug] = null;
        return a;
      }, {});
      return acc;
    }, {});

const PopoverContent = ({ tabs, setActivePanel }: any) => {
  return (
    <>
      <PopoverHeader>
        Error{" "}
        <i style={{ color: "#dc3545" }} className="icon-attention-filled"></i>
      </PopoverHeader>
      <PopoverBody>
        {
          // eslint-disable-next-line array-callback-return
          tabs.map((t: any) => {
            if (t.error) {
              return (
                <div
                  onClick={() => {
                    setActivePanel(t);
                  }}
                >
                  <h6>{t.label}</h6>
                  {/* <p dangerouslySetInnerHTML={{__html: t.error}} ></p> */}
                  {Object.values(t.error)
                    .filter((r: any) => r !== null)
                    .map((error: any) => (
                      <span>{Object.values(error)}</span>
                    ))}
                </div>
              );
            }
          })
        }
      </PopoverBody>
    </>
  );
};

const PopoverContentSuccess = (props: any) => {
  return (
    <>
      <PopoverHeader>
        Success <i style={{ color: "#155724" }} className="icon-ok-1"></i>
      </PopoverHeader>
      <PopoverBody>This section was successfully Validated</PopoverBody>
    </>
  );
};

function App() {
  const [tabsContext, setTabsContext] = useState<TabHeaderInterface[]>(
    TabsContext
  );
  const [ContextData, setContextData] = useState<any>(() =>
    initialPopulate(TabsContext)
  );

  const [Profile, setProfile] = useState<any>(ContextData.Profile);
  const [Diabetes, setDiabetes] = useState<any>(ContextData.Diabetes);
  const [Cardiac, setCardiac] = useState<any>(ContextData.Cardiac);
  const [Agent, setAgent] = useState<any>(ContextData.Agent);
  const [Cancer, setCancer] = useState<any>(ContextData.Cancer);
  const [Error, setError] = useState(() => generateErrors(TabsContext));
  const [APPError, setAPPError] = useState<any>(null);
  const [isSavingData, setIsSavingData] = useState(false);
  const [isReviewingData, setIsReviewingData] = useState(false);
  const [validateSubmitForm, setValidadeSubmitForm] = useState<
    Array<RegisterFunctionInterface>
  >([]);

  const [activeTab, setActiveTab] = useState<any>(Agent);
  const [activePanel, setCurrentPanel] = useState(Agent.tabs.Info);
  const [prevTab, setPrevTab] = useState<any>(Agent.tabs[-1] || null);
  const [nextTab, setNextTab] = useState<any>(Profile);

  const backToPrevTab = useCallback(() => {
    console.log("goToNextTab");
    let nt: any = Object.values(ContextData)
      .filter((t: any) => t.index < activeTab.index && t.show)
      .pop();

    if (nt.index === 0) {
      setPrevTab(null);
    } else {
      setPrevTab(activeTab);
    }

    setActiveTab(nt);
    setCurrentPanel(Object.values(nt.tabs)[0]);

    setNextTab(
      Object.values(ContextData)
        .filter((t: any) => t.index === nt.index + 1)
        .pop()
    );
  }, [activeTab, prevTab, setPrevTab, setNextTab, setActiveTab, tabsContext]);

  const registerFunction = useCallback(
    (f: RegisterFunctionInterface) => {
      console.log("registerFunction");
      // validateSubmitForm[f.name] = f._cb
      const newFunction = validateSubmitForm.map((fun) => {
        if (fun.name === f.name) {
          fun._cb = f._cb;
        }

        return fun;
      });
      setValidadeSubmitForm(newFunction);
    },
    [validateSubmitForm]
  );

  const verifyErros = useCallback(() => {
    Object.values(ContextData).map((context: any) => {
      return {
        ...context,
        tabs: Object.values(context.tabs).map((tab: any) => {
          console.log(context.slug, tab);
          if (tab.empty) {
            ContextData[context.slug].tabs[tab.slug].error =
              "This section is mandatory.";
          }
          return tab;
        }),
      };
    });
    setContextData({ ...ContextData });
  }, [ContextData]);

  const setActivePanel = useCallback(
    (tab: any) => {
      setActiveTab({
        ...activeTab,
        activeTab: tab,
      });
    },
    [activeTab, setActiveTab]
  );

  const goToNextTab = useCallback(() => {
    console.log("goToNextTab");
    let nt: any = Object.values(ContextData)
      .filter((t: any) => t.index > activeTab.index && t.show)
      .shift();

    if (nt.index === 0) {
      setPrevTab(null);
    } else {
      setPrevTab(activeTab);
    }

    setActiveTab(nt);
    setCurrentPanel(Object.values(nt.tabs)[0]);

    setNextTab(
      Object.values(ContextData)
        .filter((t: any) => t.index === nt.index + 1)
        .pop()
    );
  }, [activeTab, ContextData]);

  const goToNextPanel = useCallback(() => {
    console.log("goToNextPanel");

    setCurrentPanel(Object.values(activeTab.tabs)[activePanel.index + 1]);
  }, [activeTab.tabs, activePanel.index]);

  const backToPrevPanel = useCallback(() => {
    console.log("backToPrevPanel");

    setCurrentPanel(Object.values(activeTab.tabs)[activePanel.index - 1]);
  }, [activeTab.tabs, activePanel.index]);

  const updateContext = useCallback(
    (key: string, value: any) => {
      Object.values(ContextData).map((context: any) => {
        return {
          ...context,
          tabs: Object.values(context.tabs).map((tab: any) => {
            if (tab.id === activePanel.id) {
              console.log(context.slug, tab.slug, key, value);
              if (
                key === "error" ||
                key === "success" ||
                key === "isRequired"
              ) {
                ContextData[context.slug].tabs[tab.slug][key] = value;
                ContextData[context.slug][key] = value;
              } else if (key === "save") {
                ContextData[context.slug].tabs[tab.slug].save = async () => {
                  await value();
                  if (activePanel.success) {
                    if (
                      activePanel.index ===
                      Object.values(activeTab.tabs).length - 1
                    ) {
                      goToNextTab();
                    } else {
                      goToNextPanel();
                    }
                  }
                };
              } else {
                ContextData[context.slug].tabs[tab.slug].data[key] = value;
              }
              ContextData[context.slug].tabs[tab.slug].empty = false;
            }
            return tab;
          }),
        };
      });
      setContextData({ ...ContextData });
    },
    [
      ContextData,
      activePanel.id,
      activePanel.index,
      activePanel.success,
      activeTab.tabs,
      goToNextPanel,
      goToNextTab,
    ]
  );

  const ContextProvider = useMemo(() => {
    return {
      nextTab,
      prevTab,
      activeTab,
      activePanel,
      setActiveTab,
      tabsContext,
      goToNextTab,
      backToPrevTab,
      goToNextPanel,
      backToPrevPanel,
      Profile,
      Diabetes,
      Cardiac,
      Cancer,
      Agent,
      APPError,
      setAPPError,
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
      setCurrentPanel,
      setContextData,
    };
  }, [
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
    APPError,
    setActivePanel,
    updateContext,
    goToNextPanel,
    backToPrevPanel,
    Profile,
    Diabetes,
    Cardiac,
    Cancer,
    registerFunction,
    validateSubmitForm,
  ]);

  //  useEffect(() => {
  //    console.log(tabsContext)
  //   setContextData(reversePopulate(tabsContext))
  //  }, [tabsContext])

  //  useEffect(() => {
  //   setActivePanel(Object.values(activeTab.tabs)[0])
  //  }, [activeTab, setActivePanel])

  useEffect(() => {
    setProfile(ContextData.Profile);
    setDiabetes(ContextData.Diabetes);
    setCardiac(ContextData.Cardiac);
    setCancer(ContextData.Cancer);
    setAgent(ContextData.Agent);
  }, [ContextData]);

  console.log({ prevTab }, { nextTab });
  return (
    <AppContext.Provider value={ContextProvider}>
      <SubmitFormModal
        isOpen={isSavingData}
        onCancel={() => {
          setIsSavingData(false);
        }}
      />
      <Review
        isOpen={isReviewingData}
        toggle={() => {
          setIsReviewingData(!isReviewingData);
        }}
      />

      <div id="main_container" className="visible">
        <div id="header_in">
          {/* <div id="logo_in"><img src={"https://oberholtzermedia.com/wp-content/uploads/2020/12/oberholtzerMediaLogo.png"} height="48" data-retina="true" alt="Quote" /></div> */}
          <div id="logo_in">Form</div>
        </div>
        <ProgressHeader
          toggle={() => {
            verifyErros();
            setIsReviewingData(!isReviewingData);
          }}
        />

        <div className="wrapper_in">
          <div className="container-fluid">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="subheader"></div>
                <div className="row">
                  <aside className="col-lg-2 col-sm-3">
                    <h2>{activeTab?.label}</h2>
                    <p className="lead">
                      Little brief here to explain what is this for.
                    </p>
                    <ul className="list">
                      {Object.values(ContextData).map(
                        (tab: any, index: number) => {
                          // if (prevTab && !prevTab.success) return <span />;

                          if (tab.show === false) {
                            return <span />;
                          }
                          return (
                            <>
                              {index > 0 && (
                                <div
                                  style={{
                                    width: "0.5px",
                                    height: "20px",
                                    backgroundColor: "#ccc",
                                    marginLeft: "30px",
                                  }}
                                ></div>
                              )}
                              <li
                                id={`profile-tab-index-${index}`}
                                key={`profile-tab-index-${index}`}
                                onClick={() => {
                                  setActiveTab(tab);
                                  setCurrentPanel(Object.values(tab.tabs)[0]);
                                  if (tab.index === 0) {
                                    setPrevTab(tabsContext[-1]);
                                  } else {
                                    setPrevTab(
                                      Object.values(ContextData)
                                        .filter(
                                          (t: any) => t.index === tab.index - 1
                                        )
                                        .pop()
                                    );
                                  }
                                  setNextTab(
                                    Object.values(ContextData)
                                      .filter(
                                        (t: any) => t.index === tab.index + 1
                                      )
                                      .pop()
                                  );
                                }}
                                className={
                                  tab.id === activeTab?.id ? "active" : ""
                                }
                              >
                                <span>
                                  {tab.label}{" "}
                                  {tab.index === 0
                                    ? "enable"
                                    : tab.index > 0 &&
                                      prevTab &&
                                      prevTab.success
                                    ? "enable"
                                    : tab.success
                                    ? "enable"
                                    : "disable"}
                                </span>
                                {Object.values(tab.tabs).filter((t: any) =>
                                  calculateError(t.error)
                                ).length > 0 && (
                                  <>
                                    <i
                                      style={{ color: "#dc3545" }}
                                      className="icon-attention-filled"
                                    ></i>
                                    <UncontrolledPopover
                                      trigger="hover"
                                      placement="left"
                                      target={`profile-tab-index-${index}`}
                                    >
                                      {({ scheduleUpdate }) => (
                                        <PopoverContent
                                          tabs={Object.values(tab.tabs)}
                                          setActivePanel={(tab2: any) => {
                                            // setActivePanel(tab2)
                                          }}
                                        />
                                      )}
                                    </UncontrolledPopover>
                                  </>
                                )}
                                {Object.values(tab.tabs).reduce(
                                  (success: boolean, currenTab: any) => {
                                    if (success) {
                                      return currenTab.success;
                                    }
                                    return success;
                                  },
                                  true
                                ) && (
                                  <>
                                    <i
                                      style={{ color: "#155724" }}
                                      className="icon-ok-1"
                                    ></i>
                                    <UncontrolledPopover
                                      trigger="hover"
                                      placement="left"
                                      target={`profile-tab-index-${index}`}
                                    >
                                      {({ scheduleUpdate }) => (
                                        <PopoverContentSuccess />
                                      )}
                                    </UncontrolledPopover>
                                  </>
                                )}
                              </li>
                            </>
                          );
                        }
                      )}
                    </ul>
                  </aside>
                  <div className="col-lg-10 col-sm-9">
                    <TemplatePage />
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
