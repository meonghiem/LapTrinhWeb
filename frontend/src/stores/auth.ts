import Cookies from 'js-cookie'
import { action, makeObservable, observable } from 'mobx'
import Router from 'next/router'
import { COOKIE_KEY } from 'src/common/open-api/cookie'
export enum LayoutType {
  GUEST = 'guest',
  USER = 'user',
}

import { RootStore } from '.'

export type LayoutHydration = {
  isOpen: boolean
}

export class AuthStore {
  root: RootStore
  isLoggedIn: boolean

  layout = LayoutType.USER

  constructor(root: RootStore) {
    this.root = root
    makeObservable(this, {
      checkAuth: action.bound,
      login: action.bound,
      logout: action.bound,
      isLoggedIn: observable,
      layout: observable,
    })
  }

  checkAuth() {
    const isLoggedIn = !!Cookies.get(COOKIE_KEY.role)

    if (isLoggedIn) {
      this.isLoggedIn = true
      this.layout = LayoutType.USER
    } else {
      this.isLoggedIn = false
    }
  }

  login(role: string) {
    Cookies.set(COOKIE_KEY.role, role)
    this.isLoggedIn = true
    this.layout = LayoutType.USER
  }

  logout() {
    Cookies.remove(COOKIE_KEY.role)
    this.isLoggedIn = false
    this.layout = LayoutType.GUEST
    Router.push('/')
  }

  // hydrate(data?: LayoutHydration) {
  //   if (data) {
  //     this.isLoggedIn = data.isLoggedIn
  //   }
  // }
}
