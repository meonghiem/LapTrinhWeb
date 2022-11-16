export function capitalize(str: string) {
  return typeof str === 'string' && str?.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const imageLink = (url: string) => `${process.env.API_BASE}/${url}`
