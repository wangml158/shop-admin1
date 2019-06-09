<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <Menu :isShow="isShow"></Menu>
            </el-aside>
            <el-container>
                <el-header>
                    <Header @getisshow='handleGetIsShoW'></Header>
                </el-header>
                <el-main>
                    <Mianbao></Mianbao>
                    <!-- 子路由匹配到的组件 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Mianbao from '../components/Mianbao.vue';
import Menu from '../components/Menu.vue';

export default {
    components:{
        Header,
        Mianbao,
        Menu
    },
    data(){
        return {
            isShow: false,
        }
    },
    methods:{
        handleGetIsShoW:function(){
            this.isShow = !this.isShow
        }
    }
}
</script>

<style>
    .el-header , .el-footer{
        /* background-color: #B3C0D1; */
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        /* text-align: center; */
        /* line-height: 200px; */
    }
    .el-aside > div{
        height: 100%;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        /* text-align: center; */
        /* line-height: 160px; */
    }
    *{
        padding: 0;
        margin: 0;
    }
    
    body div > .el-container {
        position: absolute;
        top:0;
        bottom:0;
        width:100%;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
