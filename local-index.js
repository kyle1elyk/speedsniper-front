const entries = [];
const messages = {home:"", busi:""};

main();

async function main() {
    await loadScans();
    await loadMessages();
    displayScans();
}

async function loadScans() {
    const response = await fetch('/api/scans');
    //console.log(response);
    const json = await response.json();
    for (let scan of json.scans) {
        entries.push(scan);
    }
}

async function loadMessages() {
    const response = await fetch('/api/checkMessages');
    console.log(response);
    const json = await response.json();
    console.log(json)
    if (json.messages[0].service == "Home") {
        messages.home = json.messages[0];
        messages.busi = json.messages[1];
    } else {
        messages.home = json.messages[1];
        messages.busi = json.messages[0];
    }
}

function displayScans() {
    for (let entry of entries) {
        addScansToUI(entry);
    }
    addMessagesToUI();
}

function addScansToUI(entry) {
    const rowEntry = document.createElement('tr');
    
    
    const scanPlate = document.createElement('td');
    scanPlate.innerText = entry.plate;

    const scanColor = document.createElement('td');
    scanColor.innerText = entry.color;

    const scanSpeed = document.createElement('td');
    scanSpeed.innerText = entry.speed;

    const scanTime = document.createElement('td');
    scanTime.innerText = entry.time;

    rowEntry.appendChild(scanPlate);
    rowEntry.appendChild(scanSpeed);
    rowEntry.appendChild(scanColor);
    rowEntry.appendChild(scanTime);

    document.getElementById("scan-list").appendChild(rowEntry)
}

function addMessagesToUI() {
    document.getElementById("home_message").innerHTML = messages.home.message;
    document.getElementById("busi_message").innerHTML = messages.busi.message;

}