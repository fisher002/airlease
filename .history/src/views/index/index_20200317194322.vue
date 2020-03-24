<template>
  <el-container>
    <el-header>
        <header></header>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import header from '../../components/public/header'

export default {
  components: {header},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  min-height: 300px !important;
  line-height: 300px;
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
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: 600px;
  line-height: 600px;
}
</style>