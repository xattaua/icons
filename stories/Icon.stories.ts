import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

import * as ICONS from '../components';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    glyph: {
      control: '-',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const AddEmoji: Story = {
  args: {
    glyph: ICONS.AddEmoji,
    size: 24,
  },
};

AddEmoji.parameters = {
  docs: {
    source: {
      code: `
import { AddEmoji } from '@xatta/icons';

<Icon glyph={AddEmoji} />
      `,
    },
  },
};

export const Bin: Story = {
  args: {
    glyph: ICONS.Bin,
    size: 24,
  },
};

Bin.parameters = {
  docs: {
    source: {
      code: `
import { Bin } from '@xatta/icons';

<Icon glyph={Bin} />
      `,
    },
  },
};

export const Cog: Story = {
  args: {
    glyph: ICONS.Cog,
    size: 24,
  },
};

Cog.parameters = {
  docs: {
    source: {
      code: `
import { Cog } from '@xatta/icons';

<Icon glyph={Cog} />
      `,
    },
  },
};
