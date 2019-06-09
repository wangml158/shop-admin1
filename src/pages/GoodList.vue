<template>
    <div>
        <!-- 新增 删除 搜索 按钮 -->
        <el-row type="flex" justify="space-between" class="ads">
            <div>
                <el-button>新增</el-button>
                <el-button type="danger" @click="handleDeleteMore">删除</el-button>
            </div>

            <el-input 
            placeholder="请输入内容" 
            class="input-with-select" 
            v-model="searchValue">
                <el-button 
                slot="append" 
                icon="el-icon-search"
                @click="handleSearch">
                </el-button>
            </el-input>
        </el-row>

        <!-- 列表 -->
        <div class="good-table">
            <el-table
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="标题"
                width="300">
                    <template slot-scope="scope">
                        <el-row type="flex" align="middle">
                            <img :src="scope.row.imgurl" class="goods-img">
                            <span style="margin-left: 5px">{{ scope.row.title }}</span>
                        </el-row>
                    </template>
                </el-table-column>
                <el-table-column
                label="类型"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.categoryname }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="价格"
                width="180">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.sell_price }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- size-change: 显示条数切换 条/页 -->
        <!-- current-change：页数切换 -->
        <!-- current-page: 当前的页面 -->
        <!-- page-sizes：条数的选项 -->
        <!-- page-size:当前的条数 -->
        <!-- layout:默认布局 -->
        <!-- total: 数据全部条数 -->
        <div class="pagination">
            <el-pagination  
            @size-change="handleSizeChange"  
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [
        
        ],
        pageIndex: 1,
        total: 0,
        selectGoods: [], // 选中的商品
        searchValue: '', //获取搜索框值
        pageSize:5,
      }
    },
    methods: {
        getList(){
        // 请求商品列表数据
        // pageIndex: 当前的页面，会变化
        // pageSize：数据条数，会变化
        // searchValue：搜索关键字
            this.$axios({
                url:`http://localhost:8899/admin/goods/getlist?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&searchvalue=${this.searchValue}`,
                method: 'get'
            }).then(res => {
                const data = res.data;
                this.tableData = data.message;
                // 总条数
                this.total = data.totalcount;
            })
        },
        // 获取id或ids,删除单个或多个
        delList(val_id){
            this.$axios({
                url:`http://localhost:8899/admin/goods/del/${val_id}`,
                method: 'get'
            }).then(res => {
                const {message, status} = res.data;
                // 删除成功
                if(status === 0){
                    this.$message.success('删除成功');
                    // 请求商品列表数据
                    this.getList();
                }else{
                    this.$message.error('删除失败');
                }
            })
        },
        handleSelectionChange(val){
            // console.log(val);
            this.selectGoods = val
        },
        handleDeleteMore(){
            // 获取到ids
            const arr = this.selectGoods.map(v => {
                return v.id
            })
            // console.log(arr); //[98, 97]
            const ids = arr.join(',');
            this.delList(ids)
        },
        handleEdit(index) { //整一条商品信息
            // console.log(index);
        },
        handleDelete(index) { //整一条商品信息
            // console.log(index);
            const id = index.id;
            this.delList(id)
        },
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.pageSize = val;
            // 重新发起请求
            this.getList();
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.pageIndex = val;
            // 重新发起请求
            this.getList();
        },
        handleSearch(){
            // 点击后把搜索框中的值给传给data，然后返回到后台，刷新
            // 获取输入框的值
            //this.searchValue

            // 发起请求 ，赋值searchValue
            this.getList();
        }
    },
    mounted(){
        // 请求商品列表数据
        this.getList();
    },
}
</script>

<style>
    .ads,.good-table{
        margin-top: 20px;
    }
    .ads .input-with-select{
        width: 300px;
    }
    .good-table .goods-img{
        width: 60px;
        height: 60px;
        flex-shrink: 0;
    }    
</style>
