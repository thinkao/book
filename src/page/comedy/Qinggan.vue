<template>
  <div class="layout-div">
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
      <el-button class="zdy-button bao_cun" style="float: right;margin: 10px 15px 0 0;" @click="changeMap(2)">新增</el-button>
    </div>
    <div class="layout-div" style="padding: 0 10px 0;">
      <div class="layout-div data-list-cont">
        <el-table border :data="tableData" row-class-name="eltable-row table-click-row" stripe style="width: 100%" :height="400" :max-height="tableHeight" v-loading="tableLoading">
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="book_name" label="书籍名称"></el-table-column>
          <el-table-column prop="book_editor" label="作者" width="380"></el-table-column>
          <el-table-column prop="book_price" label="单量价格"></el-table-column>
          <el-table-column prop="book_num" label="库存数量"></el-table-column>
          <el-table-column prop="book_kind" label="类别"></el-table-column>
          <el-table-column  label="操作"  width="200">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import demo from '@/page/MainPage'
export default {
  name: 'Qinggan',
  components: {
    'Demo': demo
  },
  data () {
    return {
      tableData: [],
      updateForm: {
        book_editor: '',
        book_id: '',
        book_name: '',
        book_num: '',
        book_price: '',
        pub_id: ''
      }
    }
  },
  methods: {
    search () {
    }
  },
  mounted () {
    this.search()
  }
}

</script>

<style scoped>

</style>
