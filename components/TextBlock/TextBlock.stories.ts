import { Meta, StoryObj } from '@storybook/react'

import TextBlock, { TextBlockProps } from '.'

const meta: Meta<TextBlockProps> = {
  title: 'Molecules/TextBlock',
  component: TextBlock,
  argTypes: {
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    className: {
      type: 'string'
    }
  }
}

export default meta

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: 'Title',
    body: 'Earth is the third planet from the Sun and the only astronomi     cal object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. '
  }
}

