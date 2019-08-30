<template>
  <div class="layout-div">
    <Demo></Demo>
    <div class="layout-div" slot="header" style="padding: 0 10px;">
      <el-form class="query-from"  v-model="updateForm"  :inline="true">
        <el-form-item>
          <el-input  placeholder="输入条件"></el-input>
          <!--v-model="updateForm.parameter.name"-->
        </el-form-item>
        <el-form-item>
          <el-button class="zdy-button" icon="el-icon-search" :plain="true" @click="search"></el-button>
        </el-form-item>
      </el-form>
      <el-button class="zdy-button bao_cun" style="float: right;margin: 10px 15px 0 0;" @click="">新增</el-button>
    </div>
    <div class="layout-div" style="padding: 0 10px 0;">
      <div class="layout-div data-list-cont">
        <el-table border row-class-name="eltable-row table-click-row" stripe style="width: 100%" :height="400">
          <!--<el-table-column type="index" label="序号" width="50"></el-table-column>-->
          <el-table-column prop="book_name" label="书籍名称"></el-table-column>
          <el-table-column prop="book_editor" label="作者" width="380"></el-table-column>
          <el-table-column prop="book_price" label="单量价格"></el-table-column>
          <el-table-column prop="book_num" label="库存数量"></el-table-column>
          <el-table-column prop="book_kind" label="类别"></el-table-column>
          <el-table-column prop="book_pub" label="出版社"></el-table-column>
        </el-table>
        <table>
          <!--<td>{{index}}</td>-->
          <td>{{this.updateForm.book_name}}</td>
          <td>{{this.updateForm.book_editor}}</td>
          <td>{{this.updateForm.book_price}}</td>
          <td>{{this.updateForm.book_num}}</td>
          <td>{{this.updateForm.kind_name}}</td>
          <td>{{this.updateForm.pub_name}}</td>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import demo from '@/page/MainPage'
import axios from 'axios'
import DateTable from 'element-ui/packages/calendar/src/date-table'

export default {
  name: 'Qinggan',
  components: {
    DateTable,
    'Demo': demo
  },
  data () {
    return {
      items:[],
      tits: '',
      sizeTotal: 0,
      tableData: [],
      updateForm:{
        book_editor:'',
        book_id: '',
        book_name: '',
        kind_name: '',
        book_num: '',
        book_price: '',
        pub_name: ''

      }
    }
  },
  methods: {
    search () {
      var that = this
      axios.get(`http://127.0.0.1:8080/book/getAll/动漫情感`).then(function (response) {
        console.log(response)
        console.log(response.data.data[0].kind_name)
        that.updateForm.kind_name = response.data.data[0].kind_name
        that.updateForm.book_price = response.data.data[0].book_price
        that.updateForm.book_num = response.data.data[0].book_num
        that.updateForm.book_price = response.data.data[0].book_price
        that.updateForm.book_editor = response.data.data[0].book_editor
        that.updateForm.pub_name = response.data.data[0].pub_name
        /*this.items = response
        console.log("123"+this.items)
        console("456"+response)
        console.log("456"+response.data)*/
        /*
        this.book_editor = response.data.data["0"]["kind_id"]
        */
      }).catch(function (error){
        console.log(error)
      })
      /*axios.get(`http://127.0.0.1:8080/book/getAll/78`).then(resp => {
        console.log(resp)
        if (resp.status !== 200) {
          this.$message({message: '出错了', type: 'error',offset: '250', customClass: 'zZindex'})
        } else {
          console(resp)
          this.sizeTotal = resp.data.data.total
          this.tableData = resp.data.data.rows
        }
      }).catch(e => {
        console.log(e)
      })*/
    }
  },
  mounted () {
    this.search()
  }
}

</script>

<style scoped>

</style>
