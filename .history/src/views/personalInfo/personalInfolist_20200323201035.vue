<template>
  <div>
    <headerV2></headerV2>
    <div class="center">
      <div class="info-box">
        <div v-if="sideData" class="info-body-left" :style="{'height':(sideData.length*50)+'px'}">
          <div
            class="info-left-menu"
            v-for="(item,index) in sideData"
            :style="{'border-bottom': (index < (sideData.length - 1) ? '#edd5d5 1px solid' : '')}"
            :key="index"
            @click="sendType(item.type)"
          >{{item.menuName}}</div>
        </div>
        <div class="info-body-right">
          <div v-if="type == 'myMessage'">
            <mymessage></mymessage>
          </div>
          <div v-else-if="type == 'leased'">{{type}}</div>
          <div v-else-if="type == 'xxx'">{{type}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerV2 from "@/components/public/headerV2";
import mymessage from "./myMessage";
const sidemenus = [
  {
    menuName: "我的信息",
    type: "myMessage",
    menuId: "00001"
  },
  {
    menuName: "租赁记录",
    type: "leased",
    menuId: "00002"
  },
  {
    menuName: "xxxxxxx",
    type: "xxx",
    menuId: "00003"
  }
];
export default {
  components: { headerV2, mymessage },
  data() {
    return {
      sideData: sidemenus,
      type: "myMessage"
    };
  },
  created() {
    if (
      this.$session.get("user") != undefined &&
      this.$session.get("user") != null
    ) {
      console.log('用户已登录');
    } else {
      this.$router.go(-1);
    }
  },
  methods: {
    sendType(type) {
      this.type = type;
    }
  }
};
</script>
<style lang="scss" scoped>
.center {
  width: 100%;
  display: flex;
  justify-content: center;
}
.info-box {
  width: 50%;
  margin-top: 8px;
  display: flex;
  .info-body-left {
    width: 20%;
    box-shadow: #6ea2a2 0 0 2px;
    border-radius: 2px;
    .info-left-menu {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: #f0f6f6;
    }
    .info-left-menu:hover {
      background: #d0dada;
    }
  }
  .info-body-right {
    width: 80%;
    min-height: 500px;
    box-shadow: #6ea2a2 0 0 5px;
    border-radius: 5px;
  }
}
</style>