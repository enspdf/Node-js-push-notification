console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notification Works!',
        icon: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/256/Yin-Yang-True-false-icon.png'
    });
});