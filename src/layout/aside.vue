<template>
  <div>
    <el-row class="tac">
      <el-col :span="30">
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-menu-item index="/mall?type=shoe">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>鞋子</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">家电</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">手机</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">珠宝</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$router.push({
        path: key,
        params: { data: "query" },
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

