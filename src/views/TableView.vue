<script setup >
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import {ref, computed} from "vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import Button from "@/components/Button.vue";

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumn = '50px 1fr 2fr 150px 140px'

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  }
])

const sortField = ref('id')
const typeSort = ref('asc')

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') typeSort.value = 'desc'
    else typeSort.value = 'asc'
  }
  else {
    sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <span>Sort Field: {{ sortField }}</span><br>
  <span>Type Sort: {{ typeSort }}</span><br>
  <BaseTable
      :head="tableHeads"
      :columnTemplates="tableSizeColumn"
      @sorting="setSort"
  >
    <TableRow v-for="book in booksSorting" :key="book.id" :column-templates="tableSizeColumn" :bg-row="book.bg">
      <TableColumn :column-title="tableHeads[0]">
        {{ book.id }}
      </TableColumn>
      <TableColumn :column-title="tableHeads[1]">
        {{ book.author }}
      </TableColumn>
      <TableColumn :column-title="tableHeads[2]">
        {{ book.title }}
      </TableColumn>
      <TableColumn image :src-image="book.image" />
      <TableColumn>
        <Button label="Button"></Button>
      </TableColumn>
    </TableRow>
  </BaseTable>

</template>

<style scoped lang="scss">

</style>