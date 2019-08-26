<template>
    <div>
      <Demo></Demo>
      <img src="../../static/img/Inkedhomepage1_LI.jpg" style="width: 77%;position: relative">
      <div style="position:absolute;width:220px;z-indent:2;left:950px;top:11px;">
        <el-input type="text" placeholder="点击搜索" v-model="updateForm.search"></el-input>
      </div>
      <div style="position:absolute;left:1145px;top:11px;color:wheat">
        <el-button type="text" class="el-icon-search"></el-button>
      </div>
      <img src="../../static/img/homepage1.png" style="height: 5px;width: 22%;margin: 0">
      <el-divider content-position="center">☆活动精选☆</el-divider>
      <el-divider content-position="center">☆限时秒杀☆</el-divider>
      <el-divider content-position="center">☆为您推荐☆</el-divider>

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
</style>
