<template>
    <div class="box">
        <el-input class="input_width" v-model="loginData.username" placeholder="请输入账号"></el-input><br/>
        <el-input class="input_width" v-model="loginData.password" type="password" placeholder="请输入密码"></el-input><br/>
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
.input_width {
    width: 15%;
}
</style>