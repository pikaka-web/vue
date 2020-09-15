<template>
  <div id="app">
    <el-container>
      <el-aside width="370px">
        <p class="img"><img src="./assets/logo.png" alt=""></p>
        <p class="name">Mint</p>
        <p class="link">
          <a href="" class="el-icon-dish-1"></a>
          <a href="" class="el-icon-user-solid"></a>
          <a href="" class="el-icon-camera-solid"></a>
          <a href="" class="el-icon-video-camera-solid"></a>
          <a href="" class="el-icon-s-custom"></a>
        </p>
        <ul class="nav">
          <li><router-link to="/?name=afei&age=18">HOME</router-link></li>
          <li><router-link to="/about">ABOUT ME</router-link></li>
          <li><router-link to="/resume">MY RESUME</router-link></li>
          <li><router-link to="/services">SERVICES</router-link></li>
          <li><router-link to="/Portfolio">PORTFOLIO</router-link></li>
          <li><router-link to="/Blog">MY BLOG</router-link></li>
          <li><router-link to="/Contact">CONTACT</router-link></li>
        </ul>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
  .el-aside{
    height: 100%;
  }
  .el-aside .link a{
    color: #000;
    font-size: 20px;
    text-decoration: none;
    transition: color .3s;
  }
  .el-aside .link a:hover{
    color: #666;
  }
</style>
