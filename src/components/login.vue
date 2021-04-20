<template>
  <div class="login-wrap">
    <el-form class="login-container" label-width="80px">
      <h1 class="title">用户登录</h1>
      <el-form-item label="账号">
        <el-input type="text" v-model="account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="doSubmit()"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Login, Test } from "./api.js";
export default {
  data() {
    return {
      account: "1002",
      password: "123456",
    };
  },
  props: {},
  components: {},
  activated() {},
  watch: {},
  methods: {
    async doSubmit() {
      Test();
      let res = await Login({
        account: this.account,
        password: this.password,
      });
      if (!res) {
        alert("账号密码错误");
        return;
      }
      this.$emit("login", res);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
