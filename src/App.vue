<template>
  <div>
    <Recommand :userId="userId"></Recommand>
    <div flex>
      <Aside></Aside>
      <!-- 存放跳转后的页面 -->
      <router-view></router-view>
      <el-dialog
        title=""
        :visible.sync="loginVisible"
        width="40%"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
      >
        <Login @login="eLogin"></Login>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Aside from "./layout/aside";
import Login from "./components/login";
import HeaderData from "./components/const";
import Recommand from "./components/recommand";
export default {
  data() {
    return {
      userId: "",
      loginVisible: true,
    };
  },
  components: {
    Aside,
    Login,
    Recommand
  },
  methods: {
    eLogin(res) {
      console.log(res);
      if (res && res.id) {
        this.loginVisible = false;
        this.userId = res.id;
        HeaderData.userId = res.id;
      }
    },
  },
};
</script>

