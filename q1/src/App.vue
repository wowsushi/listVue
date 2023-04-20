<script setup>
  import ListComponent from '@/components/ListComponent.vue'

  const listType1= [
    {
      name: "Anna",
      year: 10,
      class: "A"  
    },
    {
      name: "Mark",
      year: 10,
      class: "M",
    }
  ]

  const listType2 = [
    {
      title: "Javascript Info",
      category: "book",
      rating: 10,
    },
    {
      title: "Fantasy",
      category: "movie",
      rating: 5,
    }
  ]

  const listType3 = [
    {
      winner: 'Amy',
      rank: 1
    },
    {
      winner: 'Bob',
      rank: 2
    },
    {
      winner: 'Jack',
      rank: 3
    }
  ]
</script>

<template>
    <div class="wrapper">
      <div class="showroom">
        <h3>List 1</h3>
        <ListComponent keyName="title" :data="listType1" v-slot="slopProps">
          <div>
            <p>
              Student: {{ slopProps.item.name }}
            </p>
            <p>
              <span>Year: {{  slopProps.item.year }}</span>
              <span>, </span>
              <span>Room: {{  slopProps.item.class }}</span>
            </p>
          </div>
        </ListComponent>
      </div>

      <div class="showroom">
        <h3>List 2</h3>
        <ListComponent keyName="title" :data="listType2" v-slot="slopProps">
          <div>
            <p>
              Title: {{ slopProps.item.title }}
            </p>
            <p>
              <span>Category: {{  slopProps.item.category }}</span>
              <span> | </span>
              <span>{{  slopProps.item.rating }} likes</span>
            </p>
          </div>
        </ListComponent>
      </div>

      <div class="showroom">
        <h3>List 3</h3>
        <ListComponent keyName="winner" :data="listType3" v-slot="slopProps" title="Top 3 Winners" dark>
          <span class="mr-2">{{ slopProps.item.rank }}</span>
          <span>{{ slopProps.item.winner }}</span>
        </ListComponent>
      </div>
    </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    gap: 1rem;
  }

  .showroom {
    flex: 1;
  }
</style>
