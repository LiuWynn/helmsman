/**
 * @author Beverly
 * @description 登录相关的方法
 */
import request from '@/service'
import { user } from '@/api/url';

export const login = userInfo => {
  return request({
    url: user.login,
    method: 'post',
    data: userInfo
  })
}

export function getInfo() {
  return request({
    url: user.info,
    method: 'get'
  }
  )
}

export function logout() {
  return request({
    url: user.logout,
    method: 'get'
  }
  )
}

export const register = registerInfo => {
  return request({
    url: user.register,
    method: 'post',
    data: registerInfo
  })
} 