'use client'

import * as SelectPrimimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function Select() {
  return (
    <SelectPrimimitive.Root>
      <SelectPrimimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimimitive.Value
          placeholder="Select a country"
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
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimimitive.Viewport>
            <SelectPrimimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
            >
              <SelectPrimimitive.ItemText className="text-black">
                Brazil
              </SelectPrimimitive.ItemText>

              <SelectPrimimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimimitive.ItemIndicator>
            </SelectPrimimitive.Item>

            <SelectPrimimitive.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
            >
              <SelectPrimimitive.ItemText className="text-black">
                United States
              </SelectPrimimitive.ItemText>

              <SelectPrimimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimimitive.ItemIndicator>
            </SelectPrimimitive.Item>
          </SelectPrimimitive.Viewport>
        </SelectPrimimitive.Content>
      </SelectPrimimitive.Portal>
    </SelectPrimimitive.Root>
  )
}
