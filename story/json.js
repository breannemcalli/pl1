// Credit fr template goes to https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility#maps_marker_accessibility-html

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 52.3676, lng: 4.9041 },
  });
  //Tour stops based on my favourite museums. The top one is my favourite.
  const tourStops = [
    [{ lat: 52.3040, lng: 4.8577 }, "Cobra Museum"],
    [{ lat: 52.3573, lng: 4.8830 }, "Van Gough Museum"],
    [{ lat: 52.3632, lng: 4.8943 }, "Rijksmuseum"],
    [{ lat: 52.3666, lng: 4.9111 }, "Holocaust Memorial and Dutch Theater"],
    [{ lat: 52.3744, lng: 4.8923 }, "Amsterdam Museum"],
  ];
  // This creates a window to share information
  const infoWindow = new google.maps.InfoWindow();

  // This creates the markers
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
