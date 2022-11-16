import { useContext, useMemo } from 'react'

import { StoreContext } from '../provider'

export function useRootStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }
  // console.log(context)

  const contextMemo = useMemo(() => context, [context])

  return contextMemo
}

export function useCounterStore() {
  const { counterStore } = useRootStore()
  return counterStore
}

export function useLayoutStore() {
  const { layoutStore } = useRootStore()
  return layoutStore
}

export function useAuthStore() {
  const { authStore } = useRootStore()
  return authStore
}
