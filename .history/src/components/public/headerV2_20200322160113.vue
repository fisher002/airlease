<template>
  <div class="header_box">
    <div class="header_head">
      <div class="header_head_left">
        <img src="../../../static/img/logo.png" />
      </div>
      <div class="header_head_right">
        <div v-if="showme == false" class="header_head_right_box">
          <img width="50" height="50" src="../../../static/img/zhou.jpg" />
          <div class="box_msg">
            <el-dropdown trigger="click" @command="toLogin">
              <span class="el-dropdown-link font-size">暂未登录,点击登录</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="login">立即登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div v-if="showme == true" class="header_head_right_box">
          <img width="50" height="50" src="../../../static/img/zhou.jpg" />
          <div class="box_msg">
            <el-dropdown trigger="hover" @command="myOperation">
              <span class="el-dropdown-link font-size">{{userdata.name}} | 欢迎您</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="myMsg">我的信息</el-dropdown-item>
                <el-dropdown-item command="outLogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {
      userdata: "",
      showme: false
    };
  },
  created() {
    if (
      this.$session.get("user") != undefined &&
      this.$session.get("user") != null
    ) {
      this.showme = true;
      this.userdata = this.$session.get("user");
    } else {
      this.showme = false;
    }
  },
  methods: {
    toOtherPath(res) {
      this.$router.push({
        path: res.path,
        query: {
          id: res.id != null ? res.id : ""
        }
      });
    },
    toLogin(res) {
      this.$router.push({ path: `/${res}` });
    },
    myOperation(res) {
      switch(res){
        case 'myMsg' :
          console.log('myMsg');
          break;
        case 'outLogin' :
          this.$session.clear();
          this.reload();
          break;
        default :
          console.log('error');
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header_box {
  min-height: 85px;
  display: flex;
  flex-wrap: wrap;
  .header_head {
    min-height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header_head_left {
      width: 48%;
      display: flex;
      img {
        margin-left: 200px;
      }
    }
    .header_head_right {
      width: 48%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .header_head_right_box {
        cursor: pointer;
        width: 28%;
        height: 50px;
        border-radius: 25px;
        border: rgb(238, 232, 198) solid 1px;
        margin-right: 45px;
        background: #e6f7f7;
        display: flex;
        img {
          border-radius: 50%;
        }
        .box_msg {
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          .font-size {
            font-size: 16px;
          }
        }
      }
    }
  }
  .header_auto {
    min-height: 350px;
    width: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>