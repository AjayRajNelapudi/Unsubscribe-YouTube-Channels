function unsubscribeAll() {
	console.log('Finding all unsubscribe buttons...');
	var subscriptions = document.querySelectorAll('paper-button[aria-label^="Unsubscribe from"]');
	console.log('Subscriptions', subscriptions);

	subscriptions.forEach((subscription) => {
		console.log('Clicking on unsubscribe button...');
		subscription.click();
		console.log('Finding confirm unsubscribe button...');
		var unsubscribeButton = document.querySelector('paper-button[aria-label="Unsubscribe"]')
		console.log('Clicking on confirm unsibscribe button...');
		unsubscribeButton.click();
		console.log('Unsubscribed:', subscription);
	});
}

console.log('Invoking unsubscribeAll()');
unsubscribeAll();
console.log('Exited unsubscribeAll()');