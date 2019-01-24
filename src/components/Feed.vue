<template>
  <div class="border border-black p-4 shadow-md bg-grey-darkest relative">
    <h1 class="mb-4 opacity-50 flex items-start">
      <button
        class="text-white"
        @click="refreshFeed"
        :disabled="refreshing"
        :class="{ 'opacity-50': refreshing }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-8 mr-4"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" class="primary"></circle>
          <path
            class="secondary"
            d="M8.52 7.11a5.98 5.98 0 0 1 8.98 2.5 1 1 0 1 1-1.83.8 4 4 0 0 0-5.7-1.86l.74.74A1 1 0 0 1 10 11H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1.7-.7l.82.81zm5.51 8.34l-.74-.74A1 1 0 0 1 14 13h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1.7.7l-.82-.81A5.98 5.98 0 0 1 6.5 14.4a1 1 0 1 1 1.83-.8 4 4 0 0 0 5.7 1.85z"
          ></path>
        </svg>
      </button>
      <span>{{ strippedUrl(feed) }}</span>
    </h1>
    <ul class="list-reset">
      <li v-for="item in items" :key="item.link" class="mb-4">
        <a
          class="text-grey text-xl no-underline hover:text-grey-light"
          :href="item.link"
        >{{ item.title }}</a>
        <div class="text-grey-dark font-light text-sm opacity-70">{{ item.pubDate }}</div>
      </li>
    </ul>
    <button class="absolute pin-r pin-b">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-trash w-8 mr-2">
        <path
          class="primary"
          d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
        ></path>
        <path
          class="secondary"
          d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
let Parser = require("rss-parser");
let parser = new Parser();

export default {
  props: ["feed"],
  mounted() {
    let items = localStorage.getItem(`rss::${this.feed}`);
    if (items) {
      this.items = JSON.parse(items);
    }
    let lastRefresh = localStorage.getItem(`rss::${this.feed}::lastrefresh`);
    const refreshMinutes = 15 * 60 * 1000; // 15 minutes
    const aWhileAgo = new Date().getTime() - refreshMinutes;
    if (!lastRefresh || lastRefresh < aWhileAgo) {
      this.refreshFeed();
    }
  },
  data() {
    return {
      refreshing: false,
      items: []
    };
  },
  methods: {
    strippedUrl(url) {
      var urlParts = url
        .replace("http://", "")
        .replace("https://", "")
        .split(/[/?#]/);
      return urlParts[0];
    },
    async refreshFeed() {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      this.refreshing = true;
      const feed = await parser.parseURL(CORS_PROXY + this.feed);
      this.items = feed.items.slice(0, 10);
      this.refreshing = false;
      localStorage.setItem(`rss::${this.feed}`, JSON.stringify(this.items));
      const now = new Date().getTime();
      localStorage.setItem(`rss::${this.feed}::lastrefresh`, now);
    }
  }
};
</script>
