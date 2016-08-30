let debug = (process.env.NODE_ENV !== 'production')
export const API_USER = debug ? 'https://dev-users.beautifulreading.com' : 'https://api-users.beautifulreading.com'

export const API_MAGIC = debug ? 'https://dev-magic.beautifulreading.com' : 'https://magic.beautifulreading.com'

export const API_RIO = debug ? 'https://dev-rio.beautifulreading.com' : 'https://api-rio.beautifulreading.com'
export const API_SALON = debug ? 'http://salon.beautifulreading.com' : 'http://salon.beautifulreading.com'


export const CookieDomain = debug ? 'salon' : ''