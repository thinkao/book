<template>
  <div class="layout-div">
    <Demo></Demo>
    <div class="layout-div" slot="header" v-if="showList===1" style="margin-top: 40px">
      <el-form class="query-from"  v-model="queryForm"  :inline="true" style="display: inline;padding-left: 10px">
        <el-form-item>
          <el-input v-model="queryForm.parameter.name" placeholder="输入条件"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="zdy-button" icon="el-icon-search" :plain="true" @click="search"></el-button>
        </el-form-item>
      </el-form>
      <el-button v-if="showAddBtn()" class="zdy-button bao_cun" style="margin: 0px 30px 0 0;display: inline;float: right;" @click="changeMap(2)">新增</el-button>
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
            width="50">
          </el-table-column>
          <el-table-column
            prop="book_name"
            label="书籍名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="book_editor"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="book_price"
            label="单量价格">
          </el-table-column>
          <el-table-column
            prop="book_num"
            label="库存数量">
          </el-table-column>
          <el-table-column
            prop="kind_name"
            label="类别">
          </el-table-column>
          <el-table-column
            prop="pub_name"
            label="出版社">
          </el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button v-if="showDelBtn(scope.row)" @click="deleteRow(scope.row)" type="text" size="small"><i class="el-icon-delete" title="删除"></i></el-button>
              <el-button v-if="showEditBtn(scope.row)" @click="updateRow(scope.row)" type="text" size="small"><i class="el-icon-edit" title="编辑"></i></el-button>
              <el-button @click="shopRow(scope.row)" type="text" size="small"><i class=" el-icon-shopping-cart-2" title="加入购物车"></i></el-button>
              <el-button @click="buyRow(scope.row)" type="text" size="small"><i class=" el-icon-shopping-bag-1" title="点击购买"></i></el-button>
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


    <div class="layout-div" v-if="showList===2" style="margin: 60px">
      <div slot="header" class="layout-div header-bar">
        <p style="display: inline"><el-button type="text" class="breadcrumb" @click="changeMap(1)">动漫情感</el-button><el-button type="text">> 新增</el-button></p>
        <div class="header-bar-but" style="float:right;margin-right:38px;display: inline">
          <el-button v-show="isUpdate" class="zdy-button bao_cun" @click="submitForm">保存</el-button>
          <el-button @click="changeMap(1)" class="zdy-button qu_xiao">取消</el-button>
        </div>
      </div>
      <div class="layout-div" style="padding: 20px 40px;margin-top:30px;overflow-y: auto;overflow-x: hidden">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="书籍名称" prop="book_name">
            <el-input v-model="ruleForm.book_name"></el-input>
          </el-form-item>
          <el-form-item label="书籍作者" prop="book_editor">
            <el-input v-model="ruleForm.book_editor"></el-input>
          </el-form-item>
          <el-form-item label="单本价格" prop="book_price">
            <el-input v-model="ruleForm.book_price" @blur="BlurText1($event)"></el-input>
          </el-form-item>
          <el-form-item label="出版社" prop="pub_name">
            <el-input v-model="ruleForm.pub_name"></el-input>
          </el-form-item>
          <el-form-item label="书籍类别" prop="kind_name">
            <el-select v-model="ruleForm.kind_name" placeholder="请选择书籍类别">
              <el-option-group label="公众类书籍" value="public">
                <el-option label="区域二" value="1"></el-option>
                <el-option label="区域二" value="2"></el-option>
              </el-option-group>
              <el-option-group label="专业类书籍" value="profess">
                <el-option label="区域二" value="3"></el-option>
                <el-option label="区域二" value="4"></el-option>
              </el-option-group>
              <el-option-group label="考研类书籍" value="graduate">
                <el-option label="区域二" value="5"></el-option>
                <el-option label="区域二" value="6"></el-option>
              </el-option-group>
              <el-option-group label="漫画类书籍" value="comedy">
                <el-option label="动漫情感" value="动漫情感"></el-option>
                <el-option label="儿童" value="ertong"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
          <el-form-item label="上传书图" prop="picture">
            <el-upload
              class="upload-demo"
              v-model="ruleForm.picture"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog title="提交订单" :visible.sync="dialogVisible" width="40%">
      <el-form :data="this.openlaunch" label-width="90px" class="demo-ruleForm">
        <el-form-item label="收货地址:" prop="accept_address">
          <el-input v-model="ruleForm.accept_address"></el-input>
        </el-form-item>
        <el-form-item label="收货人信息:" prop="name">
          <el-input style="width: 200px" placeholder="收货人姓名" v-model="ruleForm.accept_name"></el-input>
          <el-input style="width: 200px" placeholder="收货人手机" v-model="ruleForm.accept_phone"></el-input>
        </el-form-item>
        <el-form-item label="书籍信息:" prop="name">
          <span>{{ruleForm.book_name}}     {{ruleForm.book_editor}}     {{ruleForm.kind_name}}     {{ruleForm.pub_name}}</span>
        </el-form-item>
        <el-form-item label="订单备注:" prop="order_other">
          <el-input v-model="ruleForm.order_other"></el-input>
        </el-form-item>
        <el-form-item label="需要支付:" prop="book_price">
          <span>{{ruleForm.book_price}}元</span>
        </el-form-item>
        <el-form-item style="margin-left: 70px">
          <el-button type="primary">确认支付</el-button>
          <el-button style="margin-left: 60px" type="danger" @click="dialogVisible = false">取消订单</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="加入购物车" :visible.sync="dialogVisible1" width="40%">
      <el-form :data="this.openlaunch1" label-width="230px" class="demo-ruleForm">
        <el-form-item label="书籍名称:" prop="book_name">
          <span>{{ruleForm.book_name}}</span>
        </el-form-item>
        <el-form-item label="书籍作者:" prop="book_editor">
          <span>{{ruleForm.book_editor}}</span>
        </el-form-item>
        <el-form-item label="书籍价格:" prop="book_price">
          <span>{{ruleForm.book_price}}</span>
        </el-form-item>
        <el-form-item label="书籍种类:" prop="kind_name">
          <span>{{ruleForm.kind_name}}</span>
        </el-form-item>
        <el-form-item label="出版社名:" prop="pub_name">
          <span>{{ruleForm.pub_name}}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确认加入</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
      isUpdate: true,
      openlaunch: [],
      fileList: [],
      openlaunch1: [],
      dialogVisible: false,
      dialogVisible1: false,
      keywords: '',
      showList: 1,
      tableData: [],
      sizeTotal: 0,
      tableHeight: -1,
      ruleForm: {
        book_id: '',
        book_name: '',
        book_editor: '',
        book_price: '',
        kind_name: '',
        pub_name: '',
        accept_name: '',
        accept_phone: '',
        order_other: '',
        accept_address: '',
        picture: '',
        picture_name: ''
      },
      /*pageSizes: config.pageSizes,
      pageSize: config.pageSize,*/
      currentPage: 1,
      pageSize: 10,
      queryForm: {
        parameter: {
          name: ''
        },
        currentPage: 1,
        pageSize: 10
      },
      rules: {
        book_name: [
          { required: true, message: '请输入书籍名称', trigger: 'blur' },
        ],
        book_editor: [
          { required: true, message: '请输入书籍作者', trigger: 'blur' }
        ],
        book_price: [
          { required: true, message: '请输入书籍价格', trigger: 'blur' }
        ],
        kind_name: [
          { required: true, message: '请输入书籍种类', trigger: 'blur' }
        ],
        pub_name: [
          { required: true, message: '请输入书籍出版社', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    search () {
      var that = this
      let queryObj = {
        'current': this.queryForm.currentPage,
        'limit': this.queryForm.pageSize,
        'offset': 0,
        'book_name':this.queryForm.parameter.name,
        'kind_name': '动漫情感'
      }
      that.$httpSystem.getBookAll(queryObj).then(response => {
        that.tableData = []
        that.tableData = response.data.data.rows
        that.sizeTotal = response.data.data.total

      }).catch(function (error){
        console.log(error)
      })
    },

    table_index(index) {
      return (this.queryForm.currentPage - 1) * this.queryForm.pageSize + index + 1
    },
    changeMap (type) {
      if (this.showList === 2) {
        this.resetForm()
      }
      this.showList = type
      this.isUpdate = true
      if(type === 1){
        this.ruleForm = {
          book_name: '',
          book_editor: '',
          book_price: '',
          kind_name: '',
          pub_name: '',
        }
      }
      this.search()
    },
    submitForm() {
      var that = this
      if(that.ruleForm.book_name.trim()==='') {
        that.$message({message: '请输入书籍名称', type: 'error', customClass: 'zZindex'})
      }else if(that.ruleForm.book_editor.trim()==='') {
        that.$message({message: '请输入书籍作者', type: 'error', customClass: 'zZindex'})
      }else if(that.ruleForm.book_price.trim()==='') {
        that.$message({message: '请输入书籍价格', type: 'error', customClass: 'zZindex'})
      }else if(that.ruleForm.kind_name.trim()==='') {
        that.$message({message: '请输入书籍类别', type: 'error', customClass: 'zZindex'})
      }else if(that.ruleForm.pub_name.trim()==='') {
        that.$message({message: '请输入书籍出版社', type: 'error', customClass: 'zZindex'})
      }else {
        if(!this.ruleForm.book_id){
          axios.post(`http://127.0.0.1:8080/book/add`, this.ruleForm).then(function (response) {
            that.$message({message: '新增成功', type: 'success'})
            that.changeMap(1)
          })
        }else{
          axios.post(`http://127.0.0.1:8080/book/update`, this.ruleForm).then(function (response) {
            that.$message({type: 'success', message: '修改成功!', customClass: 'zZindex'});
            that.changeMap(1)
          })
        }
      }
    },
    showAddBtn (){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(user.role_id == '1'){
        return true;
      }else{
        return false;
      }
    },
    showDelBtn (row){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(user.role_id == '1'){
        return true;
      }else{
        return false;
      }
    },
    showEditBtn (row){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(user.role_id == '1'){
        return true;
      }else{
        return false;
      }
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    },
    BlurText1(e){
      let boolean = new RegExp("^[1-9]\\d*.\\d*|0\\.\\d*[1-9]\\d*|[0-9]$").test(e.target.value)
      if(!boolean){
        this.$message.warning('请输入数字')
        e.target.value=''
      }
    },
    updateRow(row) {
      this.showList = 2
      this.$httpSystem.getBookByBook_id(row.book_id).then(response => {
        this.resetForm()
        this.ruleForm = response.data.data
        console.log(this.ruleForm)
      }).catch(e => {
        console.log(e)
      })
    },
    deleteRow(row) {
      this.$confirm('是否确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$httpSystem.deleteBookByBook_id(row.book_id).then(response => {
          this.search()
          this.$message({type: 'success', message: '删除成功!'})
        })
      })
    },
    shopRow(row) {
      this.openlaunch1 = []
      this.dialogVisible1 = true
      this.$httpSystem.getBookByBook_id((row.book_id)).then(response => {
        this.ruleForm = response.data.data
        console.log(response.data.data)
      })
    },
    buyRow(row) {
      this.openlaunch = []
      this.dialogVisible = true
      this.$httpSystem.getBookByBook_id((row.book_id)).then(response => {
        this.ruleForm = response.data.data
        console.log(response.data.data)
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.currentPage = 1;
      this.queryForm.pageSize = this.pageSize;
      this.queryForm.currentPage = this.currentPage;
      this.search()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.queryForm.pageSize = this.pageSize;
      this.queryForm.currentPage = this.currentPage;
      this.search()
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
</style>
