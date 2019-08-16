<template>
  <div class="layout-div home-div">
    <div class="line"></div>
    <div class="header">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <img src="../../static/img/logo.png" class="logo">
        <el-menu-item style="font-family: 微软雅黑;font-size: 25px">尚书苑</el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        <el-button type="text" style="float: right;padding: 20px;color: white" @click="loginTo">登录</el-button>
      </el-menu>
    </div>
    <div class="picture">
      <el-carousel  style="position: relative" height="800px">
        <el-carousel-item v-for="item in picture" :key="item">
          <img :src="item.img" style="height: 800px;width: 100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <div class="title1">
        <span>服务好</span>
        <p style="font-size: 20px;color: #363636">本网站服务对象广泛，包括在学校中小学生、大学生以及社会群体，涉及到的资料有公众基础课书籍、专业课书籍、</p>
        <p style="font-size: 20px;color: #363636">考研资料、CET、雅思托福、课外书（小说、漫画等）等应有尽有</p>
      </div>
      <br/><br/>
      <div class="demo-image" style="position: relative;margin-left: 300px">
        <div class="block kind" v-for="a in url" :key="a">
          <el-image
            style="width: 100px; height: 100px"
            :src="a">
          </el-image>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <div class="block kind" v-for="fit in fits1" :key="fit">
          <span class="demonstration">{{ fit }}</span>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div class="demo-image" style="position: relative;margin-left: 300px">
        <div class="block kind" v-for="a in url" :key="a">
          <el-image
            style="width: 100px; height: 100px"
            :src="a">
          </el-image>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <div class="block kind" v-for="fit in fits2" :key="fit">
          <span class="demonstration">{{ fit }}</span>
        </div>
      </div>
      <div class="title1">
        <el-divider></el-divider>
        <span>速度快</span>
        <p style="font-size: 20px;color: #363636">本公司与部分城市的各大高校合作，在高校以及各个城市设有站点，配送快则五分钟，慢则一天</p>
      </div>
      <div class="speed">
        <img src="../../static/img/speed.jpg" style="position:relative;height: 900px;width: 100%">
      </div>
      <div class="title1">
        <el-divider></el-divider>
        <span>能省钱</span>
        <p style="font-size: 20px;color: #363636">不需要再为昂贵的书费材料费而苦苦烦恼，也不需要网购配送费而推推嚷嚷，在这里，一折购</p>
      </div>
      <div class="launcher_money">
        <div class="book">
          <img src="../../static/img/book.jpg" style="width: 300px;height: 450px;">
        </div>
      </div>
      <div class="launcher_money1">
        <p style="position: relative;font-size: 20px ;line-height: 35px">在这里</p>
        <p style="position: relative;font-size: 20px ;line-height: 35px">1元 = 10元</p>
        <p style="position: relative;font-size: 20px ;line-height: 35px">10本书 = 1本书</p>
        <p style="position: relative;font-size: 20px ;line-height: 35px">1分承諾 = 1份安心</p>
        <p style="position: relative;font-size: 30px ;line-height: 35px"> Are You OK ?</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fits1: ['公众基础书类', '考研书材料类', 'CET雅思托福类', '专业书籍类'],
      fits2: ['言情剧小说类', '情感剧漫画类', '社会人文科学类', '其他书籍类'],
      url: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565975771268&di=25e67b4b0c3db2b6cd519d4248d7e69d&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1801%2F162-1P116162621-52.png', 'http://img2.3lian.com/2014/f4/191/d/22.jpg', 'http://img2.3lian.com/2014/f4/191/d/22.jpg', 'http://img2.3lian.com/2014/f4/191/d/22.jpg'],
      picture: [
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555932101740&di=9ee42bcea75b9a6b91f15b6da964ac37&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F5879c03369db1.jpg'
        },
        {
          img: 'http://img2.3lian.com/2014/f4/191/d/22.jpg'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556526887&di=bfbad078380fffd1ec63abaf7d7dd163&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F573534849e26b.jpg'
        }
      ],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginTo() {
      this.$router.push('../Login')
    }
  },
  mounted () {
    this.getPicture()
  }
}

</script>
<style>
  *{
    margin: 0;
    padding:0;
  }
  .main{
    position: relative;
  }
  .header{
    position: relative;
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .picture{
    width: 100%;
    position: relative;
  }
  .logo{
    width: 35px;
    height: 35px;
    position: relative;
    float: left;
    margin-left: 12px;
    margin-top: 12px
  }
  .title1{
    margin-top: 50px;
    text-align: center;
    font-size: 32px;
  }
  .content{
    margin-top: 50px;

  }
  .kind{
    float: left;
    margin-left: 100px;
  }
  .book{
    margin-left: 300px;
    margin-top: 50px;
    position: relative;
  }
  .launcher_money{
    float: left;
    position: relative;
   }
  .launcher_money1{
    margin-top: 200px;
    margin-left: 800px;
    position: relative;
  }
</style>
