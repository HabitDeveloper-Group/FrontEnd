import createRequest from '../utils/request'

//登录
export function loginRequest(data) {
  return createRequest ({
    url: '/user/login',
    method: 'POST',
    data,
    needLogin: false
  })
}

//登出
export function logoutRequest(data) {
  return createRequest ({
    url: '/user/logout',
    method: 'GET',
    loading: false
  })
}

//判断用户名是否存在
export function registerJudgeRequest(data) {
  return createRequest ({
    url: '/user/register',
    method: 'GET',
    data,
    needLogin: false
  })

}

//申请请求
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
    loading: false,
  })
}

//查询已完成的习惯
export function complishedHabitsRequest(data) {
  return createRequest ({
    url: '/home/hasFinished',
    method: 'GET',
    loading: false,
  })
}

//查询已失败的习惯
export function failedHabitsRequest(data) {
  return createRequest ({
    url: '/home/hasFailed',
    method: 'GET',
    loading: false,
  })
}

//打卡
export function checkInHabitsRequest(data) {
  return createRequest ({
    url: '/home/'+ data,
    method: 'POST',
  })
}

//查询所有的习惯
export function allHabitsRequest(data) {
  return createRequest ({
    url: '/habits',
    method: 'GET',
    loading: false,
  })
}

//获取所有图标
export function allIconsRequest(data) {
  return createRequest ({
    url: '/icons',
    method: 'GET',
    loading: false,
  })
}

//添加习惯
export function addHabitsRequest(data) {
  return createRequest ({
    url: '/habits',
    method: 'POST',
    data,
    loading: false,
  })
}

//查询某一个特定习惯
export function getInitHabitsRequest(data) {
  return createRequest ({
    url: '/habits/' + data,
    method: 'GET',
    loading: false,
  })
}

//修改某一个特定习惯
export function modifyHabitsRequest(data) {
  return createRequest ({
    url: '/habits/',
    method: 'PUT',
    data,
    loading: false,
  })
}

//删除某一个特定习惯
export function deleteHabitsRequest(data) {
  return createRequest ({
    url: '/habits/' + data,
    method: 'DELETE',
    loading: false,
  })
}
