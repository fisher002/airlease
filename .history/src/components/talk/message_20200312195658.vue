<template>
  <div class="m_box" v-if="data">
    <div v-if="data.type === '0'" class="m_type">
      <div class="m_head">
        <img width="45" height="45" :src="data.head" />
      </div>
      <div class="m_con">
        <div class="m_name">
          <span>{{data.name}}</span>
        </div>
        <div class="m_content">
          <span>{{data.content}}</span>
        </div>
      </div>
    </div>
    <div v-else class="m_type">
      <div class="m_con">
        <div class="m_name" style="text-align:right">
          <span>{{data.name}}</span>
        </div>
        <div class="m_contenta">
          <div class="m_contentb">
            <span>{{data.content}}</span>
          </div>
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
  name: "message",
  props: {
    datas: {
      head: "../../../static/img/zhang.jpg",
      name: "张大傻",
      content: "听说你还没有对象",
      type: "0"
    }
  },
  data() {
    return {
      data: {
        head: "../../../static/img/zhang.jpg",
        name: "张大傻",
        content: "听说你还没有对象",
        type: "1"
      }
    };
  },
  created() {
    // console.log(this.data);
  }
};
</script>
<style scoped>
.m_box {
  padding: 6px 0px;
  width: 100%;
}
.m_type {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  flex-direction: column;
}
.m_name {
  width: 100%;
  height: 25px;
  font-size: 12px;
  text-align: left;
}
.m_content {
  width: max-content;
  text-align: left;
  max-width: 97%;
  font-size: 16px;
  background: white;
  border-radius: 3px;
  padding: 2px 2px;
}
.m_contenta {
  width: 100%;
}
.m_contentb {
  width: max-content;
  text-align: left;
  max-width: 97%;
  font-size: 16px;
  background: white;
  border-radius: 3px;
  padding: 2px 2px;
}
</style>