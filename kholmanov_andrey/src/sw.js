const cacheName = 'chat-v1';
const staticAssets = [
    './',
    './main.css',
    './bundle.js',
    './api/chats.json',
];

//Вызывается как только пользователь впервые открывает WPA
//install —  вызывается при первом открытии сайта, на котором есть service worker. Это процедура установки сервис-воркера в браузер пользователя
self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets); //Кэшируем статику
    return self.skipWaiting();
});

// activate — вызывается сразу после install и очищает ресурсы, использованные в предыдущей версии скрипта сервис-воркера
self.addEventListener('activate', e => {
    self.clients.claim();
});

// fetch — генерируется при каждом запросе на сервер. Сервис-воркер будет перехватывать каждое такое
// событие и искать в кеше запрашиваемые ресурсы, прежде чем идти за ними на сервер
self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        return await cache.match(req);
    }
}

self.addEventListener('push', (event) => {
    console.log(event);

    let body = '';

    if(event.data){
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }

    const options = {
        body
    };

    event.waitUntil(
        registration.showNotification('Chat message!', options)
    );
});

self.addEventListener('sync', (event) => {
    if(event.tag === 'one'){
        console.log('Sync one!!!');
    }
});