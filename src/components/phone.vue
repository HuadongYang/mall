<template>
  <div>
    <div flex class="img-box">
      <div
        v-for="item in data"
        :key="item.id"
        class="item-class"
        @click="clickMall(item)"
      >
        <img :src="item.url" alt="" style="width: 100px; height: 100px" />
        <div style="color: red">￥{{ item.price }}</div>
        <div class="des-class">{{ item.description }}</div>
      </div>
    </div>
    
    <el-dialog title="" :visible.sync="dialogVisible" width="40%">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(url, index) in urls" :key="index">
          <img :src="url" alt="" style="height:100%;width:100%" />
        </el-carousel-item>
      </el-carousel>
      <div style="color: red; font-size: 24px">￥{{ selectedMall.price }}</div>
      <div>{{ selectedMall.description }}</div>
    </el-dialog>
  </div>
</template>
<script>
import { GetMalls, GetMallDetail } from "./api.js";
export default {
  data() {
    return {
      type: "",
      data: [],
      dialogVisible: false,
      selectedMall: {},
      urls: [],
    };
  },
  async mounted() {
    this.type = this.$route.query.type;
    console.log(this.type);
    this.data = await GetMalls(this.type);
    console.log(this.data);
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

<style lang="scss" scoped>
.img-box {
  flex-wrap: wrap;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 100px;
}

.item-class {
  margin-right: 100px;
  margin-bottom: 50px;
  cursor: pointer;
}
.des-class {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
}

</style>