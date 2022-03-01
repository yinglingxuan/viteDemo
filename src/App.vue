<template>
  <a-config-provider :locale="config.locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts"></script>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  import 'dayjs/locale/zh-cn'
  import dayjs from 'dayjs'

  dayjs.locale('zh-cn')

  const config = reactive({
    locale: zhCN
  })
</script>

<style lang="less">
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>
