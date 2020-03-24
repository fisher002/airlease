<template>
  <el-container>
    <el-header height="auto">
        <Header></Header>
    </el-header>
    <el-main>
      <Mains></Mains>
    </el-main>
    <el-footer>版权所有，侵权必究！</el-footer>
  </el-container>
</template>
<script>
import Header from '@/components/public/header'
import Mains from '@/components/public/main'

export default {
  components: {Header,Mains},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: azure;
  color: #333;
  text-align: center;
  padding: 0 0 !important;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: azure;
  text-align: center;
  min-height: 600px;
  padding: 10px;
}
</style>