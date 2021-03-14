import Nav from './Nav.svelte'


export default {
  title: 'Example/Navigation',
  component: Nav,
  argTypes: {
    segment: {
      control: { type: 'select', options: ['home', 'about', 'blog'] },
    },
  },
  args: {
    //label: 'Default text',
  },
};


const Template = ({ ...args }) => ({
  Component: Nav,
  props: args,
});

export const MainNavigation = Template.bind({})
MainNavigation.args = { }
