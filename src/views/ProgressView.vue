<script setup>
import ProgressBar from "@/components/Progress/ProgressBar.vue";
import { ref } from "vue";
import Button from "@/components/Button.vue";
import ProgressCircle from "@/components/Progress/ProgressCircle.vue";

const percentBar = ref(40)
const percentCircle = ref(30)

const addPercentBar = () => {
  percentBar.value += 10
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
}

const addPercentCircle = () => {
  percentCircle.value += 10
  if (percentCircle.value > 100) {
    percentCircle.value = 100;
  }
}
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar max-width="500px" :percent="percentBar" color="success"/>
    <Button label="Add 10%" @click="addPercentBar"/>
  </div>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" color="warning"/>
    <Button label="Add 10%" @click="addPercentCircle"/>
  </div>
</template>

<style scoped lang="scss">

</style>