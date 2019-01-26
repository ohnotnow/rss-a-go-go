<template>
  <div id="app" class="bg-black font-sans">
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

    <sortable-list v-model="feeds">
      <div slot-scope="{ items }" class="container mx-auto grid pt-8">
        <sortable-item v-for="feed in items" :key="feed">
          <feed-item :feed="feed" @remove="deleteFeed"/>
        </sortable-item>
      </div>
    </sortable-list>
  </div>
</template>

<script>
import SortableList from "./components/SortableList";
import SortableItem from "./components/SortableItem";
import FeedItem from "./components/FeedItem";

export default {
  name: "app",
  components: {
    SortableList,
    SortableItem,
    FeedItem
  },
  mounted() {
    const cachedFeeds = localStorage.getItem("rss::feeds");
    if (cachedFeeds) {
      this.feeds = JSON.parse(cachedFeeds);
    }
  },
  watch: {
    feeds() {
      localStorage.setItem("rss::feeds", JSON.stringify(this.feeds));
    }
  },
  data() {
    return {
      newFeedUrl: "",
      feeds: ["http://feeds.bbci.co.uk/news/rss.xml"]
    };
  },
  methods: {
    addFeed() {
      if (!this.newFeedUrl) {
        return;
      }
      const newFeeds = [...this.feeds];
      newFeeds.push(this.newFeedUrl.trim());
      this.feeds = [...new Set(newFeeds)]; // make sure the array is distinct values
      this.newFeedUrl = "";
    },
    deleteFeed(feed) {
      this.feeds = this.feeds.filter(iFeed => iFeed != feed);
    }
  }
};
</script>
