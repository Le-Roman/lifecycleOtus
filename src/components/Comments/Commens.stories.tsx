import faker from '@faker-js/faker/locale/ru'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Comments from './Comments'

export default {
  title: 'lifecyclewh/Comments',
  component: Comments,
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
} as ComponentMeta<typeof Comments>

const Template: ComponentStory<typeof Comments> = (args) => (
  <Comments {...args} />
)

export const CommentsDefault = Template.bind({})

CommentsDefault.args = {
  comments: [
    {
      id: faker.datatype.uuid(),
      title: faker.hacker.phrase(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
    },
    {
      id: faker.datatype.uuid(),
      title: faker.hacker.phrase(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
    },
  ],
}
