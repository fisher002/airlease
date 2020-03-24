<template>
    <div class="m_box">
        <div class="m_head"></div>
        <div class="m_con">
            <div class="m_name"></div>
            <div class="m_content"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:""
    },
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
.m_box{
    padding: 2px 2px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.m_head{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
}
.m_con{
    width: 250px;
    display: flex;
    .m_name{
        width: 100%;
        height: 25px;
    }
    .m_content{
        width: 100%;
    }
}
</style>