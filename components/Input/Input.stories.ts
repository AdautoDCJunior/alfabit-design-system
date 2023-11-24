import { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from '.';

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {},
};

export default meta;

export const DefaultPrimaryInput: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  },
};

export const DefaultPrimaryInputDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true,
  },
};

export const DefaultPrimaryMultiline: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
  },
};

export const DefaultPrimaryMultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    disabled: true,
  },
};

export const DefaultPrimaryInputLabel: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
  },
};

export const DefaultPrimaryInputLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    disabled: true,
  },
};

export const DefaultPrimaryMultilineLabel: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    multiline: true,
  },
};

export const DefaultPrimaryMultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    label: 'Label',
    value: 'Input',
    multiline: true,
    disabled: true,
  },
};
