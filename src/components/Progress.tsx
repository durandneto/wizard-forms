import { TabItemInterface } from "./TabHeader";
import {
  Container,
  Row,
  Col,
  Button,
  PopoverHeader,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";
import { useContext, useMemo } from "react";
import { AppContext } from "../context/App.Contex";
import { calculateError } from "../utils";

const PopoverContent = ({ tab }: any) => {
  debugger;
  return (
    <>
      <PopoverHeader>
        Error{" "}
        <i style={{ color: "#dc3545" }} className="icon-attention-filled"></i>
      </PopoverHeader>
      <PopoverBody>
        {Object.values(tab.error)
          .filter((r: any) => r !== null)
          .map((error: any) => (
            <span>{Object.values(error)}</span>
          ))}
      </PopoverBody>
    </>
  );
};

const MyProgress = () => {
  const {
    activeTab,
    activePanel,
    setCurrentPanel,
    nextTab,
    goToNextPanel,
    prevTab,
    backToPrevPanel,
    backToPrevTab,
    goToNextTab,
    setIsReviewingData,
  } = useContext(AppContext);

  console.log(activePanel);
  return (
    <div className="progress_container">
      <Container>
        <Row>
          <Col className="progress_left_col">
            {Object.values(activeTab.tabs).map((tab: any, index: number) => {
              const style = tab.success ? { color: "#222" } : {};
              if (tab.id === activePanel.id) style.color = "#409fff";

              const showError: boolean = calculateError(tab.error);
              console.log("---------------");
              console.log("---------------");
              console.log("Progress eror");
              console.log({ showError });
              console.log("---------------");
              console.log("---------------");
              console.log("---------------");

              return (
                <span
                  style={style}
                  onClick={() => {
                    if (!tab.empty) {
                      setCurrentPanel(tab);
                    }
                  }}
                  className={tab.empty ? "disabled" : ""}
                  key={`profile-tab-index-progress-${index}`}
                  id={`profile-tab-index-progress-${index}`}
                >
                  {index > 0 && ` | `}
                  {tab.label}
                  {showError && (
                    <>
                      <i
                        style={{ color: "#dc3545" }}
                        className="icon-attention-filled"
                      ></i>
                      <UncontrolledPopover
                        trigger="hover"
                        placement="left"
                        target={`profile-tab-index-progress-${index}`}
                      >
                        {({ scheduleUpdate }) => <PopoverContent tab={tab} />}
                      </UncontrolledPopover>
                    </>
                  )}
                  {tab.success && (
                    <i style={{ color: "#155724" }} className="icon-ok-1"></i>
                  )}
                </span>
              );
            })}
          </Col>
          <Col className="progress_right_col">
            {activePanel.index > 0 && (
              <Button
                onClick={() => {
                  backToPrevPanel();
                }}
                type="button"
                className="backward"
                size="sm"
                name="prev"
              >
                Prev
              </Button>
            )}
            {prevTab && activePanel.index === 0 && (
              <Button
                onClick={backToPrevTab}
                type="button"
                className="backward"
                size="sm"
                name="prev"
              >
                Prev
              </Button>
            )}
            {/* <Button
              onClick={activePanel.save}
              type="button"
              color="success"
              size="sm"
              name="save"
            >
              Save {activePanel.label}
            </Button> */}
            {/* {activePanel.index < Object.values(activeTab.tabs).length - 1 && ( */}
            {/* {activePanel.index < Object.values(activeTab.tabs).length - 1 && ( */}

            <Button
              onClick={() => {
                activePanel.save();
              }}
              tpe="button"
              className="forward"
              size="sm"
              name="save"
            >
              Next
            </Button>
            {/* )} */}

            {/* {nextTab &&
              activePanel.index ===
                Object.values(activeTab.tabs).length - 1 && (
                <Button
                  onClick={() => {
                    activePanel.save();
                    goToNextTab();
                  }}
                  type="button"
                  className="forward"
                  size="sm"
                  name="save"
                >
                  Save and Go to {nextTab?.label}
                </Button>
              )} */}
            {/* {
                 !nextTab && activePanel.index === activeTab.tabs.length - 1 && <Button type="button" className="forward" size="sm" onClick={() => {
                    console.log({validateSubmitForm})

                    setIsReviewingData(true)}} name="save">Save and Submit</Button>
               }  */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProgress;
