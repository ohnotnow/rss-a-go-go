<template>
  <div id="app">
    <div class="px-4">
      <form class="w-full max-w-sm mx-auto">
        <div class="flex items-center border-b border-b-2 border-grey-darkest py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-grey mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-grey-darkest"
            type="text"
            placeholder="https://www.example.com/rss"
            aria-label="New Feed URL"
            v-model="newFeedUrl"
          >
          <button
            class="flex-no-shrink bg-grey-darkest hover:bg-grey-darkest-dark border-grey-darkest hover:border-black hover:text-grey-light text-sm border-2 text-grey py-1 px-2 rounded"
            type="button"
            @click="addFeed"
          >Add</button>
        </div>
      </form>
    </div>

    <feed-list :feeds="feeds"></feed-list>
  </div>
</template>

<script>
import FeedList from "./components/FeedList.vue";

export default {
  name: "app",
  components: {
    FeedList
  },
  data() {
    return {
      newFeedUrl: "",
      feeds: [
        "http://feeds.bbci.co.uk/news/rss.xml",
        "https://www.reddit.com/r/glasgow/.rss",
        "https://www.reddit.com/r/PHP/.rss"
        // "https://www.google.com/2",
        // "https://www.google.com/3",
        // "https://www.google.com/4",
        // "https://www.google.com/5",
        // "https://www.google.com/6",
        // "https://www.google.com/7",
        // "https://www.google.com/8",
        // "https://www.google.com/9"
      ]
    };
  },
  methods: {
    addFeed() {
      if (!this.newFeedUrl) {
        return;
      }
      this.feeds.push(this.newFeedUrl);
      this.newFeedUrl = "";
    }
  }
};
</script>
