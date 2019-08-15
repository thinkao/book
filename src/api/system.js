import axios from 'axios'

/*
* 登录接口
*/
export const login = (params) => {
  return axios.post(`http://127.0.0.1:8080/user/login`, params).then(res => res)
}
