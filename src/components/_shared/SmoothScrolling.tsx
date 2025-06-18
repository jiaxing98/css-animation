import Lenis from 'lenis'
import { type ReactNode, useEffect } from 'react'

export const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <div>{children}</div>
}
