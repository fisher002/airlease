<template>
  <div class="table-box">
    <div class="box-top">
      <div class="top-left">
        <el-input placeholder="请输入用户名" v-model="params.keyword" clearable></el-input>
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
        <el-table-column prop="username" align="center" sortable label="用户名" width="100"></el-table-column>
        <el-table-column prop="name" align="center" sortable label="用户昵称" width="150"></el-table-column>
        <el-table-column prop="tellphone" align="center" sortable label="电话号码" width="150"></el-table-column>
        <el-table-column prop="qq" align="center" sortable label="qq" width="100"></el-table-column>
        <el-table-column prop="email" align="center" sortable label="邮箱" width="180"></el-table-column>
        <el-table-column prop="age" align="center" sortable label="年龄" width="80"></el-table-column>
        <el-table-column prop="sex" align="center" sortable label="性别" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.sex == 'M' ? '男' : '女' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" align="center" sortable label="地址" width="200"></el-table-column>
        <el-table-column prop="userRegisterTime" align="center" sortable label="注册时间" width="150">
          <template slot-scope="scope">
            <span>{{ formatDate(scope.row.userRegisterTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" align="center" sortable label="备注"></el-table-column>
        <el-table-column prop="status" align="center" sortable label="用户状态" width="100">
          <template slot-scope="scope">
            <span
              :style="{'color':scope.row.status == 'editing' ? 'red' : '#1fca1f'}"
            >{{ scope.row.status == 'editing' ? '审核中' : '可用' }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="25">
          <template slot-scope="scope">
            <el-button @click="toDetail(scope.row.userId,'detail')" type="text" size="small">查看</el-button>
            <el-button
              @click="toDelete(scope.row.userId)"
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
</template>
<script>
import api from "./userUrl";
export default {
  components: {},
  data() {
    return {
      loading: false,
      data: "",
      selectionData: "",
      params: {
        keyword: "",
        pageNumber: 0
      }
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    // 获取列表
    getUserList() {
      this.loading = true;
      api.getUserList(this.params).then(
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
      this.getUserList();
    },
    // 选中返回值
    handleSelectionChange(val) {
      this.selectionData = val;
    },
    toDetail(res, type) {
      this.$router.push({
        path: "/detailuser",
        query: {
          userId: res,
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
          ids.push(e.userId);
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
          api.deleteUser(res).then(
            res => {
              if (res.data.code == 200) {
                this.$message.success(res.data.message);
                this.getUserList();
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
      this.getUserList();
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