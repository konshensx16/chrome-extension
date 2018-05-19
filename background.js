chrome.runtime.onMessage.addListener(function (request, sender) {
	if (request.type == "ftp_infos") {
        console.log(request.value);
		// split the request.value to only get the ftp instead of the entire command 
		let ftp_value = request.value.split(' ')[1]
		// connect to the native app
		var port = chrome.runtime.connectNative("com.google.chrome.example.echo");
		// post the message to the host app (cpp app)
		port.postMessage( ftp_value );

		// on a message from the host app (cpp app)
		port.onMessage.addListener(function (message) {
			console.log(message);
		})
		

		// when the connection between the extension and the native app is lost
		port.onDisconnect.addListener(function (error) {
			console.log(error)
			console.log('Disconnected due to: ' + chrome.runtime.lastError.message)
		})
	}
});