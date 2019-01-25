# rss-a-go-go

This is just a simple RSS feed reader written in JS (Vue).  The idea was to be able to open a new browser tab and it would show me some RSS feeds I was interested in without having to use any server-side code. All the feeds & settings are cached in your browser, so
multiple people could use the same install I guess.

![screenshot](src/assets/screenshot.png)

## Installing on your own webserver

Just dump the contents of the `dist/` folder onto your server and visit the URL.

## Via docker

In your terminal just run :
```
docker build -t rss-a-go-go .
docker run -p 8080:8080 rss-a-go-go
```

Once it's up you should be able to access http://localhost:8080 .

## Local project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests (no, not really...)
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests (pfft)
```
yarn run test:unit
```
