import { ComponentStory, ComponentMeta } from '@storybook/react'
import Posts from './Posts'

export default {
  title: 'lifecyclewh/Posts',
  component: Posts,
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
} as ComponentMeta<typeof Posts>

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />

export const PostsDefault = Template.bind({})

PostsDefault.args = {
  photos: [
    {
      id: 1,
      url: 'https://via.placeholder.com/600/92c952',
    },
    {
      id: 2,
      url: 'https://via.placeholder.com/600/771796',
    },
    {
      id: 3,
      url: 'https://via.placeholder.com/600/24f355',
    },
  ],
}
