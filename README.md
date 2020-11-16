# Unsubscribe-YouTube-Channels
### Unsubscribe from all youtube channels in one go

Steps to unsubscribe from all youtube channels:
1. Login to your YouTube/Google account.
2. Go to https://www.youtube.com/feed/channels to list all your subscriptions.
3. In the same window:
    Right click → Inspect Element → Console
4. Paste code from [unsubscribeAll.js](unsubscribeAll.js) in the console and press Enter.

Blog: [Medium](https://medium.com/@ajayrajnelapudi/unsubscribe-from-all-youtube-channels-e39ee87b5640)

For any issues, please open a [github issue](https://github.com/AjayRajNelapudi/Unsubscribe-YouTube-Channels/issues).

## For Testers

Once you have run [unsubscribeAll.js](unsubscribeAll.js), please run [subscribeAll.js](subscribeAll.js) as quick as possible before refreshing the webpage, to restore all your subscribed channels.

If for some reason you were unable to restore your subscriptions, please do the following from the console:
1. Find logs after running [unsubscribeAll.js](unsubscribeAll.js)
2. You will find a log in the form of Subscriptions: [NodeList]
3. Copy that log and reach out to me at ajayraj.nelapudi@gmail.com

Thank you!