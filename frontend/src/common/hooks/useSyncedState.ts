import { Dispatch, SetStateAction, useState } from 'react'

export type SyncedProp<S> = [S, Dispatch<SetStateAction<S>>]
export type CustomSyncedProp<S> = [S, (S) => void]

export function useSyncedState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, () => SyncedProp<S>] {
  const [state, setState] = useState(initialState)
  const getSyncedProp = (): SyncedProp<S> => [state, setState]
  return [state, setState, getSyncedProp]
}

export function useNestedSyncedState<S>(sp: SyncedProp<S>): [S, Dispatch<SetStateAction<S>>, () => SyncedProp<S>] {
  const getSyncedProp = (): SyncedProp<S> => sp
  return [...sp, getSyncedProp]
}
