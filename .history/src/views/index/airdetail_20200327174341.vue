<template>
  <el-container>
    <el-header height="auto">
      <Header></Header>
    </el-header>
    <el-main>
      <detail v-if="imgdata" :datas="imgdata" @callback="digShow"></detail>
    </el-main>
    <el-footer>版权所有，侵权必究！</el-footer>
    <el-dialog title="空调租赁" :visible.sync="dialogShow" width="500px" center>
      <el-form :model="leaseData" :rules="rules" ref="checkFor">
        <el-form-item label="开始租赁日期：" prop="startDate">
          <el-date-picker
            type="datetime"
            placeholder="选择开始日期"
            v-model="leaseData.leaseStartDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束租赁日期：" prop="endDate">
          <el-date-picker
            type="datetime"
            placeholder="选择结束日期"
            v-model="leaseData.leaseEndDate"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="租赁数量：">
          <el-input-number v-model="leaseData.leaseNumber" @change="calculationSum" :min="0" :max="1000" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="总计：">
          <span>{{leaseData.leasePriceSum ? leaseData.leasePriceSum : '0'+' 元'}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submitForm('checkFor')">确认</el-button>
        <el-button type="primary" @click="resetForm()">重 置</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>
<script>
import Header from "@/components/public/header";
import detail from "@/components/public/detail";
import imgs from "@/components/json/imgs";
import dt from "@/components/json/details";
import api from "./indexUrl";

export default {
  components: { Header, detail },
  data() {
    return {
      images: imgs,
      details: dt,
      imgdata: "",
      dialogShow: false,
      leaseData: {
        airId: "",
        airName: "",
        userId: "",
        username: "",
        leaseStartDate: "",
        leaseEndDate: "",
        leaseNumber: "",
        leasePriceSum: "",
        leaseEditDate: "",
        isDelete: ""
      },
      rules: {
        startDate: [
          // { required: true, message: '请选择开始日期', trigger: 'change' }
        ],
        endDate: [
          // { required: true, message: '请选择结束日期', trigger: 'change' }
        ],
        number: [
          { required: true, message: '租赁数量不能为空'},
          { type: 'number', message: '租赁数量必须为数字值'}
        ]
      }
    };
  },
  created() {
    this.checkAirMsg();
  },
  methods: {
    // 识别空调信息
    checkAirMsg() {
      let airId = this.$route.query.airId;
      let data = { imglist: "", detaildata: "" };
      if (airId == null || airId == undefined) {
        return;
      }
      let imgId = "002";
      for (let i in imgs) {
        if (imgs[i].imgId == imgId) {
          data.imglist = imgs[i];
        }
      }
      api.getAirByAirId({ airId: airId }).then(
        res => {
          data.detaildata = res.data;
        },
        res => {
          console.log("error");
        }
      );
      this.imgdata = data;
    },
    // 详情组件回调
    digShow(res) {
      if(res === 'ok') {
        this.dialogShow = true;
      }
    },
    calculationSum(value) {
      // 计算总价格
      if(this.leaseData.leaseStartDate && this.leaseData.leaseEndDate) {
        let start = this.checkDay(this.leaseData.leaseStartDate),
        end = this.checkDay(this.leaseData.leaseEndtDate);

        let day = ((end-start)/(24*60*60));
        console.log(day)
        
      }
      if(value > 0) {

      }
    },
    checkDay(res) {
      let date = new Date(res);
      return date.getTime();
    },
    submitForm(res) {
      this.$refs[res].validate(valid => {
        if (valid) {
          // 校验通过
        }
      });
    },
    resetForm() {
      // 重置表单
      this.leaseData.leaseStartDate = '';
      this.leaseData.leaseEndDate = '';
      this.leaseData.leaseNumber = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: azure;
  color: #333;
  text-align: center;
  padding: 0 0 !important;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: azure;
  text-align: center;
  min-height: 600px;
  padding: 10px;
}
</style>