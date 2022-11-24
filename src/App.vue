<script setup lang="ts">
import { darkTheme, NConfigProvider, NMessageProvider, NDialogProvider, NLoadingBarProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <router-view></router-view>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
