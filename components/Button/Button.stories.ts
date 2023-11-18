import { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '.'

const defaultText = 'Button'

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: {
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

export const DefaultPrimary: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'primary',
  }
}

export const DefaultPrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'primary',
    disabled: true
  }
}

export const DefaultSecondary: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'secondary'
  }
}

export const DefaultSecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'secondary',
    disabled: true
  }
}

export const DefaultTertiary: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'tertiary'
  }
}

export const DefaultTertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: defaultText,
    variant: 'tertiary',
    disabled: true
  }
}

export const VioletPrimary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'primary',
    className: 'theme-violet'
  }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'secondary',
    className: 'theme-violet'
  }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    className: 'theme-violet'
  }
}