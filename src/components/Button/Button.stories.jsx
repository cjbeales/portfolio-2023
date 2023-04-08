import React from 'react';

import { Button } from './Button';
import ButtonDocs from './ButtonDocs.mdx';

const config = {
  title: 'Components/General/Button',
  component: Button,
  argTypes: {},
  parameters: {
    docs: {
      page: ButtonDocs, // mdx page that's displayed for the Button component in the docs section of Storybook
    },
  },
};

export default config;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary', variant: 'secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { label: 'Tertiary', variant: 'tertiary' };

export const OutlineWhite = Template.bind({});
OutlineWhite.decorators = [
  (Story) => (
    <div style={{ backgroundColor: '#0D2638', padding: '1em' }}>
      <Story />
    </div>
  ),
];
OutlineWhite.args = { label: 'Outline White', variant: 'outline-white' };

export const Small = Template.bind({});
Small.args = { label: 'Small', small: true };

export const Nav = Template.bind({});
Nav.args = { label: 'Nav', href: '#', variant: 'navButton' };
