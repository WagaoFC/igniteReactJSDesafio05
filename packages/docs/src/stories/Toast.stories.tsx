import { useState } from 'react'
import { Button, Toast, ToastProps } from '@wagao-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
