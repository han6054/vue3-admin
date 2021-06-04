import request from '@/api/config/request'
import { ApiResponse } from './type'
import { Profile } from '@/store/modules/user'

interface UserLoginData {
  username: string;
  password: string;
}

interface LoginResponseData {
  token: string;
}

export const login = (data: UserLoginData): Promise<ApiResponse<LoginResponseData>> => {
  return request.post(
    '/auth/login',
    data
  )
}

// 获取用户信息
interface UserBody {
  token: string;
}
export const getUserInfo = (data?: UserBody): Promise<ApiResponse<Profile>> => {
  return request.post('/auth/info', data)
}
