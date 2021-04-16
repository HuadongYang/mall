<template>
  <el-dialog
    title=""
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <img :src="url" alt="" />
    <div style="color: red">${{ price }}</div>
    <div>{{ description }}</div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
        dialogVisible: false
    };
  },
  props: {
    url: {
      type: String,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  components: {},
  activated() {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
