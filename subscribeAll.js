function subscribeAll() {
	console.log('Finding all subscribe buttons...');
	var subscriptions = document.querySelectorAll('paper-button[aria-label^="Subscribe to"]');
	console.log('Subscriptions:', subscriptions);

	subscriptions.forEach((subscription) => {
		var channel = subscription.getAttribute('aria-label').slice(17, -1);
		console.log('Selected channel:', channel);
		console.log('Clicking on subscribe button...');
		subscription.click();
		console.log('Clicked on subscribe to:', channel);
	});
}

console.log('Invoking subscribeAll()');
subscribeAll();
console.log('Exited subscribeAll()');