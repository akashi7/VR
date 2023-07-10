import * as http from '../api'

export const kakaoAuth = (data: unknown) => {
  return http.POST('auth/kakao', data)
}
