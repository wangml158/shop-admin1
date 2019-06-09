<template>
    <div class="form-wrapper">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type='password' v-model="form.password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            //   required 表示必须要输入，message表示提示信息，trigger失去焦点时触发
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit(){
          // 提交到后台的数据
          const data = {
              uname: this.form.username,
              upwd: this.form.password
          };
          // 如果表单的验证不通过，不提交表单
          this.$refs.form.validate((valid) => {
          if (valid) {
            this.$axios({
                url:'http://localhost:8899/admin/account/login',
                method:'POST',
                data,
                // 处理session跨域
                withCredentials: true
            }).then(res => {
                // 解构并且赋值
                const {message, status} = res.data;

                // 登录成功
                if(status === 0){
                    this.$router.push("/");
                }

                // 登录失败
                if(status === 1){
                    this.$message.error(message);
                }
            })

          }
        });
      }
    }
  }
</script>

<style scoped>
    .form-wrapper{
        width: 100%;
        position: absolute;
        top: 0px;
        bottom: 0px;
        /* background: #ccc; */
    }
    .form{
        width: 500px;
        background: #eee;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -300px;
        margin-top: -150px;
        
        border: 1px solid #999;
        padding-top: 80px;
        padding-right: 80px;
        padding: 80px 80px 50px 50px;
    }
    .btn{
        width: 100%;
        /* text-align: center; */
        margin-left: 50px;
    }
</style>
