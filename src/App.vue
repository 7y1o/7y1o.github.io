<script setup></script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>