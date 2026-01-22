<script setup >
import Tabs from "@/components/Tabs.vue";
import {ref} from "vue";

const tabs = [
  {name: 'About', label: 'About'},
  {name: 'Vue', label: 'Vue'},
  {name: 'React', label: 'React'}
]

const selectedTab = ref('Vue')

const changeTab = (tabName) => {
  selectedTab.value = tabName;
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @change-tab="changeTab">
    <div v-if="selectedTab === 'About'">Lorem ipsum.</div>
    <div v-if="selectedTab === 'Vue'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab === 'React'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, pariatur!</div>
  </Tabs>
  <p>selectedTab: {{ selectedTab }}</p>
</template>

<style scoped lang="scss">

</style>