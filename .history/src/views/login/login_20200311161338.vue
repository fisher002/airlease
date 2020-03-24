<template>
    <div class="box">
        <el-input v-model="loginData.username" placeholder="请输入账号"></el-input>
        <el-input v-model="loginData.password" type="password" placeholder="请输入密码"></el-input>
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
<style lang="scss" scoped>

</style>