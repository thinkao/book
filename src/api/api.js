import axios from 'axios'


/*
*书籍查询接口
**/
export const bookList = (params) => {
  return axios.get(`http://127.0.0.1:8080/book/getAll/${params}`).then(res => res)
}

/*
* 菜单管理
* */
export const getMenuById = (id) => {
  return axios.get(`http://127.0.0.1:8080/menu/getMenuById/${id}`).then(res => res)
}
