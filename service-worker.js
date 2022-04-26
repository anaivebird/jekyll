                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/04/22/how-to-start-puppet-walnut/","revision":"cca868380c4785a09bd72d5cfadae577"},{"url":"/2022/04/21/coin-price-robot/","revision":"2f625fe281b0b644dac86de86e5fde22"},{"url":"/2022/04/20/post-message-for-puppet-walnut/","revision":"aa1d87ebbfd20f3658a642337a0ad104"},{"url":"/2022/04/13/wechaty-gateway-use/","revision":"bf2f25e39fed38c448db0f84ecf3ba61"},{"url":"/2022/03/31/shezhang-bujian-le/","revision":"0472975eda2499a1086f8c819ea4a3c8"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
