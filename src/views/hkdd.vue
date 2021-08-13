<template>
  <el-alert
      style="margin-top: 10px"
      :closable="false"
      title="美股行情涨幅"
      type="success">
  </el-alert>
 
 <iframe src="https://www.xinguyufu.cn/hq" ref="iframe" width="100%" height="798px" class="iframe"></iframe>
</template>

<script>
import { useRouter } from "vue-router"
export default {
  name: 'hkdd',
  setup() {
   
    return {  };
  },
}
</script>
