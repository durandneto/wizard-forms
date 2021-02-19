import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Stepper, { StepperInterface } from ".";
const Node = () => <p>step 1</p>;
const steps = [
  {
    label: "Counter",
    children: <Node />,
    error: false,
    success: false,
    completed: false,
  },

  // "Create an ad group",
  // "Create an ad",
];

export default {
  title: "Components/Stepper/Main",
  component: Stepper,
} as Meta;

const Template: Story<StepperInterface> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  steps,
  activeStep: 0,
  control: true,
};
