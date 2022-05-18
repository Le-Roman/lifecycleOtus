import { ComponentStory, ComponentMeta } from '@storybook/react'
import faker from '@faker-js/faker/locale/ru'
import Comment from './Comment'

export default {
  title: 'lifecyclewh/Comment',
  component: Comment,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem',
          border: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id: {
        title: 'ID',
        type: 'string'
    },
    title: {
        type: 'string'
    }
},
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const CommentDefault = Template.bind({})

CommentDefault.args = {
  id: faker.datatype.uuid(),
  title: faker.hacker.phrase(),
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
}
