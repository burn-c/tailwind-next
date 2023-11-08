'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const noFilesSelected = !event.target.files?.length

    if (noFilesSelected) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const files = Array.from(event.target.files!)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
