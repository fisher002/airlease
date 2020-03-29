<template>
  <div class="table-box" v-if="infoData">
    <span class="">已选择<span> {{selectionData.length}} </span>项</span>
    <el-table
      :data="infoData"
      tooltip-effect="dark"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
      <el-table-column prop="airName" align="center" sortable label="空调名称" width="230"></el-table-column>
      <el-table-column prop="leaseNumber" align="center" sortable label="数量" width="80"></el-table-column>
      <el-table-column prop="leaseStartDate" align="center" sortable label="开始日期" width="120">
        <template slot-scope="scope">
          <span>{{ formatDate(scope.row.leaseStartDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="leaseEndDate" align="center" sortable label="结束日期" width="120">
        <template slot-scope="scope">
          <span>{{ formatDate(scope.row.leaseEndDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="leasePriceSum" align="center" sortable label="总价格" width="100"></el-table-column>
      <el-table-column prop="leaseStatus" align="center" sortable label="状态" width="100">
        <template slot-scope="scope">
          <span
            :style="{'color':scope.row.leaseStatus == 'editing' ? 'red' : '#1fca1f'}"
          >{{ scope.row.leaseStatus == 'editing' ? '审核中' : '已通过' }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="toDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button
            v-if="scope.row.leaseStatus == 'editing'"
            @click="toDelete(scope.row)"
            type="text"
            size="small"
          >删除</el-button>
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
      infoData: "",
      selectionData: [],
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
      this.selectionData = val;
    },
    toDetail(res) {
      //   console.log(res);
    },
    toDelete(res) {},
    formatDate(res) {
      let date = new Date(res);
      let year = date.getFullYear(),
        mouth =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1,
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      return year + "-" + mouth + "-" + day;
    }
  }
};
</script>
<style lang="scss" scoped>
.table-box {
  padding: 10px 10px;
}
</style>