import axios from 'axios'

/*
* 登录接口
*/
export const login = (params) => {
  return axios.post(`http://127.0.0.1:8080/user/login`, params).then(res => res)
}
/*
* 注册接口
**/
export const register = (params) => {
  return axios.post(`http://127.0.0.1:8080/user/addUser`, params).then(res => res)
}
/*
* 根据ID查询书籍
* */
export const getBookByBook_id = (id) => {
  return axios.get(`http://127.0.0.1:8080/book/getBookBy/${id}`).then(res => res)
}

/*
* 根据ID删除书籍
*/
export const deleteBookByBook_id = (id) => {
  return axios.delete(`http://127.0.0.1:8080/book/delete/${id}`).then(res => res)
}
/*
* 根据书籍类别查询书籍
* */
export const getBookByKind_name = (kind) => {
  return axios.get(`http://127.0.0.1:8080/book/getAll/${kind}`).then(res => res)
}

/*
* 列出所有书籍
* */
export const getBookAll = (params) => {
  return axios.post(`http://127.0.0.1:8080/book/page`,params).then(res => res)
}

/*
* 列出所有用户
* */
export const getUserAll = (params) => {
  return axios.get(`http://127.0.0.1:8080/user/getPageUser`,params).then(res => res)
}

/*
* 修改用户角色
* */
export const updateUserRole = (params) => {
  return axios.post(`http://127.0.0.1:8080/user/updateUserRole`,params).then(res => res)
}
