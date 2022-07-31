# Laravel Datatables + Vue2

Integrate Laravel Vue Datatable with your Laravel application without using JQuery.

![](https://raw.githubusercontent.com/HELMAB/lv2-datatable/master/src/assets/ui.png?token=GHSAT0AAAAAABWQR7SDE4B6ROYDM4DRBASYYXGPMNQ)

## Installation

```cmd
npm install lv2-datatable
```

## Usage

```js
import Vue from 'vue'
import Datatable from 'lv2-datatable'

Vue.use('Datatable', Datatable)
```

```vue
<template>
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
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      axios,
      locale: 'en',
      dataRows: [], // non server side data
    }
  },
  computed: {
    columns() {
      return [
        {
          data: "title",
          name: "title",
          title: "Title",
          orderable: true,
          searchable: true,
        },
        {
          data: "user.name",
          name: "user.name",
          title: "User",
          orderable: true,
          searchable: false,
        },
        {
          data: "created_at",
          name: "created_at",
          title: "Creation Date",
          orderable: true,
          searchable: false,
          width: "210px",
        },
        {
          data: "action",
          name: "action",
          title: "Action",
          orderable: false,
          searchable: false,
          slot: "action",
          width: "100px",
        },
      ];
    },
  },
}
</script>
```
## Props

| Prop          | Type    | Description                                |
|---------------|---------|--------------------------------------------|
| axios         | Object  | Axios instance                             |
| url           | String  | The url to fetch data                      |
| columns       | Array   | Columns to show                            |
| locale        | String  | Localization code ("en", "km")             |
| data-rows     | Array   | Static data of the table                   |
| table-id      | String  | The table ID                               |
| saved-state   | Boolean | Save state of datatable                    |
| lengthOptions | Array   | Dropdown length option                     |
| order         | Array   | Order column and direction                 |
| design        | String  | ["bootstrap3", "bootstrap4", "bootstrap5"] |

## Methods

To redraw the datatable, you can call this method.

```js
this.$refs.datatable.refresh()
```

## Slots

Every of column can have a slot, and it defines by adding the `slot` attribute inside `columns`. The slot name is the same as the column name, and it has `row` and `column` as props data.

```vue
<template>
  <DataTable>
    <template #action="{ row, column }">
      <span>{{ row.title }} - {{ column.data }}</span>
    </template>
  </DataTable>
</template>
```
