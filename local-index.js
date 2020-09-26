const entries = []

main();

async function main() {
    await loadScans();
    displayScans();
}

async function loadScans() {
    const response = await fetch('/api/scans');
    console.log(response);
    const json = await response.json();
    for (let scan of json.scans) {
        entries.push(scan);
    }
}

function displayScans() {
    for (let entry of entries) {
        addScansToUI(entry);
    }
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