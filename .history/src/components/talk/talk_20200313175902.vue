<template>
  <div class="box_talk">
    <div class="head_talk" @click="returnTimer()">
      <span>某大傻群</span>
    </div>
    <div class="con_talk">
      <div class="over_sc">
        <message :datas="datas"></message>
      </div>
    </div>
    <div class="footer_talk">
      <el-input @focus="checkFocus()" placeholder="请输入内容" v-model="value" clearable></el-input>
      <el-button type="primary" @click.stop="send()">发送</el-button>
    </div>
  </div>
</template>
<script>
import message from "./message";
import contents from "./content";
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
    content: "你说你这么大了，还不找怎么行呢,你说是吧",
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
      data: [...contents],
      datas: [],
      signNumber: -1,
      timer: null,
      value: ""
    };
  },
  created() {
    // console.log(this.data)
    this.pushMessage();
  },
  mounted() {
    // this.pushMessage();
  },
  methods: {
    pushMessage() {
      this.timer = setInterval(() => {
        this.signNumber++;
        this.datas.push(this.data[this.signNumber]);
        // console.log(this.data[this.signNumber]);
      }, 1500);
      setInterval(() => {
        if (this.signNumber >= this.data.length - 1) {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    returnTimer() {
      this.timer = null;
      this.signNumber = -1;
      this.datas = [];
      this.pushMessage();
    },
    checkFocus() {
      clearInterval(this.timer);
    },
    send() {
      const demo = {
        head: "../../../static/img/zhou.jpg",
        name: "周某傻",
        content: "",
        type: "1"
      };
      this.pushMessage();
      if(this.value == ""){
        this.$message({
          message: '温馨提醒，不可以发送空白内容哦',
          type: 'warning'
        })
        return;
      }
      demo.content = this.value;
      this.datas.push(demo);
      this.value = "";
    }
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
  overflow: hidden;
}
.over_sc {
  width: 106%;
  height: 400px;
  overflow-y: scroll;
}
.footer_talk {
  width: 100%;
  height: 40px;
  display: flex;
}
</style>>