const CACHE_NAME = 'nichesafe-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // If both cache and network fail, return offline page
          return caches.match('/index.html');
        });
      })
  );
});

// Background sync for sending reports when back online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-report') {
    event.waitUntil(syncReport());
  }
});

async function syncReport() {
  try {
    // Get pending reports from IndexedDB or localStorage
    const pendingReports = await getPendingReports();
    
    for (const report of pendingReports) {
      // Send report to server
      await fetch('/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });
      
      // Remove from pending after successful send
      await removePendingReport(report.id);
    }
    
    // Notify user
    self.registration.showNotification('NicheSafe', {
      body: 'Report inviato con successo!',
      icon: '/icon-192.png',
      badge: '/icon-192.png'
    });
  } catch (error) {
    console.error('Sync failed:', error);
    // Will retry on next sync event
  }
}

// Helper functions for IndexedDB (simplified for demo)
async function getPendingReports() {
  // In a real app, this would query IndexedDB
  return [];
}

async function removePendingReport(id) {
  // In a real app, this would remove from IndexedDB
  return true;
}

// Handle push notifications (for future enhancement)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Hai una nuova notifica',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Apri CheckPro'
      },
      {
        action: 'close',
        title: 'Chiudi'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('NicheSafe', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
