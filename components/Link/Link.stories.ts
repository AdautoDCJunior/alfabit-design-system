import { Meta, StoryObj } from '@storybook/react'

import Link, { LinkProps } from '.'

const defaultText = 'Link'

const meta: Meta<LinkProps> = {
  title: 'Molecules/Link',
  component: Link,
  argTypes: {
    children: {
      type: 'string'
    },
    href: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    }
  }
}

export default meta

export const DefaultPrimary: StoryObj<LinkProps> = {
  args: {
    children: defaultText,
    href: '/'
  }
}

export const DefaultPrimaryDisabled: StoryObj<LinkProps> = {
  args: {
    children: defaultText,
    href: '/',
    disabled: true
  }
}

export const VioletPrimary: StoryObj<LinkProps> = {
  args: {
    children: defaultText,
    href: '/',
    className: 'theme-violet'
  }
}

export const VioletPrimaryDisabled: StoryObj<LinkProps> = {
  args: {
    children: defaultText,
    href: '/',
    className: 'theme-violet',
    disabled: true
  }
}