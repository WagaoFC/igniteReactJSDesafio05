import type { StoryObj, Meta } from '@storybook/react'
import { ToastProps, Toast, Button } from '@wagao-ignite-ui/react'

export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
        children: <Button>Click me</Button>,
        content: 'This is a Toast',
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
