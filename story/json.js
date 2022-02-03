//Breanne McAllister
//Google Assignment for Geom 99
// Credit for template goes to https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility#maps_marker_accessibility-html
//My map provides 5 different museums that I went to on this trip and my ranking of them from my favourite to my least favourite
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 52.3676, lng: 4.9041 },
  });
  //Tour stops based on my favourite museums. The top one is my favourite.
  //This list outlines eahc of the latitudes and longitudes of the museums 
  const tourStops = [
    [{ lat: 52.30406934582546, lng: 4.857803396531247 }, "Cobra Museum"],
    [{ lat: 52.35854692589102, lng: 4.880957581190437 }, "Van Gough Museum"],
    [{ lat: 52.36012862120087, lng: 4.885175883039641 }, "Rijksmuseum"],
    [{ lat: 52.36659145090503, lng: 4.911209229066864 }, "Holocaust Memorial and Dutch Theater"],
    [{ lat: 52.37014133880945, lng: 4.8899526422331965 }, "Amsterdam Museum"],
  ];
  // This creates a window to share information
  const infoWindow = new google.maps.InfoWindow();

  // This creates the markers for each of the map and labels them from 1 to 5.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // This sets up an information window when the viewer clicks the marker
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
