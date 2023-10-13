import fs from 'fs';

const getIconNames = fs
  .readdirSync('./components')
  .filter((file) => file !== 'index.ts')
  .map((name) => name.split('.')[0]);

const generateStoryAsPreview = (name: string) => `export const ${name}: Story = {
  args: {
    glyph: ICONS.${name},
    size: 24,
  },
};

${name}.parameters = {
  docs: {
    source: {
      code: \`
import { ${name} } from '@xatta/icons';

<Icon glyph={${name}} />
      \`,
    }
  },
};
\n`;

const template = `import type { Meta, StoryObj } from '@storybook/react';

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
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

${getIconNames.map((name) => generateStoryAsPreview(name)).join('')}
`;

(() => {
  const folder = './stories';

  fs.mkdir(folder, { recursive: true }, (err) => {
    if (err) {
      throw err;
    } else {
      fs.writeFile(`${folder}/Icon.stories.ts`, template, (e) => {
        if (e) {
          console.error(e);
        }
      });
    }
  });
})();
