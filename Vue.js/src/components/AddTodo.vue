<template>
  <form @submit.prevent="onSubmit">
<!--    v-model tvyaly verdnelu hamar-->
    <input type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  //ddata tvyalner talu hamar
  data() {
    return {
      title: ''
    }
  },
  //methods js i funkchianeri hamar
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input {
    width: 400px;
  }
</style>
