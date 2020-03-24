<template>
  <div class="m_box">
    <div v-if="data.type == '0'">
      <div class="m_head">
        <img width="45" height="45" :src="data.head" />
      </div>
      <div class="m_con">
        <div class="m_name">
          <span>{{data.name}}</span>
        </div>
        <div class="m_content">
          <p>{{data.content}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="m_con">
        <div class="m_name">
          <span>{{data.name}}</span>
        </div>
        <div class="m_content">
          <p>{{data.content}}</p>
        </div>
      </div>
      <div class="m_head">
        <img width="45" height="45" :src="data.head" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
  props: {
    data: {head:'../../../static/img/zhang.jpg',name:'张大傻',content:'听说你还没有对象',type:'0'}
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.m_box {
  padding: 2px 2px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.m_head {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}
.m_con {
  width: 250px;
  display: flex;
  .m_name {
    width: 100%;
    height: 25px;
  }
  .m_content {
    width: 100%;
  }
}
</style>