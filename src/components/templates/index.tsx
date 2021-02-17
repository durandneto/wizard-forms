import { useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { AppContext } from "../../context/App.Contex";

import Progress from "../Progress";

const TPage = () => {
  const { activeTab, activePanel, updateContext } = useContext(AppContext);
  console.log({ activePanel });
  return (
    <div id="wizard_container">
      <div id="top-wizard">
        {activePanel.isRequired || activePanel.index > 0 ? (
          <Container>
            <Row>
              <Col>
                <Progress />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>{activePanel.label}</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col>
                <Progress />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>{activeTab.label}</h3>
                <p>No records found</p>
              </Col>
            </Row>
          </Container>
        )}
      </div>
      <div id="middle-wizard">
        {activePanel.isRequired || activePanel.index > 0 ? (
          <activePanel.component />
        ) : (
          <Container>
            <Row>
              <Col xs="12">
                <Button
                  onClick={() => {
                    updateContext("isRequired", true);
                  }}
                >
                  Add new record
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </div>
      <div id="bottom-wizard"></div>
    </div>
  );
};

export default TPage;
