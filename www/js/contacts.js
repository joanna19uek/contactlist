function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    displayContacts(navigator.contacts);
}

function displayContacts(contacts) {
    for (var i=0; i<contacts.length; i++) {
        var p = document.createElement("p");
        p.innerHTML = contacts[i].displayName + '<br/>' + contacts[i].phoneNumbers[0];
        document.getElementById("list").appendChild(p);
    }
}