<template>
  <div class="table-box" v-if="data">
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
        :data="data"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column type="selection" align="center" width="55"></el-table-column>
        <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
        <el-table-column prop="adminUserName" align="center" sortable label="用户名" width="230"></el-table-column>
        <el-table-column prop="adminPassWord" align="center" sortable label="用户密码" width="80"></el-table-column>
        <el-table-column prop="adminName" align="center" sortable label="用户昵称" width="120"></el-table-column>
        <el-table-column prop="adminTellPhone" align="center" sortable label="电话号码" width="100"></el-table-column>
        <el-table-column prop="adminRegisterTime" align="center" sortable label="注册时间" width="120">
          <template slot-scope="scope">
            <span>{{ formatDate(scope.row.adminRegisterTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="adminRemark" align="center" sortable label="备注" width="100"></el-table-column>
        <el-table-column prop="adminStatus" align="center" sortable label="用户状态" width="100">
          <template slot-scope="scope">
            <span
              :style="{'color':scope.row.adminStatus == 'editing' ? 'red' : '#1fca1f'}"
            >{{ scope.row.leaseStatus == 'editing' ? '审核中' : '可用' }}</span>
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
      <detail></detail>
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
      showType: false,
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
    // 日期格式化
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
  .box-top {
    display: flex;
    justify-content: space-between;
    padding: 5px 2px;
  }
}
</style>