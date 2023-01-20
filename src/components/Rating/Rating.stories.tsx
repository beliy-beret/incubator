import { ComponentMeta, ComponentStory } from '@storybook/react';

import Rating from './Rating';

export default {
    title: 'Example/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    value: 0
};
export const OneStar = Template.bind({});
OneStar.args = {
    value: 1
};
export const TwoStar = Template.bind({});
TwoStar.args = {
    value: 2
};
export const ThreeStar = Template.bind({});
ThreeStar.args = {
    value: 3
};
export const FourStar = Template.bind({});
FourStar.args = {
    value: 4
};
export const FiveStar = Template.bind({});
FiveStar.args = {
    value: 5
};

