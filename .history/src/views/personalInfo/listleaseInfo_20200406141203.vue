<template>
  <div class="table-box" v-if="infoData">
    <div v-if="showType == false">
    <!-- <div class="box-top">
      <span>
        已选择
        <span>{{selectionData.length+' '}}</span>项
      </span>
      <el-button size="mini" type="danger" @click="handleDelete()">删除</el-button>
    </div> -->
    <div>
      <el-table
        :data="infoData.data"
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
      <div class="page-number">
        <el-pagination
          background
          @current-change="pageNumberChange"
          :current-page="params.pageNumber"
          layout="total, prev, pager, next, jumper"
          :total="infoData.total"
        ></el-pagination>
      </div>
    </div>
    </div>
    <div v-if="showType == true">
      <detailInfo :leaseId="leaseId" @goBack="callback"></detailInfo>
    </div>
  </div>
</template>
<script>
import api from "./messageUrl";
import detailInfo from './detailleaseInfo'
export default {
  components: {detailInfo},
  data() {
    return {
      infoData: "",
      selectionData: [],
      userData: "",
      params: {
        userId: "",
        pageNumber: 0
      },
      showType: false,
      leaseId: ''
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
          if(res.data.code == 200){
            this.infoData = res.data;
            this.$message.success(res.data.message)
          }
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
      this.showType = true;
      this.leaseId = res;
    },
    // 删除
    toDelete(res) {
      this.$confirm("是否删除该条信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          api.delLeaseInfo({ leaseId: res }).then(
            res => {
              if (res.data == "100000") {
                this.getLeaseInfoList();
                this.$message.success("删除成功");
                return;
              }
              this.$message.error("删除失败");
            },
            res => {
              this.$message.error("未知错误");
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleDelete() {},
    // 查看回调
    callback (res) {
      if(res == 'back') {
        this.showType = false;
        this.getLeaseInfoList();
      }
    },
    // 页码改变
    pageNumberChange(res) {
      if (this.infoData.total <= 10) {
        return;
      }
      this.params.pageNumber = res - 1;
      this.getLeaseInfoList();
    },
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
  .page-number {
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>