import { GET, POST } from '../api'

export function kakaoAuth(data: unknown) {
  return POST('auth/kakao/', data)
}

export function getUser() {
  return GET('auth/user/')
}

export function googleAuth(data: unknown) {
  return POST('auth/google/', data)
}
