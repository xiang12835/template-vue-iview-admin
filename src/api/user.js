import HttpRequest from '@/axios/api.request'

export const UserQryAction = () => {
  return HttpRequest.request({
    url: 'office/v1/user/',
    method: 'get'
  })
}

export const UserAddAction = (parameter) => {
  return HttpRequest.request({
    url: 'office/v1/user/',
    method: 'post',
    params: parameter
  })
}

export const UserUpdateAction = (parameter) => {
  return HttpRequest.request({
    url: 'office/v1/user/',
    method: 'put',
    params: parameter
  })
}

export const UserDelAction = (parameter) => {
  return HttpRequest.request({
    url: 'office/v1/user/',
    method: 'delete',
    params: {
      id: parameter
    }
  })
}

