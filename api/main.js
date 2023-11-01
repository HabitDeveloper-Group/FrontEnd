import createRequest from '../utils/request'

export function loginRequest(data) {
  return createRequest ({
    url: '/user/login',
    method: 'POST',
    data,
    needLogin: false
  })
}

export function registerJudgeRequest(data) {
  return createRequest ({
    url: '/user/register',
    method: 'GET',
    data,
    needLogin: false
  })

}

export function registerRequest(data) {
  return createRequest ({
    url: '/user/register',
    method: 'POST',
    data,
    needLogin: false
  })
}