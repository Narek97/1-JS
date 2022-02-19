<template>
    <li>
    <span v-bind:class="{done: todo.completed}">
<!--      v-on click,change sench baner kapelu hamar-->
      <input type="checkbox"
             v-on:change="todo.completed = !todo.completed">
      <strong>{{index + 1}}</strong>
        <!-- uppercase scripti filter funkchiayin tvyalnery talu hamar -->
      {{todo.title | uppercase}}
    </span>
        <!--  componentin vorum kanchum enq funkchia talu hamar $emit(arajiny anuny,errkrordy inch paramtr hety tanq)"-->
        <button class="rm"
                v-on:click="$emit('remove-todo', todo.id)"
        >&times;
        </button>
    </li>
</template>

<script>
    export default {
        //props ich ekat tvyalnery verdnelu hamar
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: Number
        },
        //tarber baner filtrelu hamar
        filters: {
            uppercase(value) {
                return value.toUpperCase()
            }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>
