'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
  children: ReactNode
}

export function ThemesProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
