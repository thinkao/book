<template>
  <VerticalLayout hHeightOpen="60px">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的个人</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">我的信息</el-menu-item>
                  <el-menu-item index="1-2">我的钱包</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="1-3">我的积分</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">我的订单</template>
                  <el-menu-item index="1-4-1">购物车</el-menu-item>
                  <el-menu-item index="1-4-1">待收货</el-menu-item>
                  <el-menu-item index="1-4-1">已购买</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">我的消息</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title" @click="drawer = true">我的日历</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">我的设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">公众类书籍</template>
        <el-menu-item index="2-1">语文类</el-menu-item>
        <el-menu-item index="2-2">数学类</el-menu-item>
        <el-menu-item index="2-3">外语类</el-menu-item>
        <el-menu-item index="2-4">政治类</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">专业类书籍</template>
        <el-menu-item index="3-1">计算机类</el-menu-item>
        <el-menu-item index="3-2">机械类</el-menu-item>
        <el-menu-item index="3-3">艺术类</el-menu-item>
        <el-menu-item index="3-4">经济类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">考研书籍材料</template>
        <el-menu-item index="4-1">计算机类</el-menu-item>
        <el-menu-item index="4-2">机械类</el-menu-item>
        <el-menu-item index="4-3">艺术类</el-menu-item>
        <el-menu-item index="4-4">经济类</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">专业英语</template>
        <el-menu-item index="5-1">CET</el-menu-item>
        <el-menu-item index="5-2">雅思托福</el-menu-item>
        <el-menu-item index="5-3">艺术类</el-menu-item>
        <el-menu-item index="5-4">经济类</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">小说类</template>
        <el-menu-item index="6-1">计算机类</el-menu-item>
        <el-menu-item index="6-2">机械类</el-menu-item>
        <el-menu-item index="6-3">艺术类</el-menu-item>
        <el-menu-item index="6-4">经济类</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">漫画类</template>
        <el-menu-item index="7-1">冒险</el-menu-item>
        <el-menu-item index="7-2">科幻</el-menu-item>
        <el-menu-item index="7-3">搞笑</el-menu-item>
        <el-menu-item index="7-4">剧情</el-menu-item>
        <el-menu-item index="7-5">奇幻</el-menu-item>
        <el-menu-item index="7-6">动作</el-menu-item>
        <el-menu-item index="7-7">儿童</el-menu-item>
        <el-menu-item index="7-8">情感</el-menu-item>
        <el-menu-item index="7-9">其他</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">其他</template>
        <el-menu-item index="8-1">计算机类</el-menu-item>
        <el-menu-item index="8-2">机械类</el-menu-item>
        <el-menu-item index="8-3">艺术类</el-menu-item>
        <el-menu-item index="8-4">经济类</el-menu-item>
      </el-submenu>
      <el-submenu index="9" style="float: right">
        <template slot="title">此处显示昵称</template>
        <el-menu-item index="9-1" style="text-align: center">修改密码</el-menu-item>
        <el-menu-item index="9-2" style="text-align: center" @click="loginTo">退出登录</el-menu-item>
      </el-submenu>
      <img src="../../static/img/auto.jpg" style="width: 60px;height: 60px;float: right;">
    </el-menu>
    <el-drawer
      title="我的日历"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <el-calendar v-model="value">
      </el-calendar>
    </el-drawer>
  </VerticalLayout>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      drawer: false,
      direction: 'ltr',
      value: new Date()
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    loginTo () {
      this.$router.push('../Login')
    }
  }
}
</script>
<style>

</style>
