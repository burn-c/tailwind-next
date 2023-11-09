'use client'

import * as SelectPrimimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectPrimimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...rest }: SelectProps) {
  return (
    <SelectPrimimitive.Root {...rest}>
      <SelectPrimimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimimitive.Icon>
      </SelectPrimimitive.Trigger>

      <SelectPrimimitive.Portal>
        <SelectPrimimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimimitive.Viewport>{children}</SelectPrimimitive.Viewport>
        </SelectPrimimitive.Content>
      </SelectPrimimitive.Portal>
    </SelectPrimimitive.Root>
  )
}
