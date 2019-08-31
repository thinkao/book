<template>
  <div class="layout-div">
    <Demo></Demo>
    <div class="layout-div" slot="header" style="padding: 0 10px;" v-if="showList===1">
      <el-form class="query-from"  v-model="ruleForm"  :inline="true">
        <el-form-item>
          <el-input  placeholder="输入条件"></el-input>
          <!--v-model="updateForm.parameter.name"-->
        </el-form-item>
        <el-form-item>
          <el-button class="zdy-button" icon="el-icon-search" :plain="true" @click="search"></el-button>
        </el-form-item>
      </el-form>
      <el-button class="zdy-button bao_cun" style="float: right;margin: 10px 15px 0 0;" @click="changeMap(2)">新增</el-button>
      <div class="layout-div" style="padding: 0 10px 0;">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
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
              <el-button @click="deleteRow(scope.row)" type="text" size="small"><i class="iconfont icon-shanchu" title="删除"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="layout-div" v-if="showList===2">
      <div slot="header" class="layout-div header-bar">
        <p><span class="breadcrumb" @click="changeMap(1)">动漫情感</span><span>> 新增</span></p>
        <div class="header-bar-but" style="float: right;">
          <el-button v-show="isUpdate" class="zdy-button bao_cun" @click="submitForm">保存</el-button>
          <el-button @click="changeMap(1)" class="zdy-button qu_xiao">取消</el-button>
        </div>
      </div>
      <div class="layout-div" style="padding: 20px 40px;overflow-y: auto;overflow-x: hidden">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="书籍名称" prop="name">
            <el-input v-model="ruleForm.book_name"></el-input>
          </el-form-item>
          <el-form-item label="书籍作者" prop="name">
            <el-input v-model="ruleForm.book_editor"></el-input>
          </el-form-item>
          <el-form-item label="单本价格" prop="name">
            <el-input v-model="ruleForm.book_price" @blur="BlurText1($event)"></el-input>
          </el-form-item>
          <el-form-item label="出版社" prop="name">
            <el-input v-model="ruleForm.pub_name"></el-input>
          </el-form-item>
          <el-form-item label="书籍类别" prop="region">
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
        </el-form>
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
      isUpdate: true,
      showList: 1,
      tableData: [],
      items:[],
      sizeTotal: 0,
      ruleForm: {
        book_name: '',
        book_editor: '',
        book_price: '',
        kind_name: '',
        pub_name: '',
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
      /*updateForm:{
        book_editor:'',
        book_id: '',
        book_name: '',
        kind_name: '',
        book_num: '',
        book_price: '',
        pub_name: ''
      }*/
    }
  },
  methods: {
    search () {
      var that = this
      axios.get(`http://127.0.0.1:8080/book/getAll/动漫情感`).then(function (response) {
        console.log(response)
        that.items = response.data.data
        that.tableData = response.data.data
      }).catch(function (error){
        console.log(error)
      })
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
        axios.post(`http://127.0.0.1:8080/book/add`, this.ruleForm).then(function (response) {
          that.$message({message: '新增成功', type: 'success'})
          that.changeMap(1)
        })
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
    }
  },
  deleteRow (row) {
    // console.log('deleterow')
    this.$confirm('是否确定删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.deletemonreportById(row.id).then(resp => {
        if (resp.status !== 200) {
          this.$message({message: '出错了', type: 'error'})
        } else {
          this.search()
          this.$message({type: 'success', message: '删除成功!'})
        }
      }).catch(e => {
        this.tableLoading = false
        console.log(e)
      })
    }).catch(() => {
    })
  },
  mounted () {
    this.search()
  }
}

</script>

<style scoped>

</style>
