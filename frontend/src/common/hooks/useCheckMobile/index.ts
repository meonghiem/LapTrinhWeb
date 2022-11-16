import { useEffect, useState } from 'react'

export const useCheckMobile = (checkLg?: boolean) => {
  const [width, setWidth] = useState<number>()
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window?.innerWidth)
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
      }
    }
  }, [])

  return width <= (checkLg ? 1024 : 768)
}
