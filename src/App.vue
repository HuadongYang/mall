<template>
  <div flex>
    <Aside></Aside>
    <!-- 存放跳转后的页面 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Aside from "./layout/aside";
export default {
  components: {
    Aside,
  },
};
</script>

