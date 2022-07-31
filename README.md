# Laravel Datatables + Vue2

Integrate Laravel Vue Datatable with your Laravel application without using JQuery.

![](ui.png)

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
    <Datatable/>
</template>

<script>
export default {

}
</script>
```