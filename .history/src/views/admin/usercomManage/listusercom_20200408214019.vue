<template>
  <div class="table-box">
    <div v-if="showType == false">
      <div class="box-top">
        <div class="top-left">
          <el-input placeholder="请输入空调名" v-model="params.keyword" clearable></el-input>
          <div style="width:10px"></div>
          <el-button type="primary" icon="el-icon-search" @click="search()">查询</el-button>
        </div>
        <div class="top-right">
          <span>
            已选择
            <span>{{selectionData.length+' '}}</span>项
          </span>
          <div style="width:10px"></div>
          <el-button
            size="mini"
            type="danger"
            :disabled="selectionData.length <= 0"
            icon="el-icon-delete"
            @click="handleDelete()"
          >删除</el-button>
          <div style="width:10px"></div>
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="toDetail(0,'add')"
          >新增</el-button>
        </div>
      </div>
      <div>
        <el-table
          v-loading="loading"
          :data="data.data"
          tooltip-effect="dark"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column type="selection" align="center" width="55"></el-table-column>
          <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
          <el-table-column prop="airName" align="center" sortable label="空调名" width="300"></el-table-column>
          <el-table-column prop="username" align="center" sortable label="用户" width="250"></el-table-column>
          <el-table-column prop="commentContent" align="center" sortable label="评论内容" width="300"></el-table-column>
          <el-table-column prop="commentDate" align="center" sortable label="评论时间">
            <template slot-scope="scope">
              <span>{{ formatDate(scope.row.commentDate) }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" min-width="20">
            <template slot-scope="scope">
              <el-button @click="toDetail(scope.row.commentId,'detail')" type="text" size="small">查看</el-button>
              <el-button
                @click="toDelete(scope.row.commentId)"
                type="text"
                size="small"
                style="color:red"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-number">
        <el-pagination
          background
          @current-change="pageNumberChange"
          :current-page="params.pageNumber"
          layout="total, prev, pager, next, jumper"
          :total="data.total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./airUrl";
export default {
  components: {},
  data() {
    return {
      loading: false,
      showType: false,
      data: "",
      selectionData: "",
      params: {
        keyword: "",
        pageNumber: 0
      }
    };
  },
  created() {
    this.getUserComList();
  },
  methods: {
    // 获取列表
    getUserComList() {
      this.loading = true;
      api.getUserComList(this.params).then(
        res => {
          if (res.data.code == 200) {
            this.loading = false;
            this.$message.success(res.data.message);
            this.data = res.data;
            return;
          }
          this.loading = false;
          this.$message.error(res.data.message);
        },
        res => {
          this.loading = false;
          this.$message.error("error");
        }
      );
    },
    search() {
      this.getUserComList();
    },
    // 选中返回值
    handleSelectionChange(val) {
      this.selectionData = val;
    },
    toDetail(res, type) {
      this.$router.push({
        path: "/detailusercom",
        query: {
          commentId: res,
          type: type
        }
      });
    },
    // 删除
    toDelete(res) {
      let ids = [];
      ids.push(res);
      this.submitDel(ids);
    },
    handleDelete() {
      if (this.selectionData.length > 0) {
        let ids = [];
        this.selectionData.forEach(e => {
          ids.push(e.commentId);
        });
        this.submitDel(ids);
      }
    },
    // 确认删除
    submitDel(res) {
      this.$confirm("是否删除所选条项?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          api.deleteUserCom(res).then(
            res => {
              if (res.data.code == 200) {
                this.$message.success(res.data.message);
                this.getUserComList();
                return;
              }
              this.$message.error(res.data.message);
            },
            res => {
              this.$message.error("error");
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
    // 页码改变
    pageNumberChange(res) {
      if (this.data.total <= 10) {
        return;
      }
      this.params.pageNumber = res - 1;
      this.getUserComList();
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
    .top-right {
      display: flex;
      align-items: center;
    }
    .top-left {
      display: flex;
    }
  }
  .page-number {
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>