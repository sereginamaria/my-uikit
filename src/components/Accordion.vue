<script setup >
import {ref} from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  }
})

const openAccordion = ref(true)

const toggleAccordion = () => {
  openAccordion.value = !openAccordion.value
}
</script>

<template>
  <div class="accordion">
    <span class="title" @click="toggleAccordion">{{ title }}</span>
    <div class="text" v-if="openAccordion">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  width: 500px;
  margin-bottom: 20px;
}
.title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>