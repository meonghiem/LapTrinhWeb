export function buildUrl(baseUrl: string, params: Record<string, string>, encode = true) {
  const query = new URLSearchParams()
  Object.entries(params)
    .filter((e) => ![undefined, null].includes(e[1]))
    .map((e) => {
      query.set(e[0], encode ? encodeURI(e[1]) : e[1])
    })
  return `${baseUrl}?${query}`
}

export * from './mfid'
export * from './navis'
