<template>
  <div class="table-box" v-if="infoData">
    <div v-if="showType == false">
    <div class="box-top">
      <span>
        已选择
        <span>{{selectionData.length+' '}}</span>项
      </span>
      <el-button size="mini" type="danger" @click="handleDelete()">删除</el-button>
    </div>
    <div>
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
            <el-button @click="toDetail(scope.row.leaseId)" type="text" size="small">查看</el-button>
            <el-button
              v-if="scope.row.leaseStatus == 'editing'"
              @click="toDelete(scope.row.leaseId)"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </div>
    <!-- <div v-if="showType == true">
      <detailInfo :leaseId="leaseId" @goBack="callback"></detailInfo>
    </div> -->
  </div>
</template>
<script>
import api from "./adminUrl";
import detail from "./detailadmin";
export default {
  components: { detail },
  data() {
    return {
      data: '',
      selectionData: ''
    };
  },
  methods: {
    // 选中返回值
    handleSelectionChange(val) {
      this.selectionData = val;
    },
    toDetail(res) {
    },
    // 删除
    toDelete(res) {
      this.$confirm("是否删除该条信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleDelete() {},
  }
};
</script>
<style lang="scss" scoped>
</style>