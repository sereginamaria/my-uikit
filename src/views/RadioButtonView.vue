<script setup>
import { ref } from 'vue'
import Radiobutton from "@/components/Radiobutton.vue";

const list = ref([
  {id: '1', name: 'Name 1'},
  {id: '2', name: 'Name 2'},
  {id: '3', name: 'Name 3'},
  {id: '4', name: 'Name 4'}
])
const selectedOption = ref('')
const radiobuttonDisabled = ref(true)
const radiobuttonDisabledChecked = ref(true)
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected option: {{ selectedOption }}</p>
    <div v-for="option in list" :key="option.id">
      <Radiobutton
          :value="option.name"
          :label="option.name"
          :id="option.id"
          name="option"
          v-model:checkedValue="selectedOption"
      />
    </div>
  </div>

  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Radiobutton
        value="Radiobutton Disabled"
        label="Radiobutton Disabled"
        id="RadiobuttonDisabled"
        name="RadiobuttonDisabled"
        :disabled="radiobuttonDisabled"
        v-model:checkedValue="radiobuttonDisabledChecked"
    />
  </div>
</template>

<style scoped lang="scss">

</style>