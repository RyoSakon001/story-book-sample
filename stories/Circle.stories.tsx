import type { Meta, StoryObj } from '@storybook/react';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'コンポーネントグループ１/Circle',
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['orange', 'green', 'yellow'],
    },
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ここに、Docsに表示される説明文を書きます。これはオレンジ色の円です。
 */
export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  }
};
export const GreenCircle: Story = {
  args: {
    variant: 'green',
  }
};
export const YellowCircle: Story = {
  args: {
    variant: 'yellow',
  }
};

export const GroupedCircles: Story = {
  render: () => (
    <div>
      <Circle variant='orange' />
      <Circle variant='green' />
      <Circle variant='yellow' />
    </div>
  )
}