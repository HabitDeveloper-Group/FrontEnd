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
//查询待完成的习惯
export function processingHabitsRequest(data) {
  return createRequest ({
    url: '/home',
    method: 'GET',
  })
}

//查询已完成的习惯
export function complishedHabitsRequest(data) {
  return createRequest ({
    url: '/home/hasFinished',
    method: 'GET',
  })
}

//查询已失败的习惯
export function failedHabitsRequest(data) {
  return createRequest ({
    url: '/home/hasFailed',
    method: 'GET',
  })
}
