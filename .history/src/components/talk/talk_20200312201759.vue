<template>
  <div class="box_talk">
    <div class="head_talk">
      <span>某大傻群</span>
    </div>
    <div class="con_talk">
      <message :datas="data"></message>
    </div>
    <div class="footer_talk"></div>
  </div>
</template>
<script>
import message from "./message";
const talkdata = [
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
  },
  {
    head: "../../../static/img/zhang.jpg",
    name: "张大傻",
    content: "你说你这么大了，还不找怎么行呢",
    type: "0"
  },
  {
    head: "../../../static/img/zhang.jpg",
    name: "张大傻",
    content: "听我的赶紧找一个",
    type: "0"
  },
  {
    head: "../../../static/img/zhang.jpg",
    name: "张大傻",
    content: "不然我可以给你介绍介绍0.0",
    type: "0"
  },
  {
    head: "../../../static/img/zhou.jpg",
    name: "周某傻",
    content: "哈哈，不用不用",
    type: "1"
  },
  {
    head: "../../../static/img/zhou.jpg",
    name: "周某傻",
    content: "找对象而已，程序员不怕没对象",
    type: "1"
  },
  {
    head: "../../../static/img/zhou.jpg",
    name: "周某傻",
    content: "随时可以new一个对象出来",
    type: "1"
  }
];
export default {
  components: { message },
  data() {
    return {
      data: talkdata
    };
  },
  created() {
    console.log(this.data)
  },
  mounted() {},
  methods: {}
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
  overflow-y: scroll;
}
.footer_talk {
  width: 100%;
  height: 40px;
  background: rgb(119, 197, 95);
}
</style>>