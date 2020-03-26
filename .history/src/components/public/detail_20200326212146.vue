<template>
  <div class="detail-box">
    <div class="detail-de">所选空调详情</div>
    <div class="detail-body">
      <div class="detail-body-left">
        <div class="left-img-show">
          <img v-if="datas.imglist.data" :src="datas.imglist.data[0]" />
        </div>
        <div class="left-img-list">
          <div class="list-one" v-for="(item,index) in datas.imglist.data" :key="index">
            <img :src="item" />
          </div>
        </div>
      </div>
      <div class="detail-body-right">
        <div class="body-right-message">
          <div class="message-content">{{datas.detaildata.airDescribe}}</div>
          <div class="message-content">{{datas.detaildata.airDescribe}}</div>
          <div class="message-content">{{'押金:'+datas.detaildata.airDeposit+'元 日租:'+datas.detaildata.airRent+'元/天'}}</div>
          <div class="message-content">{{datas.detaildata.airTips}}</div>
          <div class="message-content">{{datas.detaildata.airDescribe}}</div>
          <div class="message-content">
            <el-button type="danger" @click="toLease(datas)" class="now-button" round>立即租赁</el-button>
          </div>
        </div>
        <div class="body-right-comment">
          <usercomment v-if="commentData" :comments="commentData"></usercomment>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import usercomment from './usercomment'
import comments from '../json/comments'
export default {
  components: {usercomment},
  name: "detail",
  props: {
    datas: ""
  },
  data() {
    return {
      commentData: [...comments]
    };
  },
  created() {},
  methods: {
    toLease(data) {
      if(!sessionStorage.getItem('isLogin') || sessionStorage.getItem('isLogin') === 'false'){
        this.$message.error('未登录，不可以进行此操作');
        return;
      }
      console.log(data);
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  width: 100%;
  background: azure;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .detail-de {
    width: 100%;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-body {
    width: 90%;
    min-height: 500px;
    display: flex;
    justify-content: space-around;
    .detail-body-left {
      width: 29%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      .left-img-show {
        width: 100%;
        border-radius: 10px;
        height: 74%;
        border: 1px solid rgb(221, 212, 212);
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .left-img-list {
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-around;
        .list-one {
          width: 23%;
          height: 98%;
          cursor: pointer;
          border: 1px #ddd4d4 solid;
          border-radius: 5px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list-one:hover {
          border: 1px solid rgb(255, 0, 0);
        }
      }
    }
    .detail-body-right {
      width: 70%;
      border-radius: 10px;
      border: 1px #ddd4d4 solid;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .body-right-message {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        .message-content {
          width: 100%;
          text-align: left;
          height: 40px;
          font-size: 18px;
          padding: 5px 15px;
        }
      }
      .body-right-comment {
        width: 30%;
        border-left: #ddd4d4 1px solid;
        height: 100%;
      }
    }
  }
}
.now-button {
  width: 150px;
}
</style>