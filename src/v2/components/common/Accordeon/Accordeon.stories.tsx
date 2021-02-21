import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Accordeon, { AccordeonInterface } from ".";
const Node = () => <p>step 1</p>;
const data = {
  title: "Counter",
  children: <Node />,
  error: false,
  success: false,
  description: "Drescription here",
};

export default {
  title: "Components/Accordeon/Main",
  component: Accordeon,
} as Meta;

const Template: Story<AccordeonInterface> = (args) => <Accordeon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: data.title,
  children: data.children,
  error: false,
  success: false,
  description: data.description,
};
