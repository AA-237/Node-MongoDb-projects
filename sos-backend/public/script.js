document.getElementById('alertForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var userId = document.getElementById('userId').value;
    var contactId = document.getElementById('contactId').value;
    var alertType = document.getElementById('alertType').value;
    var longitude = document.getElementById('longitude').value;
    var latitude = document.getElementById('latitude').value;

    var data = {
        userId: userId,
        contactId: contactId,
        alertTime: new Date().toISOString(),
        alertType: alertType,
        location: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
        }
    };

    fetch('http://localhost:5000/alert/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            loadAlerts();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

/// loading the alerts on to the web page
function loadAlerts() {
    fetch('http://localhost:5000/alert')
        .then(response => response.json())
        .then(data => {
            var alertsDiv = document.getElementById('alerts');
            alertsDiv.innerHTML = '';
            data.forEach(function (alert) {
                var div = document.createElement('div');
                div.className = 'alert';
                div.textContent = alert.alertType + ' at ' + alert.location.coordinates.join(', ');
                alertsDiv.appendChild(div);
            });
        });
}

loadAlerts();