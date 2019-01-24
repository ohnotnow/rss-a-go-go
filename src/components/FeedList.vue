<template>
  <div class="container mx-auto grid pt-8">
    <Feed v-for="feed in feeds" :key="feed" :feed="feed"/>
  </div>
</template>

<script>
import Feed from "./Feed.vue";

export default {
  props: ["feeds"],
  components: {
    Feed
  }
};
</script>
