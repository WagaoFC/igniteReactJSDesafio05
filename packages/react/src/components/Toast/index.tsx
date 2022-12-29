import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps } from 'react'

export type ToastProps = ComponentProps<typeof ToastPrimitive.Root> & {
    content: string
}

export function Toast({ content, children, ...props }: ToastProps) {
    return (
        <ToastPrimitive.Provider>
            <ToastPrimitive.Root>
                <ToastPrimitive.Title />
                <ToastPrimitive.Description />
                <ToastPrimitive.Close />
            </ToastPrimitive.Root>

            <ToastPrimitive.Viewport />
        </ToastPrimitive.Provider>
    )
}

Toast.displayName = 'Toast'
