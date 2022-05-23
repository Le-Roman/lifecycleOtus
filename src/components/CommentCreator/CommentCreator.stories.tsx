import { ComponentStory, ComponentMeta } from "@storybook/react";
import CommentCreator from "./CommentCreator";

export default {
  title: "lifecyclewh/CommentCreator",
  component: CommentCreator,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1rem",
          border: "1px solid #ddd",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CommentCreator>;

const Template: ComponentStory<typeof CommentCreator> = (args) => (
  <CommentCreator {...args} />
);

export const CommentCreatorDefault = Template.bind({});

CommentCreatorDefault.args = {
  handleOnChange: () => {},
  handleClick: () => {},
  value: "",
};
