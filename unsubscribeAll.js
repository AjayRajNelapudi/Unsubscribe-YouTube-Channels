function unsubscribeAll() {
	var subscriptions = document.querySelectorAll('paper-button[aria-label^="Unsubscribe from"]');

	subscriptions.forEach((subscription) => {
		subscription.click();
		var unsubscribeButton = document.querySelector('paper-button[aria-label="Unsubscribe"]')
		unsubscribeButton.click();
	});
}

unsubscribeAll();