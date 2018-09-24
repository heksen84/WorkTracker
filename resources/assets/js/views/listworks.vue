<template>
<b-container class="greyText">
    <h1>вакансии</h1>
    <b-row class="text-center">
        <b-col class="greyText">
	<b-table hover :items="items"></b-table>
	</b-col>
    </b-row>
</b-container>
</template>

<script>
const items = [
  { isActive: true, age: 21, first_name: 'Илья', last_name: '---------------' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>
