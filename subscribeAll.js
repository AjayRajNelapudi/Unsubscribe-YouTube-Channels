function subscribeAll() {
	var subscriptions = document.querySelectorAll('paper-button[aria-label^="Subscribe to"]');

	subscriptions.forEach((subscription) => {
		subscription.click();
	});
}

subscribeAll();