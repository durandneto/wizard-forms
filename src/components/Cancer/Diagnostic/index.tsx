import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  CustomInput,
  Button,
  ButtonGroup,
} from "reactstrap";
import InputMask from "react-input-mask";
import { AppContext } from "../../../context/App.Contex";
import TableInfo from "./table";
import ProgressMobileStepper from "../../Stepper";
import {
  FamilyMemberHeartConditions,
  DiagnosedCancerList,
  TreatmentCancerList,
  CancerDiagnosticInterface,
  ListInterface,
} from "../../../context/Cancer.Contex";
import { calculateError } from "../../../utils";
import OutlinedCard from "../../Stepper/Card";

const Diagnostic = (props: any) => {
  const { Cancer, updateContext } = useContext(AppContext);
  const {
    tabs: { Diagnostic },
  } = Cancer;

  const [loading, setLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentStepItem, setCurrentStepItem] = useState<any>(() => {
    const [ent, value] = Object.entries(Diagnostic.data.cancerList)[
      currentStep
    ];
    return {
      slug: ent,
      ...((value as unknown) as ListInterface),
    };
  });

  const save = useCallback(() => {
    const error: CancerDiagnosticInterface = {
      indicationTest: null,
      isDiagnosed: null,
      isRCECancerTransfer: null,
      treatment: null,
      OTC: null,
      cancerList: Object.keys(Diagnostic.data.cancerList).reduce(
        (a: any, c: string) => {
          a[c] = null;
          return a;
        },
        {}
      ),
    };

    if (Diagnostic.data.isDiagnosed === "") {
      error.isDiagnosed = "Indicated test can not be empty.";
    } else if (Diagnostic.data.isDiagnosed === "Yes") {
      // if (Diagnostic.data.indicationTest === "") {
      //   error.indicationTest = "Indicated test can not be empty.";
      // }
      // if (Diagnostic.data.OTC === "") {
      //   error.OTC = "OTC can not be empty.";
      // }
      Object.entries(Diagnostic.data.cancerList).map((l) => {
        const [slug, value] = l;
        const item: ListInterface = (value as unknown) as ListInterface;
        if (item.value === "") {
          error.cancerList[slug] = `${slug} is required`;
        } else if (item.value === "Yes") {
          if (!item?.secondValue) {
            error.cancerList[slug] = `${item.secondLabel} is required`;
          }
          if (item.radio && !item.radio.value) {
            error.cancerList[slug] = `${item.radio.label} is required`;
          }
          if (item.number && !item.number.value) {
            error.cancerList[slug] = `${item.number.label} is required`;
          }
        }
      });
      debugger;
    }

    updateContext("error", error);
    updateContext("success", !calculateError(error));
  }, [Diagnostic.data]);
  const validateField = useCallback((): boolean => {
    let error = null;
    if (Diagnostic.data.cancerList[currentStepItem.slug].value === "") {
      error = `${currentStepItem.slug} is required`;
    } else if (
      Diagnostic.data.cancerList[currentStepItem.slug].value === "Yes"
    ) {
      if (!Diagnostic.data.cancerList[currentStepItem.slug]?.secondValue) {
        error = `${currentStepItem.secondLabel} is required`;
      }
      if (
        currentStepItem.radio &&
        !Diagnostic.data.cancerList[currentStepItem.slug].radio.value
      ) {
        error = `${currentStepItem.radio.label} is required`;
      }
      if (
        currentStepItem.number &&
        !Diagnostic.data.cancerList[currentStepItem.slug].number.value
      ) {
        error = `${currentStepItem.number.label} is required`;
      }
    }
    const nextError = {
      ...Diagnostic.error,
      cancerList: {
        ...Diagnostic.error?.cancerList,
        [currentStepItem.slug]: error,
      },
    };
    updateContext("error", nextError);
    // updateContext("success", !calculateError(error));
    return error ? false : true;
  }, [currentStepItem]);

  const steps = useMemo(
    () => Object.values(Diagnostic.data.cancerList).length,
    [Diagnostic.data.cancerList]
  );

  useEffect(() => {
    const [ent, value] = Object.entries(Diagnostic.data.cancerList)[
      currentStep
    ];
    setCurrentStepItem({
      slug: ent,
      ...((value as unknown) as ListInterface),
    });
  }, [currentStep]);

  useEffect(() => {
    updateContext("save", save);
  }, [Diagnostic.data]);

  if (props.table) {
    return <TableInfo {...props} />;
  }
  return (
    <div className="col-xs-12">
      <Form>
        <Container>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label for="Cancer-FamilyMemberHeartConditions-isDiagnosed-1">
                  <b>Have you ever been diagnosed with any type of cancer?</b>
                </Label>
                <div>
                  <ButtonGroup size="lg">
                    <Button
                      outline={Diagnostic.data.isDiagnosed !== "Yes"}
                      color={"primary"}
                      onClick={(e: any) => updateContext("isDiagnosed", "Yes")}
                    >
                      Yes
                    </Button>
                    <Button
                      outline={Diagnostic.data.isDiagnosed !== "No"}
                      onClick={(e: any) => updateContext("isDiagnosed", "No")}
                    >
                      No
                    </Button>
                  </ButtonGroup>
                </div>
              </FormGroup>
            </Col>
          </Row>
          {Diagnostic.data.isDiagnosed === "Yes" && (
            <>
              <Row
                key={`ListInterface-${currentStepItem.slug}-${currentStepItem.label}`}
              >
                {console.log(currentStepItem)}
                <Col xs="12">
                  <OutlinedCard
                    {...currentStepItem}
                    invalid={Diagnostic.error?.cancerList[currentStepItem.slug]}
                    // currentStepItem.slug={currentStepItem.slug}
                    id={`ListInterface-currentStepItem-id-${currentStepItem.label}`}
                    onChange={(value: string) => {
                      updateContext("cancerList", {
                        ...Diagnostic.data.cancerList,
                        [currentStepItem.slug]: {
                          ...Diagnostic.data.cancerList[currentStepItem.slug],
                          value,
                        },
                      });
                      debugger;
                      if (value === "No" && currentStep < steps - 1) {
                        setCurrentStep(currentStep + 1);
                      }
                      //  else {
                      //   Diagnostic.save();
                      // }
                    }}
                    secondValue={
                      Diagnostic.data.cancerList[currentStepItem.slug]
                        .secondValue
                    }
                    radio={
                      Diagnostic.data.cancerList[currentStepItem.slug].radio
                    }
                    // number={
                    //   Diagnostic.data.cancerList[currentStepItem.slug].number
                    // }
                    onSecondLabelChange={(value: number) => {
                      debugger;
                      updateContext("cancerList", {
                        ...Diagnostic.data.cancerList,
                        [currentStepItem.slug]: {
                          ...Diagnostic.data.cancerList[currentStepItem.slug],
                          secondValue: value,
                        },
                      });
                    }}
                    onRadioChange={(value: string) => {
                      debugger;
                      updateContext("cancerList", {
                        ...Diagnostic.data.cancerList,
                        [currentStepItem.slug]: {
                          ...Diagnostic.data.cancerList[currentStepItem.slug],
                          radio: {
                            ...Diagnostic.data.cancerList[currentStepItem.slug]
                              .radio,
                            value,
                          },
                        },
                      });
                    }}
                    value={
                      Diagnostic.data.cancerList[currentStepItem.slug].value
                    }
                  />
                </Col>
              </Row>
              <ProgressMobileStepper
                activeStep={currentStep}
                handleBack={() => {
                  setCurrentStep(currentStep - 1);
                }}
                handleNext={() => {
                  if (validateField()) {
                    setCurrentStep(currentStep + 1);
                  }
                }}
                steps={steps}
              />
              {/* <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label for="Cancer-FamilyMemberHeartConditions-indicationTest-1">
                      <b>Indication for testing selection</b>
                    </Label>
                    <div>
                      {DiagnosedCancerList.map((type: any, index: number) => (
                        <CustomInput
                          inline
                          onClick={(e: any) => {
                            updateContext("indicationTest", e.target.value);
                          }}
                          value={type.value}
                          invalid={Diagnostic.error?.indicationTest}
                          checked={
                            Diagnostic.data.indicationTest === type.value
                          }
                          type="radio"
                          id={`Cancer-FamilyMemberHeartConditions-indicationTest-${index}`}
                          key={`Cancer-FamilyMemberHeartConditions-indicationTest-${index}`}
                          name="Cancer-FamilyMemberHeartConditions-indicationTest-Radio"
                          label={type.label}
                        />
                      ))}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label for="Cancer-FamilyMemberHeartConditions-treatment-1">
                      <b>Previous or current treatment</b>
                    </Label>
                    <div>
                      {TreatmentCancerList.map(
                        (treatment: any, index: number) => (
                          <CustomInput
                            inline
                            onClick={(e: any) => {
                              updateContext("treatment", e.target.value);
                            }}
                            value={treatment.value}
                            checked={Diagnostic.data.treatment.value}
                            type="radio"
                            id={`Cancer-FamilyMemberHeartConditions-treatment-${index}`}
                            key={`Cancer-FamilyMemberHeartConditions-treatment-${index}`}
                            name="Cancer-FamilyMemberHeartConditions-treatment-Radio"
                            label={treatment.label}
                          />
                        )
                      )}
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label for="Cancer-FamilyMemberHeartConditions-OTC">
                      <b>
                        List All medications, prescribed medications and all
                        OTC:
                      </b>
                    </Label>
                    <Input
                      onChange={(e: any) => {
                        updateContext("OTC", e.target.value);
                      }}
                      value={Diagnostic.data.OTC}
                      type="textarea"
                      name="text"
                      id="Cancer-FamilyMemberHeartConditions-OTC"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label for="isRCECancerTransferCheckbox">
                      <b>Check here if doing a RCE Cancer transfer</b>
                    </Label>
                    <div>
                      <CustomInput
                        onClick={(e: any) => {
                          updateContext(
                            "isRCECancerTransfer",
                            e.target.checked
                          );
                        }}
                        checked={Diagnostic.data.isRCECancerTransfer}
                        type="checkbox"
                        id="isRCECancerTransferCheckbox"
                        label="Yes, I'm."
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row> */}
            </>
          )}
        </Container>
      </Form>
    </div>
  );
};

export default Diagnostic;
