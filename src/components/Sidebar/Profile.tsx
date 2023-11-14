import { LogOut } from 'lucide-react'

import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/burn-c.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1  flex-col truncate">
        <span
          className="truncate text-sm font-semibold text-zinc-700"
          title="Carlos Oliveira"
        >
          Carlos Oliveira
        </span>
        <span
          className="truncate text-sm text-zinc-500"
          title="emailmuitograndecarlos.burndev@gmail.com"
        >
          emailmuitograndecarlos.burndev@gmail.com
        </span>
      </div>

      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
