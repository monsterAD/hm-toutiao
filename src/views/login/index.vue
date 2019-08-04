<template>
  <div class="container">
   <el-card class="mycard">
            <img class='img1' src="../../assets/images/logo_index.png" alt="">
       <el-form ref="ruleForm" :model="form" :rules="formRules" status-icon>
         <el-form-item prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
         </el-form-item>
         <el-form-item prop='code'>
            <el-input v-model="form.code" placeholder="请输入验证码" style="width:236px; margin-right:11px"></el-input>
            <el-button>发送验证码</el-button>
         </el-form-item>
        <el-form-item>
           <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
           </el-form-item>
           <el-form-item>
           <el-button type="primary" style='width:100%' @click="loginForm()">登录</el-button>
         </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    const checkName = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机号格式不正确'))
      callback()
    }
    return {
      form: {
        mobile: '13911111111',
        code: '246810'
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.form)
            .then(res => {
              this.$router.push('/')
            }).catch(() => {
              this.$message({
                showClose: true,
                message: '密码或账号错误！',
                type: 'error'
              })
            })
        }
      })
    }
  }
}
</script>

<style>
 .container{
     width:100%;
     height: 100%;
     position: absolute;
     background: url(../../assets/images/login_bg.jpg) no-repeat center / cover
 }
 .mycard{
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%)
 }
 .img1{
     width: 200px;
     display: block;
     margin: 0 auto 20px;
 }
</style>
