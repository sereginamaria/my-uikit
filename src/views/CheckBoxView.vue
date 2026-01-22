<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import {ref} from "vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const list = ref([
  {id: '1', name: 'Name 1'},
  {id: '2', name: 'Name 2'},
  {id: '3', name: 'Name 3'},
  {id: '4', name: 'Name 4'},
])
const selectedOptions = ref([])
const switchMode = ref(false)
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <Checkbox label="Checkbox Active"
              id="checkboxActive"
              name="checkboxActive"
              value="checkboxActive"
              v-model:checked="checkboxActive"
    />
  </div>

  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <Checkbox label="Checkbox Disabled"
              id="checkboxDisabled"
              name="checkboxDisabled"
              value="checkboxDisabled"
              v-model:checked="checkboxDisabledChecked"
              :disabled="checkboxDisabled"
    />
  </div>

  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected options: {{ selectedOptions }}</p>
    <CheckboxGroup v-model:value="selectedOptions" name="List" :options="list"/>
  </div>

  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchMode }}</p>
    <Checkbox label="Switch"
              id="Switch"
              name="Switch"
              value="Switch"
              type="switch"
              v-model:checked="switchMode"
    />
  </div>
</template>

<style scoped lang="scss">

</style>