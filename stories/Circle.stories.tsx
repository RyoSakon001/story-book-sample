import type { Meta, StoryObj } from '@storybook/react';

import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  title: 'Circle',
  component: Circle,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCircle: Story = {};
