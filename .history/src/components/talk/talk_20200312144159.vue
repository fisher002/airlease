<template>
  <div class="box_talk">
    <div class="head_talk">
        <span>某大傻群</span>
    </div>
    <div class="con_talk"></div>
    <div class="footer_talk"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created(){},
  mounted(){},
  methods:{
    
  }
};
</script>
<style scoped>
.box_talk {
  width: 300px;
  background: whitesmoke;
  border: 1px black solid;
  margin: auto;
}
.head_talk {
    width: 100%;
    height: 50px;
    background: rgb(119, 197, 95);
    color: rgb(255, 255, 255);
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.con_talk {
    width: 100%;
    height: 400px;
  }
.footer_talk {
    width: 100%;
    height: 40px;
    background: rgb(119, 197, 95);
  }
</style>>