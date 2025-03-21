  // Initialize the map only after the modal is shown
  $('#mapModal').on('shown.bs.modal', function () {
    var map = L.map('map').setView([28.7041, 77.1025], 13); // Change coordinates here

    // Add OpenStreetMap Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add Marker
    L.marker([28.7041, 77.1025]).addTo(map)
      .bindPopup("Your Location")
      .openPopup();
  });

  // Reset map when modal is closed
  $('#mapModal').on('hidden.bs.modal', function () {
    $('#map').html(''); // Clear map container when modal is closed (optional)
  });
    // Toggle Sidebar and Overlay
    document.getElementById("toggle-btn").addEventListener("click", function() {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("overlay").classList.toggle("active");
    });

    // Close sidebar when clicking the overlay
    document.getElementById("overlay").addEventListener("click", function() {
      document.getElementById("sidebar").classList.remove("active");
      document.getElementById("overlay").classList.remove("active");
    });