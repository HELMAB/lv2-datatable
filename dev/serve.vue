<script>
import Vue from "vue";
import DataTable from "@/DataTable.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    DataTable,
  },
  data() {
    return {
      locale: "en",
      dataRows: null,
      axios,
    };
  },
  computed: {
    columns() {
      return [
        {
          data: "title",
          name: "title",
          title: this.locale === "km" ? "ចំណង់ជើង" : "Title",
          orderable: true,
          searchable: true,
        },
        {
          data: "user.name",
          name: "user.name",
          title: this.locale === "km" ? "អ្នកប្រើប្រាស់" : "User",
          orderable: true,
          searchable: false,
        },
        {
          data: "created_at",
          name: "created_at",
          title: this.locale === "km" ? "កាលបរិច្ឆេទបង្កើត" : "Creation Date",
          orderable: true,
          searchable: false,
          width: "210px",
        },
        {
          data: "action",
          name: "action",
          title: this.locale === "km" ? "ប្រតិបត្តិការ" : "Action",
          orderable: false,
          searchable: false,
          slot: "action",
          width: "100px",
        },
      ];
    },
  },
  methods: {
    toggleLocale() {
      this.locale = this.locale === "km" ? "en" : "km";
    },
  },
  beforeMount() {
    this.dataRows = Array(10000)
      .fill(1, 0, 10000)
      .map((_, i) => {
        return {
          id: i + 1,
          title: `Title ${i + 1}`,
          user: {
            id: i + 1,
            name: `User ${i + 1}`,
          },
          created_at: new Date().toLocaleString(),
        };
      });
  },
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" style="margin: 24px 0">
        <button @click="toggleLocale" class="btn btn-primary">
          Toggle Locale
        </button>
        <button @click="$refs.datatable.refresh()" class="btn btn-info">
          Refresh Datatable
        </button>
      </div>
    </div>

    <DataTable
      :axios="axios"
      url="http://127.0.0.1:8000/api/v1/posts/datatable"
      :columns="columns"
      ref="datatable"
      :locale="locale"
      table-id="datatable"
      saved-state
      :data-rows="dataRows"
    >
      <template #action="{ row }">
        <ButtonActions :row="row" />
      </template>
    </DataTable>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&family=Raleway:wght@300;400;700&display=swap");

body {
  font-family: "Raleway", "Kantumruy Pro", sans-serif;
}
</style>
