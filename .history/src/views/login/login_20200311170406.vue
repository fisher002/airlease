<template>
    <div class="box">
        <el-input v-model="loginData.username" width="120" placeholder="请输入账号"></el-input><br/>
        <el-input v-model="loginData.password" type="password" width="120" placeholder="请输入密码"></el-input><br/>
        <el-button type="primary">登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginData: {
                username: '',
                password: ''
            }
        }
    }
}
</script>
<style scoped>

</style>