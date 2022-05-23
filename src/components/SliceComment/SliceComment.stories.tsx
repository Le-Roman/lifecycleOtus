import faker from "@faker-js/faker/locale/ru";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliceComment from "./SliceComment";

export default {
  title: "lifecyclewh/SliceComment",
  component: SliceComment,
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
} as ComponentMeta<typeof SliceComment>;

const Template: ComponentStory<typeof SliceComment> = (args) => (
  <SliceComment {...args} />
);

export const SliceCommentDefault = Template.bind({});

SliceCommentDefault.args = {
  comment: {
    id: faker.datatype.uuid(),
    title: faker.hacker.phrase(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
  },
  isView: true,
  handleClick: () => {},
};
