<script setup>
    defineProps({
        data: {
          type: Array,
            required: true
        },
        title: {
          type: String
        },
        dark: {
          type: Boolean
        }
        
    })

    function getRootClass(dark) {
      return `list-box ${dark ? 'dark' : ''}`
    }
</script>

<template>
    <div :class=getRootClass(dark)>
        <h4 v-if="title">{{  title }}</h4>
        <div v-for="(item, key) in data" :key="key" class="list-item">
            <slot :item="item" />
        </div>
    </div>
</template>

<style scoped>
  .list-box {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: .5rem;
    background-color: #ebebeb;
  }

  .list-box h3 {
    position: relative;
    left: -0.5rem;
    font-size: 1.5rem;
  }

  .list-box.dark {
    background-color: #1e1e1e;
    color: white;
  }

  .list-box.dark div,
  .list-box.dark span {
    color: black;
  }

  .list-item {
    padding: .5rem;
    border-radius: .5rem;
    background-color: white;
  }

  h4 {
    position: relative;
    left: -0.5rem;
    margin: 0;
    font-size: 1.5rem;
  }
</style>
  