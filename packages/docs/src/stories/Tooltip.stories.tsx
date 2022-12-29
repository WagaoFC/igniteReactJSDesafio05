import type { StoryObj, Meta } from '@storybook/react'
import { TooltipProps, Tooltip, Button } from '@wagao-ignite-ui/react'

export default {
    title: 'Form/Tooltip',
    component: Tooltip,
    args: {
        children: <Button>Hover me</Button>,
        content: 'This is a Tooltip',
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
