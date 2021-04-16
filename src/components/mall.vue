<template>
  <div>
   
  </div>
</template>
<script>
import {GetMalls} from "./api.js"
export default {
  data(){
    return {
      type:""
    }
  },
  async mounted(){
    this.type = this.$route.query.type;
    console.log(this.type)
    let res = await GetMalls(this.type);
    console.log(res);
  },
  
  
};
</script>

