import { enableStaticRendering } from 'mobx-react-lite'
import { createContext, ReactNode } from 'react'
import { RootStore, RootStoreHydration } from 'src/stores/index'

enableStaticRendering(typeof window === 'undefined')

// configure({ enforceActions: 'observed', computedRequiresReaction: true, reactionRequiresObservable: true })

let clientStore
export const StoreContext = createContext<RootStore | undefined>(undefined)
StoreContext.displayName = 'StoreContext'

export function RootStoreProvider({
  children,
  hydrationData,
}: {
  children: ReactNode
  hydrationData?: RootStoreHydration
}) {
  const store = initializeStore(hydrationData)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData?: RootStoreHydration): RootStore {
  const _store = clientStore ?? new RootStore()

  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!clientStore) clientStore = _store

  return _store
}
