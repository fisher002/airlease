<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
      <el-table-column prop="date" align="center" sortable label="日期" width="180"></el-table-column>
      <el-table-column prop="name" align="center" sortable label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" align="center" sortable label="地址"></el-table-column>
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
        res => {},
        res => {}
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