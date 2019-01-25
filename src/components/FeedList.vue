<template>
  <div class="container mx-auto grid pt-8">
    <Feed v-for="feed in feeds" :key="feed" :feed="feed" @remove="deleteFeed"/>
  </div>
</template>

<script>
import Feed from "./Feed.vue";

export default {
  props: ["feeds"],
  components: {
    Feed
  },
  mounted() {
    const cachedFeeds = localStorage.getItem("rss::feeds");
    if (cachedFeeds) {
      this.initialFeeds = JSON.parse(cachedFeeds);
    }
  },
  methods: {
    deleteFeed(feed) {
      this.$emit("remove", feed);
    }
  }
};
</script>
