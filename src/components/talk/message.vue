<template>
  <div class="m_box" v-if="datas">
    <div v-for="(item,index) in datas" :key="index">
      <div v-if="item.type === '0'" class="m_type">
        <div class="m_head">
          <img width="45" height="45" :src="item.head" />
        </div>
        <div class="m_con">
          <div class="m_name">
            <span>{{item.name}}</span>
          </div>
          <div class="m_content">
            <span>{{item.content}}</span>
          </div>
        </div>
      </div>
      <div v-else class="m_type">
        <div class="m_con">
          <div class="m_name" style="text-align:right">
            <span>{{item.name}}</span>
          </div>
          <div class="m_contenta">
            <div class="m_contentb">
              <span>{{item.content}}</span>
            </div>
          </div>
        </div>
        <div class="m_head">
          <img width="45" height="45" :src="item.head" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "message",
  props: {
    datas: ""
  },
  data() {
    return {
      data: [
        {
          head: "../../../static/img/zhang.jpg",
          name: "张大傻",
          content: "听说你还没有对象",
          type: "0"
        },
        {
          head: "../../../static/img/zhou.jpg",
          name: "周某傻",
          content: "是没有啊",
          type: "1"
        }
      ]
    };
  },
  created() {
    // console.log(this.data);
  }
};
</script>
<style lang="scss" scoped>
.m_box {
  padding: 6px 0px;
  width: 100%;
}
.m_type {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
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
  display: flex;
  justify-content: flex-end;
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