<template>
  <div>
    <headerV2></headerV2>
    <div class="center">
      <div class="info-box">
        <div class="info-body-left">
          <div
            class="info-left-menu"
            v-for="item in sideData"
            :key="item.menuId"
            @click="sendType(item.type)"
          >{{item.menuName}}</div>
        </div>
        <div class="info-body-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
import headerV2 from "@/components/public/headerV2";
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
    type: "xxxxxxx",
    menuId: "00003"
  }
];
export default {
  components: { headerV2 },
  data() {
    return {
      sideData: sidemenus
    };
  },
  methods: {
    sendType(type) {
      console.log(type);
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
  min-height: 800px;
  margin-top: 8px;
  display: flex;
  .info-body-left {
    width: 20%;
    height: auto;
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
  }
  .info-body-right {
    width: 80%;
    height: 100%;
    box-shadow: #6ea2a2 0 0 5px;
    border-radius: 5px;
  }
}
</style>