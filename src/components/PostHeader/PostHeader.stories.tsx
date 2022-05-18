import faker from '@faker-js/faker/locale/ru'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostHeader from './PostHeader'

export default {
  title: 'lifecyclewh/PostHeader',
  component: PostHeader,
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
} as ComponentMeta<typeof PostHeader>

const Template: ComponentStory<typeof PostHeader> = (args) => (
  <PostHeader {...args} />
)

export const PostHeaderDefault = Template.bind({})

PostHeaderDefault.args = {
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
}
