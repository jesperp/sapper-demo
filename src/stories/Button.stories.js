import Button from './Button.svelte';

export default {
  title: 'Example/Button',  // TODO Where is this shown?
  component: Button,
  // Used for addons ? control is addon, action is addon...
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
  args: {
    label: 'Default text',
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {  // Args for this story only
  primary: true,
  //label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
