import { AuthStore } from './auth'
import { CounterHydration, CounterStore } from './counter'
import { LayoutStore } from './layout'

export type RootStoreHydration = {
  stopwatchStore?: CounterHydration
}
export class RootStore {
  counterStore: CounterStore
  layoutStore: LayoutStore
  authStore: AuthStore

  constructor() {
    this.counterStore = new CounterStore(this)
    this.layoutStore = new LayoutStore(this)
    this.authStore = new AuthStore(this)
  }

  hydrate(data: RootStoreHydration) {
    if (data.stopwatchStore) {
      this.counterStore.hydrate(data.stopwatchStore)
    }
  }
}
