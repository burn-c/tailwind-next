'use client'

import { User } from 'lucide-react'
import { useMemo } from 'react'

import { useFileInput } from './Root'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    const noHasFiles = files.length === 0
    if (noHasFiles) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  const nullImage = previewURL === null

  return nullImage ? (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <User className="h-8 w-8 text-violet-500" />
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewURL}
      alt=""
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
