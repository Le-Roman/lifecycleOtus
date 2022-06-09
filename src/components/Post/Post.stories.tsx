import { ComponentStory, ComponentMeta } from "@storybook/react";
import Post from "./Post";

export default {
  title: "lifecyclewh/Post",
  component: Post,
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
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const PostDefault = Template.bind({});

PostDefault.args = {
  photo: {
    id: 1,
    url: "https://via.placeholder.com/600/92c952",
  },
};
