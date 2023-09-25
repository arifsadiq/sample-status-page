// Simulated function to get service status
function getServiceStatus(serviceName) {
    // Replace this with actual service status checks
    const randomStatus = Math.random() < 0.8 ? 'Operational' : 'Outage';
    return randomStatus;
}

// Update the status of a service
function updateServiceStatus(serviceName) {
    const statusElement = document.getElementById(`${serviceName}-status`);
    const status = getServiceStatus(serviceName);
    statusElement.textContent = status;
    statusElement.classList.remove('loading');
    statusElement.classList.add(status.toLowerCase());
}

// Update service statuses periodically (every 5 seconds in this example)
function updateStatuses() {
    const services = ['serviceA', 'serviceB', 'serviceC', 'serviceD']; // Add more service names as needed

    services.forEach((service) => {
        updateServiceStatus(service);
    });

    setTimeout(updateStatuses, 5000); // Update every 5 seconds
}

// Start updating statuses
updateStatuses();
