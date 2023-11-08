'use client'

import { UploadCloud } from 'lucide-react'

import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 to-zinc-500 px-6 py-4 text-center shadow-sm hover:border-violet-200 hover:text-violet-500"
    >
      <div className="border-6 rounded-full border-zinc-100 bg-zinc-200 p-2 group-hover:border-violet-100 group-hover:bg-violet-200">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click upload</span> or
          drag and drop
        </span>

        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px).</span>
      </div>
    </label>
  )
}
