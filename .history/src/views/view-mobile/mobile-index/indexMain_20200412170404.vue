<template>
  <div class="main-box">
    <img style="width: 100%;height: 100px;" src="../../../../static/img/lunbo.jpg" />
    <div class="index-body"></div>
  </div>
</template>
<script>
import api from './indexUrl'
export default {
  data() {
    return {
      listdata: "",
      params: {
        keyword: "",
        pageNumber: 0
      }
    };
  },
  created() {},
  methods: {
    getAirList() {
      api.getAirList(params).then(res=>{
        if(res.data.code == 200) {
          this.listdata = res.data;
        }
      },res=>{
        console.log('error');
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-box {
  padding: 3px 3px;
  overflow: hidden;
  .index-head {
    display: flex;
    justify-content: space-between;
  }
}
</style>