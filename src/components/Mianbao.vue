<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for='(item,index) in meta' :key="index">
                {{item}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            meta: []
        }
    },
    watch:{
        $route(){
            this.getRouteMeta()
        }
    },
    mounted(){
        this.getRouteMeta()
    },
    methods: {
        // 获取meta的值
        getRouteMeta: function(){  //在这里定义了就是this的属性
            // 面包屑取值
            // console.log(this.$route);
            const arr = this.$route.matched;
            var meta = [];
            arr.forEach(v => {
                meta.push(v.meta)
            });
            this.meta = meta
        }
    }
}
</script>

<style scoped>

</style>
