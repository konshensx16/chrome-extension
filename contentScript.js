/**
 * this file is sending the ftp_value in lower case which causing a problem
 */
var ftp_infos = document.getElementById('ftp_infos');

var $button = makeElement("a");
var linkTextNode = document.createTextNode('Open FileZilla');
$button.appendChild(linkTextNode);
// Creating the tr and td and appending td to tr 
var $tr = makeElement("tr")
var $td = makeElement("td")

$td.appendChild($button)
$tr.appendChild($td)

ftp_infos.appendChild($tr)

// handle the click event on the open button and sends a message to the background.js file
$button.addEventListener ('click', function (event) {
	chrome.extension.sendMessage({type: 'ftp_infos', value: getFtpInfos()});
})

/**
 * helps generate an HTMLElement given a name
 * @param {*} elementName 
 */
function makeElement(elementName) {
	return document.createElement(elementName);
}

/**
 * gets the ftp informations from the DOM
 */
function getFtpInfos () {
	var cmd_windows = document.getElementById('cmd_windows');
	return cmd_windows.value;
}