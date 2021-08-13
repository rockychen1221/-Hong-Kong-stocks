<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="首页">首页</el-menu-item>
    <el-menu-item index="申购记录">申购记录</el-menu-item>
    <el-menu-item index="券商">券商</el-menu-item>
    <el-submenu index="工具">
      <template #title>工具</template>
      <el-menu-item index="港股行情">港股行情</el-menu-item>
      <el-menu-item index="美股行情">美股行情</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "head",
  setup() {
    let activeIndex = ref("");
    const router = useRouter();
    const route = useRoute();
    // 监听路由改变头部tab值
    watch(route, (now) => {
      switch (now.path) {
        case "/":
          activeIndex.value = "首页";
          break;
        case "/list":
          activeIndex.value = "申购记录";
          break;
        case "/qs":
          activeIndex.value = "券商";
          break;
        case "/hkdd":
          activeIndex.value = "港股行情";
          break;
        case "/usprice":
          activeIndex.value = "美股行情";
          break;
      }
    });

    /**
     * 点击头部菜单跳转
     * @param key
     * @param keyPath
     */
    function handleSelect(key, keyPath) {
      switch (key) {
        case "首页":
          router.push("/");
          break;
        case "申购记录":
          router.push("/list");
          break;
        case "券商":
          router.push("/qs");
          break;
        case "港股行情":
          router.push("/hkdd");
          break;
        case "美股行情":
          router.push("/usprice");
          break;
      }
    }

    return {
      activeIndex,
      handleSelect,
    };
  },
};
</script>
