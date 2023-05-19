// To clear cache on devices, always increase APP_VER number after making changes.
// The app will serve fresh content right away or after 2-3 refreshes (open / close)
var APP_NAME = 'PayApp';
var APP_VER = '1.2';
var CACHE_NAME = APP_NAME + '-' + APP_VER;

// Files required to make this app work offline.
// Add all files you want to view offline below.
// Leave REQUIRED_FILES = [] to disable offline.
var REQUIRED_FILES = [
	// HTML Files
	'index.html',
	'component-accordions.html',
	'component-actions.html',
	'component-add-to-home.html',
	'component-alerts.html',
	'component-buttons.html',
	'component-cards.html',
	'component-carousels.html',
	'component-charts.html',
	'component-collapse.html',
	'component-colors.html',
	'component-columns.html',
	'component-footer-bar.html',
	'component-grid.html',
	'component-header-bar.html',
	'component-inputs.html',
	'component-list-groups.html',
	'component-menus.html',
	'component-progress.html',
	'component-tables.html',
	'component-tabs.html',
	'component-typography.html',
	'components.html',
	'index-crypto-waves.html',
	'index-crypto.html',
	'index-waves.html',
	'menu-add-card.html',
	'menu-card-settings.html',
	'menu-exchange.html',
	'menu-friends-transfer.html',
	'menu-highlights.html',
	'menu-notifications.html',
	'menu-request.html',
	'menu-sidebar.html',
	'menu-transfer.html',
	'page-activity.html',
	'page-cards-add.html',
	'page-cards-exchange.html',
	'page-cards-multiple.html',
	'page-cards-single.html',
	'page-crypto-report.html',
	'page-forgot-1.html',
	'page-forgot-2.html',
	'page-goals.html',
	'page-invoice.html',
	'page-payment-bill.html',
	'page-payment-exchange.html',
	'page-payment-request.html',
	'page-payment-transfer.html',
	'page-payments.html',
	'page-profile.html',
	'page-reports.html',
	'page-signin-1.html',
	'page-signin-2.html',
	'page-signup-1.html',
	'page-signup-2.html',
	'page-terms-of-service.html',
	'page-wallet.html',
	'pages.html',
	'walkthrough.html',
	// Styles
	'styles/style.css',
	'styles/bootstrap.css',
	// Scripts
	'scripts/custom.js',
	'scripts/bootstrap.min.js',
	// Plugins
	'plugins/apex/apexcharts.js',
	'plugins/apex/apex-call.js',
	'plugins/demo/demo.js',
	// Fonts
	'fonts/bootstrap-icons.css',
	'fonts/bootstrap-icons.woff',
	'fonts/bootstrap-icons.woff2',
	// Images
	'images/empty.png',
];

// Service Worker Diagnostic. Set true to get console logs.
var APP_DIAG = false;

//Service Worker Function Below.
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			//Adding files to cache
			return cache.addAll(REQUIRED_FILES);
		}).catch(function(error) {
			//Output error if file locations are incorrect
			if(APP_DIAG){console.log('Service Worker Cache: Error Check REQUIRED_FILES array in _service-worker.js - files are missing or path to files is incorrectly written -  ' + error);}
		})
		.then(function() {
			//Install SW if everything is ok
			return self.skipWaiting();
		})
		.then(function(){
			if(APP_DIAG){console.log('Service Worker: Cache is OK');}
		})
	);
	if(APP_DIAG){console.log('Service Worker: Installed');}
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		//Fetch Data from cache if offline
		caches.match(event.request)
			.then(function(response) {
				if (response) {return response;}
				return fetch(event.request);
			}
		)
	);
	if(APP_DIAG){console.log('Service Worker: Fetching '+APP_NAME+'-'+APP_VER+' files from Cache');}
});

self.addEventListener('activate', function(event) {
	event.waitUntil(self.clients.claim());
	event.waitUntil(
		//Check cache number, clear all assets and re-add if cache number changed
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames
					.filter(cacheName => (cacheName.startsWith(APP_NAME + "-")))
					.filter(cacheName => (cacheName !== CACHE_NAME))
					.map(cacheName => caches.delete(cacheName))
			);
		})
	);
	if(APP_DIAG){console.log('Service Worker: Activated')}
});