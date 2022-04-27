import { Meta, Story } from "@storybook/angular";
import { InputComponent } from "./input.component";
import { Title,Subtitle,Description,Primary,ArgsTable,PRIMARY_STORY,Stories } from "@storybook/addon-docs";

export default {
  title: 'General/Input',
  component: InputComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args
});

export const Default: Story = Template.bind({});


