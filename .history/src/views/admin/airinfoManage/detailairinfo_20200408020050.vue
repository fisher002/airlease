<template>
  <div>
    <div class="form-box" v-if="params.type == 'add'">
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm center"
        label-position="left"
      >
        <el-form-item label="对应空调" prop="airId">
          <el-select class="select-width" v-model="data.airId" clearable placeholder="请选择">
            <el-option
              v-for="item in airs"
              :key="item.airId"
              :label="item.airName"
              :value="item.airId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="空调描述" prop="airDescribe">
          <el-input type="textarea" v-model="data.airDescribe" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调租金" prop="airRent">
          <el-input v-model="data.airRent" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调押金" prop="airDeposit">
          <el-input v-model="data.airRent" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调提示" prop="airTips">
          <el-input v-model="data.airTips" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="airStock">
          <el-input v-model="data.airStock" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="入库时间" prop="airPutDate">
          <el-col :span="11">
            <el-form-item prop="airPutDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.airPutDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item style="float:left">
          <el-button type="primary" @click="submitForm('checkFor')">立即添加</el-button>
          <el-button @click="resetForm('checkFor')">重置</el-button>
          <el-button type="primary" @click="back()">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form-box" v-if="params.type == 'detail'">
      <div class="cancel-width">
        <el-button @click="cancelEdit()" icon="el-icon-edit">{{isShowEdit ? '取消编辑' : '编辑'}}</el-button>
      </div>
      <el-form
        :model="data"
        :rules="rules"
        ref="checkFor"
        label-width="100px"
        class="demo-ruleForm center"
        label-position="left"
      >
        <el-form-item label="空调名" prop="airName">
          <span v-if="isShowEdit == false">{{data.airName}}</span>
          <el-input v-else v-model="data.airName" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调描述" prop="airDescribe">
          <span v-if="isShowEdit == false">{{data.airDescribe}}</span>
          <el-input type="textarea" v-else v-model="data.airDescribe" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调租金" prop="airRent">
          <span v-if="isShowEdit == false">{{data.airRent + ' 元/天'}}</span>
          <el-input v-else v-model="data.airRent" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调押金" prop="airDeposit">
          <span v-if="isShowEdit == false">{{data.airDeposit + ' 元/台'}}</span>
          <el-input v-else v-model="data.airDeposit" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="空调提示" prop="airTips">
          <span v-if="isShowEdit == false">{{data.airTips}}</span>
          <el-input v-else v-model="data.airTips" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="库存" prop="airStock">
          <span v-if="isShowEdit == false">{{data.airStock}}</span>
          <el-input v-else v-model="data.airStock" class="input-width" clearable></el-input>
        </el-form-item>
        <el-form-item label="入库时间" prop="airPutDate">
          <span v-if="isShowEdit == false">{{formatDate(data.airPutDate)}}</span>
          <el-col :span="11" v-else>
            <el-form-item prop="airPutDate">
              <el-date-picker
                class="input-width"
                type="date"
                placeholder="选择日期"
                clearable
                v-model="data.airPutDate"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item style="float:left">
          <el-button v-show="isShowEdit" type="primary" @click="submitForm('checkFor')">保存</el-button>
          <el-button v-show="isShowEdit" @click="resetForms('checkFor')">重置</el-button>
          <el-button type="primary" @click="back()">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "./airinfoUrl";
export default {
  data() {
    return {
      isShowEdit: false,
      ids: "",
      infoIds: "",
      airIds: [],
      airs: "",
      data: {
        airId: "",
        airName: "",
        airDescribe: "",
        airTips: "",
        airRent: "",
        airDeposit: "",
        airStock: "",
        airPutDate: "",
        isDelete: "false"
      },
      params: {
        airId: "",
        type: ""
      },
      rules: {
        airName: [
          { required: true, message: "空调名不能为空", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    // 参数赋值
    let params = this.$route.query;
    for (let i in params) {
      this.params[i] = params[i];
    }
    this.getAirInfoById();
    this.getAirIds();
  },
  methods: {
    // 通过id获取Air
    getAirInfoById() {
      if (this.params.airDetailId) {
        api.getAirInfoById({ airDetailId: this.params.airDetailId }).then(
          res => {
            if (res.data.code == 200) {
              this.data = res.data.data;
              return;
            }
            this.$message.error(res.data.message);
          },
          res => {
            this.$message.error("error");
          }
        );
        return;
      }
      console.log("无 airDetailId");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          api.updateAirInfo(this.data).then(
            res => {
              if (res.data.code == 200) {
                this.$message.success(res.data.message);
                this.back();
              } else {
                this.$message.error(res.data.message);
              }
            },
            res => {
              this.$message.error("error");
            }
          );
        } else {
          // 校验失败
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 重置表单
    resetForms(formName) {
      this.$refs[formName].resetFields();
      this.getAirInfoById();
    },
    // 路由回退
    back() {
      this.$router.go(-1);
    },
    cancelEdit() {
      this.isShowEdit = !this.isShowEdit;
      if (this.isShowEdit == false) {
        this.getAirInfoById();
      }
    },
    // 获取空调ids
    getAirIds() {
      if (this.params.type != "add") {
        return;
      }
      api.getAirIds().then(res => {
        if (res.data.code == 200) {
          this.ids = res.data.data;
        }
      });
      api.getAirInfoIds().then(res => {
        if (res.data.code == 200) {
          this.infoIds = res.data.data;
          this.setAirIds();
        }
      });
    },
    setAirIds() {
      if (this.params.type != "add") {
        return;
      }
      this.airIds = [];
      if (this.ids.length > 0 && this.infoIds.length > 0) {
        this.ids.forEach(e => {
          if (this.infoIds.find(i => i === e)) {
            return;
          }
          this.airIds.push(e);
        });
        this.getAllAirs(this.airIds);
      }
    },
    // 获取上级
    getAllAirs(res) {
      api.getAllAirs(res).then(res => {
        if (res.data.code == 200) {
          this.airs = res.data.data;
        }
      });
    },
    // 日期格式化
    formatDate(res) {
      let date = new Date(res);
      let year = date.getFullYear(),
        mouth =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1,
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        minute =
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return year + "-" + mouth + "-" + day + " " + hour + ":" + minute;
    }
  }
};
</script>
<style lang="scss" scoped>
.form-box {
  padding: 20px 20px;
  span {
    float: left;
  }
}
.input-width {
  width: 30%;
  float: left;
}
.select-width {
  width: 15%;
  float: left;
}
.cancel-width {
  width: 100%;
  text-align: left;
  padding: 10px 0;
}
</style>