/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { useState, useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Breadcrumb,
  BreadcrumbItem,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { submitForm } from "../../actions/medicare";
import { AppContext } from "../../context/App.Contex";
import { calculateError } from "../../utils";

const PopoverContent = (props: any) => {
  return (
    <>
      <PopoverHeader>
        Error{" "}
        <i style={{ color: "#dc3545" }} className="icon-attention-filled"></i>
      </PopoverHeader>
      <PopoverBody>
        {Object.values(props.error)
          .filter((r: any) => r !== null)
          .map((error: any) => (
            <span>{Object.values(error)}</span>
          ))}
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

const ReviewModal = (props: any) => {
  const {
    tabsContext: tabs,
    setIsSavingData,
    setAPPError,
    ContextData,
  } = useContext(AppContext);

  const [tables, setTables] = useState(() => {
    const arr = new Array(tabs.length);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(tabs[i].tabs.length).fill(true); // Creating an array of size 4 and filled of 1
    }

    return arr;
  });

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} size="lg">
      <ModalHeader toggle={props.toggle}>Form Review</ModalHeader>
      <ModalBody>
        <Container>
          {Object.values(ContextData).map((context: any, tabIndex: number) => (
            <Row key={`review-modal-index-${tabIndex}`}>
              <Col xs="12">
                <h4>{context.label}</h4>
                {Object.values(context.tabs).map(
                  (item: any, itemIndex: number) => {
                    if (!item.isRequired && item.index === 0)
                      return <p>No record found</p>;
                    if (!item.isRequired && item.index > 0) return <span />;

                    return (
                      <div>
                        <Navbar color="light" light expand="md">
                          <NavbarBrand href="#">{context.label} /</NavbarBrand>
                          <Nav className="mr-auto" navbar>
                            <NavItem>
                              <NavLink href="#">{item.label}</NavLink>
                            </NavItem>
                          </Nav>
                          {calculateError(item.error) && (
                            <NavbarText>
                              <div id={`propover-error-${item.id}`}>
                                <i
                                  style={{ color: "#dc3545" }}
                                  className="icon-attention-filled"
                                ></i>
                                {/* <Button onClick={()=>{
                                                                        // const t = tables
                                                                        // t[tabIndex][itemIndex] = !t[tabIndex][itemIndex]
                                                                        // setTables([...tables, t])
                                                                    }} 
                                                                    color="link">
                                                                        {
                                                                            tables[tabIndex][itemIndex] ? `Quick fix` : `Save`
                                                                        }
                                                                    </Button> */}
                              </div>
                              <UncontrolledPopover
                                trigger="hover"
                                placement="left"
                                target={`propover-error-${item.id}`}
                              >
                                {({ scheduleUpdate }) => (
                                  <PopoverContent {...item} />
                                )}
                              </UncontrolledPopover>
                            </NavbarText>
                          )}
                          {item.success && (
                            <>
                              <div id={`propover-success-${item.id}`}>
                                <i
                                  style={{ color: "#155724" }}
                                  className="icon-ok-1"
                                ></i>
                              </div>
                              <UncontrolledPopover
                                trigger="hover"
                                placement="left"
                                target={`propover-success-${item.id}`}
                              >
                                {({ scheduleUpdate }) => (
                                  <PopoverContentSuccess />
                                )}
                              </UncontrolledPopover>
                            </>
                          )}
                        </Navbar>
                        <item.component table={tables[tabIndex][itemIndex]} />
                      </div>
                    );
                  }
                )}
              </Col>
            </Row>
          ))}
          {/* <Row>
                    <Col xs="12">
                        <div className="box_contact">
                            <i className="pe-7s-id"></i>
                            <h4>Personal Info</h4>
                            <blockquote className="blockquote styled">
							<small>First name: <cite title=""><b>Jhon</b></cite></small>
							<small>Last name: <cite title=""><b>Doe</b></cite></small>
						</blockquote>
                        </div>
                    </Col>
                </Row> */}
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => {
            props.toggle();
            setAPPError(null);
          }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setIsSavingData(true);
            submitForm(ContextData)
              .then((r) => {
                debugger;
              })
              .catch(setAPPError);
          }}
        >
          Submit
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default ReviewModal;
