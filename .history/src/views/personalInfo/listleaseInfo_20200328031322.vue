<template>
  <div class="table-box">
    <el-table
      :data="infoData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
      <el-table-column prop="airName" align="center" sortable label="空调名称" width="200"></el-table-column>
      <el-table-column prop="leaseNumber" align="center" sortable label="数量" width="80"></el-table-column>
      <el-table-column prop="leaseStartDate" align="center" sortable label="开始日期" width="180"></el-table-column>
      <el-table-column prop="leaseEndDate" align="center" sortable label="结束日期" width="180"></el-table-column>
      <el-table-column prop="leasePriceSum" align="center" sortable label="总价格" width="80"></el-table-column>
      <el-table-column prop="username" align="center" sortable label="姓名" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="toDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import api from "./messageUrl";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      infoData: "",
      multipleSelection: [],
      userData: "",
      params: {
        userId: "",
        pageNumber: 0
      }
    };
  },
  created() {
    if (
      this.$session.get("user") != undefined &&
      this.$session.get("user") != null
    ) {
      this.userData = this.$session.get("user");
      this.getLeaseInfoList();
    }
  },
  methods: {
    // 获取我的租赁列表
    getLeaseInfoList() {
      this.params.userId = this.userData.userId;
      api.getInfoList(this.params).then(
        res => {
          this.infoData = res.data;
        },
        res => {
          this.$message.error("error");
        }
      );
    },
    // 选中返回值
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    toDetail(res) {
      //   console.log(res);
    }
  }
};
</script>
<style lang="scss" scoped>
.table-box {
  padding: 10px 10px;
}
</style>