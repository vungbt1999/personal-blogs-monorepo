import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    options: ['Volvo', 'Saab', 'Mercedes'],
  },
};
