import equal from 'fast-deep-equal'
import { NextRouter } from 'next/router'

import { getParamProcessor } from './paramProcess'

export function encodeQuery(
  params: Record<string, any>,
  paramIntructions?: Types.ParamIntructions
): Record<string, string> {
  const entries = Object.entries(params)
    .map(([key, val]) => {
      const processor = getParamProcessor(key, paramIntructions)
      return [key, processor.encode(val)]
    })
    .filter(([_key, val]) => !['', undefined].includes(val))
  const query = Object.fromEntries(entries)
  return query
}

export function decodeQuery<T>(router: NextRouter, paramIntructions: Types.ParamIntructions): T {
  const query = router.query
  const entries = Object.entries(paramIntructions)
    .map(([key]) => {
      const processor = getParamProcessor(key, paramIntructions)
      const value = processor.decode(query[key].toString())
      return [key, value]
    })
    .filter(([_key, val]) => ![undefined].includes(val.toString()))
  return Object.fromEntries(entries)
}

export function isSameQuery(
  router: NextRouter,
  params: Record<string, any>,
  paramIntructions?: Types.ParamIntructions
): boolean {
  const query = encodeQuery(params, paramIntructions) || {}
  const routerQuery = router?.query || {}
  const isSame = equal(query, routerQuery)
  return isSame
}

export const applyQuery = (router: NextRouter, query: Record<string, string>, historyMethod?: 'push' | 'replace') => {
  const routerAction = historyMethod === 'replace' ? router.replace : router.push
  routerAction?.(
    {
      pathname: router.pathname,
      query: {
        ...router.query,
        ...query,
      },
    },
    undefined,
    { shallow: true }
  )
}
