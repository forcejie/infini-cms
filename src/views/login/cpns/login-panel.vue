<template>
  <div class="login-panel">
    <h1 class="title">管理系统</h1>
    <div class="tabs">
      <el-tabs stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef"></pane-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" size="large" @click="handleLoginBtnClick">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { localCache } from "@/utils/cache"
import PaneAccount from "./pane-account.vue"

const activeName = ref("account")
const isRemPwd = ref<boolean>(localCache.getCache("isRemPwd") ?? false)
watch(isRemPwd, (newValue) => {
  localCache.setCache("isRemPwd", newValue)
})
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value === "account") {
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log("用户在进行手机登录")
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  // margin-top: 30px;
  margin-bottom: 10px;
  // overflow: hidden;
  margin: 0 auto; /* 居中显示 */
  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
