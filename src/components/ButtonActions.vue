<template>
  <div>
    <button
      class="btn btn-primary btn-sm"
      @click="onEdit(row)"
    >
      <i class="fa fa-edit" />
    </button> <button
      class="btn btn-danger  btn-sm"
      @click="onDelete(row)"
    >
      <i class="fa fa-trash" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonActions',
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  methods: {
    onEdit (row) {
      alert(`Edit ${row.id}`)
    },
    onDelete (row) {
      alert(`Delete ${row.id}`)
    }
  }
}
</script>

<style scoped>

</style>
