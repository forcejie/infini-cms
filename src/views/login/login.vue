<template>
  <div class="login">
    <div class="contain">
      <div class="login-panel-wrapper">
        <login-panel />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LoginPanel from "./cpns/login-panel.vue"
</script>
<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("../../assets/images/login.jpg") no-repeat center / cover;
  .contain {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-panel-wrapper {
      height: 100%;
      box-sizing: border-box;
      padding: 30px;
    }
  }
}
</style>
