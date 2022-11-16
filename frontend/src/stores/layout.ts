import { action, makeObservable, observable } from 'mobx'

import { RootStore } from '.'

export type LayoutHydration = {
  isOpen: boolean
}

export class LayoutStore {
  root: RootStore
  isOpen: boolean
  constructor(root: RootStore) {
    this.root = root
    makeObservable(this, {
      open: action.bound,
      close: action.bound,
      isOpen: observable,
    })
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  hydrate(data?: LayoutHydration) {
    if (data) {
      this.isOpen = data.isOpen
    }
  }
}
