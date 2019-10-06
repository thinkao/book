<template>
    <div>
      <Demo></Demo>
      <img src="../../static/img/course3.png" style="width: 65%; height:260px;position: relative;display: inline;margin-left: 300px;margin-top: 30px">
      <div style="position:absolute;width:220px;z-indent:2;left:950px;top:11px;">
        <el-input type="text" placeholder="点击搜索" v-model="updateForm.search"></el-input>
      </div>
      <div style="position:absolute;left:1145px;top:11px;color:wheat">
        <el-button type="text" class="el-icon-search"></el-button>
      </div>

      <div style="text-align: center">
        <span style="font-family: '微软雅黑 Light';font-size: 20px">☆最新推荐☆</span>
        <br/>
        <img src="../../static/img/homepage1.png" style="height: 3px;width: 70%">
      </div>

      <div style="text-align: center">
        <span style="font-family: '微软雅黑 Light';font-size: 20px">☆阅读精选☆</span>
        <br/>
        <img src="../../static/img/homepage1.png" style="height: 3px;width: 70%">
      </div>

      <div style="text-align: center">
        <span style="font-family: '微软雅黑 Light';font-size: 20px">☆热门销量☆</span>
        <br/>
        <img src="../../static/img/homepage1.png" style="height: 3px;width: 70%">
      </div>
    </div>
</template>

<script>
import demo from '@/page/MainPage'
export default {
  components: {
    'Demo': demo
  },
  data () {
    return {
      updateForm: {
        search: ''
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}

</script>
<style>
  body{
    margin: 0;
    padding:0;
  }
</style>
