<template>
  <div class="layout-div">
    <Demo></Demo>
    <div class="layout-div" slot="header" style="margin-top: 40px">
      <el-form class="query-from"  v-model="updateForm"  :inline="true" style="display: inline;padding-left: 10px">
        <el-form-item>
          <el-input v-model="updateForm.parameter.name" placeholder="输入条件"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="zdy-button" icon="el-icon-search" :plain="true" @click="search"></el-button>
        </el-form-item>
      </el-form>
      <div class="layout-div data-list-cont-table" style="padding: 0 10px 0;">
        <el-table
          :data="tableData"
          :height="tableHeight"
          :max-height="tableHeight"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
            :index="table_index"
            width="100">
          </el-table-column>
          <el-table-column
            :show-overflow-tooltip="true"
            prop="user_id"
            label="用户ID"
            width="250">
          </el-table-column>
          <el-table-column
            prop="user_name"
            label="用户名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="user_account"
            label="用户账号">
          </el-table-column>
          <el-table-column
            prop="role_name"
            label="用户角色">
          </el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button @click="updateRow(scope.row)" type="text" size="small"><i class="el-icon-edit" title="修改用户角色"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="layout-div" style="text-align: right;position: relative;top: 8px;right: 15px">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total, sizes, prev, pager, next, jumper"
                       :current-page="currentPage" :page-size="pageSize" :total="sizeTotal">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="修改用户角色" :visible.sync="dialogVisible" width="40%">
      <el-select v-model="value" placeholder="请选择" style="margin-left: 80px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="success" @click="SureRow" style="margin-left: 10px">确认保存</el-button>
      <p>您选择的名字的Id是：{{value}}</p>
    </el-dialog>

  </div>
</template>
<script>
  import demo from '@/page/MainPage'
  import DateTable from 'element-ui/packages/calendar/src/date-table'
  export default {
  name: 'Qinggan',
  components: {
    DateTable,
    'Demo': demo
  },
  data () {
    return {
      value : '',
      tableHeight: -1,
      tableData: [],
      dialogVisible: false,
      sizeTotal: 0,
      updateForm: {
        user_id: '',
        user_name: '',
        user_account: '',
        user_pass: '',
        user_addr: '',
        user_phone: '',
        role_name: '',
        role_id: '',
        parameter:{
          name: ''
        }
      },
      options: [{
        value: '1',
        label: '管理员'
      }, {
        value: '2',
        label: '普通用户'
      }],
      value: ''

    }
  },
  methods: {
    search () {
      var that = this
      that.$httpSystem.getUserAll().then(response => {
        that.tableData = []
        that.tableData = response.data.data.rows
        that.sizeTotal = response.data.data.total
        console.log(this.tableData)

      }).catch(function (error){
        console.log(error)
      })
    },
    updateRow(row){
      this.dialogVisible = true
      /*获取用户id*/
      this.$api.getMenuById(row.user_id).then(response => {
        let data = JSON.stringify(response.data.data)
        console.log(data+'***********')
      })

    },
    SureRow (){
      /*let role_id = {{value}}*/
      console.log('########'+this.value)
      this.$httpSystem.updateUserRole(this.value).then(response =>{
        this.$message({type: 'success', message: '修改成功!', customClass: 'zZindex'});
      })
    },
  },
  mounted () {
    this.tableHeight = 490
    this.search()
  }
}

</script>

<style>
  body{
    margin: 0;
    padding:0;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 15px;
  }

</style>

