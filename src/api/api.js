import axios from 'axios'


/*
*书籍查询接口
**/
export const bookList = (params) => {
  return axios.get(`http://127.0.0.1:8080/book/getALl/${params}`).then(res => res)
}
