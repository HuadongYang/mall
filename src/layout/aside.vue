<template>
  <div class="side-container">
    <el-row class="tac">
      <el-col :span="30">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-menu-item index="/shoe?type=shoe">
            <template slot="title">
              <img src="../assets/shoe.png" class="img-class" alt="" />
              <span>鞋子</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/phone?type=phone">
            <img src="../assets/phone.png" class="img-class" alt="" />
            <span slot="title">手机</span>
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
      console.log(key, keyPath);
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

<style lang="scss" scoped>
.side-container{
  margin-top: 100px;
}
.img-class {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
