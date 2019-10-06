<template>
  <div class="login">
    <div class="login-main">
      <img src="https://images2.alphacoders.com/545/54542.jpg" width="100%" height="100%" style="position: fixed;top:0;left: 0" >
      <div style="width: 100%;position: absolute;text-align: right;">
        <el-button type="text" @click="open" style="color: white;font-family:  微软雅黑;">立即注册?</el-button>
      </div>
      <div style="width: 100%;position: absolute;text-align: center;top: 50px;">
        <p><span style="margin-left: 10px;font-size: 35px;font-family: 微软雅黑;color: #fff">书到用时方恨少,事非经过不知难</span></p>
      </div>
      <div class="login-main-middle">
        <el-form :model="addForm" ref="addForm" label-position="left" label-width="0px"
                 class="demo-ruleForm login-container form-input">
          <h3 style="color: white;margin-top: 15px">欢迎登录</h3>
          <el-form-item prop="user_account">
            <el-input style="width: 80%" type="text" size="small" v-model="addForm.user_account" auto-complete="off"
                      placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="user_pass">
            <el-input style="width: 80%" type="password" size="small" v-model="addForm.user_pass" auto-complete="off"
                      placeholder="密码"></el-input>
          </el-form-item>
          <el-checkbox style="float: left;margin-left: 50px" v-model="checked" class="remember">记住密码</el-checkbox>
          <el-form-item prop="login">
            <el-button type="primary" style="width: 400px;height: 35px;margin-top: 15px" @click="onLogin"
                       :loading="loginLoading" @keyup.enter.native="onLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog title="新用户注册" :visible.sync="dialogVisible" width="30%">
      <el-form :data="this.openlaunch">
        <el-form-item prop="user_account">
          <el-input style="width: 100%" type="text" size="small" v-model="addForm.user_account" auto-complete="off"
                    placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item prop="user_pass">
          <el-input style="width: 100%" type="password" size="small" v-model="addForm.user_pass" auto-complete="off"
                    placeholder="请设置新的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="text" @click="dialogVisible = false" style="width: 100%;text-decoration: underline ">已有账号，点击登录</el-button>
        </el-form-item>
        <el-form-item prop="login">
          <el-button type="primary" style="width: 100%;height: 35px;margin-top: 5px" @click="onRegister"
                     :loading="loginLoading" @keyup.enter.native="onRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<!--<script src="https://cdn.jsdelivr.net/npm/vue"></script>-->
<script>
export default {
  name: 'login',
  data () {
    return {
      openlaunch: [],
      dialogVisible: false,
      checked: false,
      loginLoading: false,
      input1: '',
      input2: '',
      addForm: {
        user_account: '',
        user_pass: '',
        //user_name: '',
      }
    }
  },
  methods: {
    onRegister () {
      if (this.addForm.user_account.trim() === '') {
        this.$message({message: '请输入您的手机号', type: 'error', customClass: 'zZindex'})
      } else if (this.addForm.user_pass.trim() === '') {
        this.$message({message: '请设置新的密码', type: 'error', customClass: 'zZindex'})
      } else {
        var registerParams = {user_account: this.addForm.user_account, user_pass: this.addForm.user_pass}
        this.$httpSystem.register(registerParams).then(resp => {
          this.loginLoading = false
          if (resp.data.code === 302) {
            this.$message({message: '该用户已存在!!!', type: 'error'})
          } else {
            this.$message({message: '注册成功', type: 'success'})
            this.dialogVisible = false
          }
        })
      }
    },
    onLogin () {
      sessionStorage.clear()
      if (this.addForm.user_account.trim() === '') {
        this.$message({message: '请输入账号', type: 'error', customClass: 'zZindex'})
      } else if (this.addForm.user_pass.trim() === '') {
        this.$message({message: '请输入密码', type: 'error', customClass: 'zZindex'})
      } else {
        console.log(this.addForm.user_account + '账号')
        console.log(this.addForm.user_pass + '密码')
        var loginParams = {user_account: this.addForm.user_account, user_pass: this.addForm.user_pass}
        this.$httpSystem.login(loginParams).then(resp => {
          this.loginLoading = false
          console.log(resp+'输出resp')
          if (resp.data.code === 401) {
            this.$message({message: '用户名或者密码错误', type: 'error'})
          } else {
            this.$message({message: '登陆成功', type: 'success'})
            let user = JSON.parse(resp.data.data)
            //this.addForm.user_name = user.user_name
            sessionStorage.setItem('user_name',user.user_name)
            sessionStorage.setItem('user_id',user.user_id)
            sessionStorage.setItem('role_id',user.role_id)
            sessionStorage.setItem('user_account',this.addForm.user_account)
            sessionStorage.setItem('user', resp.data.data)
            sessionStorage.setItem('token', user.token)
            this.$router.push('page/HomePage')
          }
          console.log('success!!!')
        }).catch(e => {
          this.loginLoading = false
        })
      }
    },
    open () {
      this.openlaunch = []
      this.dialogVisible = true
    }
  },
  mounted () {
    sessionStorage.clear()
  }
}
</script>
<style>
  @import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
  .login{
    max-height: 750px;
    overflow: auto;
    position: relative;
  }
  .login-main {
    width: 100%;
    height: 100%;
    /*position: absolute;*/
    overflow: hidden;
  }
  .login-main-middle {
    position: relative;
    min-width: 360px;
    min-height: 320px;
    text-align: center;
    margin-top: 180px;
    height: 100%;
    float: left;
  }
  .form-input{
    width: 500px;
    height: 280px;
    margin-left: 520px;
    background: transparent; /*背景透明*/
    border: 2px solid rgba(255,255,255,0.3); /*边框半透明*/
    box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.2);  /*内外渐变阴影*/
  }
</style>
