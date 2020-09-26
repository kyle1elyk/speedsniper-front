const entries = []

main();

function main() {

}

function displayScans() {
    for (let entry of entries) {
        addScansToUI();
    }
}

function addScansToUI(entry) {
    const rowEntry = document.createElement('tr');
    
    
    const scanPlate = document.createElement('td');
    scanPlate.innerText = entry.plate;

    const scanColor = document.createElement('td');
    scanColor.innerText = entry.color;

    const scanSpeed = document.createElement('td');
    scanSpeed.innerText = entry.color;

    const scanTime = document.createElement('td');
    scanTime.innerText = entry.time;

    rowEntry.appendChild(scanPlate);
    rowEntry.appendChild(scanSpeed);
    rowEntry.appendChild(scanColor);
    rowEntry.appendChild(scanTime);

    document.getElementById("scan-list").appendChild(rowEntry)
}