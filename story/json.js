function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 52.3676, lng: 4.9041 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 52.3065, lng: 4.8723 }, "Cobra Museums"],
    [{ lat: 52.3573, lng: 4.8830 }, "Van Gough Museum"],
    [{ lat: 52.3632, lng: 4.8943 }, "Rijksmuseum"],
    [{ lat: 52.3666, lng: 4.9111 }, "Holocaust Memorial and Dutch Theater"],
    [{ lat: 52.3744, lng: 4.8923 }, "Amsterdam Museum"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
