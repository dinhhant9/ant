<template>
  <a-menu
    style="height: -webkit-fill-available; width: 256px"
    mode="vertical"
    theme="dark"
    :defaultSelectedKeys="['1']"
    @click="handleClick"
  >
    <a-menu-item key="1">
      <a-icon type="home" />Home
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="appstore" />Employee manager
    </a-menu-item>
        <a-menu-item key="3">
      <a-icon type="logout" />Log out
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log("click ", e);
    }
  }
};
</script>

