import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae corporis, quibusdam iste, consequatur voluptate blanditiis ratione architecto dolorum commodi dolores maxime pariatur veritatis, at odit facilis. Distinctio, cupiditate inventore?',
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    },
}
