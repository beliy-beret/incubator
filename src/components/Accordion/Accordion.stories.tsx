import { ComponentMeta, ComponentStory } from '@storybook/react';

import Accordion from './Accordion';
import { type } from '@testing-library/user-event/dist/type';

export default {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        collapsed: {
            control: 'radio',
            options: [true, false]
        }

    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
    title: 'Hello !',
    collapsed: true
};

export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    title: 'Hello !',
    collapsed: false
};
