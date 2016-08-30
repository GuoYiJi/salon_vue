import cookie from 'react-cookie'


export function saveCookie(name, value){
  cookie.save(name, value)
}

export function getCookie(name) {
  return cookie.load(name)
}