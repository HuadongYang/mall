<template>
  <div class="recommand-cotainer">
    <el-carousel indicator-position="outside" v-if="malls && malls.length > 0">
      <el-carousel-item
        v-for="(mall, index) in malls"
        :key="index"
        style="cursor: pointer"
      >
        <img
          :src="mall.url"
          alt=""
          style="height: 100%; width: 100%"
          @click="clickMall(mall)"
        />
        <div style="height: 200px">{{ mall.price }}</div>
        <div>{{ mall.description }}</div>
      </el-carousel-item>
    </el-carousel>
    <div v-else>
      <div>暂无推荐</div>
    </div>

    <el-dialog title="" :visible.sync="dialogVisible" width="40%">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
          <img :src="url" alt="" style="height: 100%; width: 100%" />
        </el-carousel-item>
      </el-carousel>
      <div style="color: red; font-size: 24px">￥{{ selectedMall.price }}</div>
      <div>{{ selectedMall.description }}</div>
    </el-dialog>
  </div>
</template>

<script>
import { GetRecommendMalls, GetMallDetail } from "./api";
export default {
  data() {
    return {
      malls: [],

      dialogVisible: false,
      selectedMall: {},
      urls: [],
    };
  },
  props: {
    userId: {
      type: Number,
    },
  },
  components: {},
  mounted(){
    window.setInterval(async () => {
      if (!this.userId) {
        return;
      }
      this.malls = await GetRecommendMalls({ userId: this.userId });
    }, 5000);
  },
  activated() {
    window.setInterval(async () => {
      if (!this.userId) {
        return;
      }
      this.malls = await GetRecommendMalls({ userId: this.userId });
    }, 5000);
  },
  watch: {
    // async userId(val) {
    //   if (!val) {
    //     return;
    //   }
    //   this.malls = await GetRecommendMalls({ userId: this.userId });
    // },
  },
  methods: {
    async clickMall(mall) {
      this.selectedMall = mall;
      let detail = await GetMallDetail(this.type, mall.id);
      console.log(detail);
      this.urls = detail.urls.split(",");
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped lang="scss">
.recommand-cotainer {
  width: 500px;
  margin-left: 500px;
}
</style>
