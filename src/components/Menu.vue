<template>
    <div>
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isShow">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>购物商城</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">
                    <template slot="title">商品管理</template>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <template slot="title">栏目管理</template>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: ['isShow'],
}
</script>

<style>
    
    .el-menu-vertical-demo {
        height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;  
    }
</style>
