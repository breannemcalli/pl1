
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:52.36693998779785, lng:4.906141045774263},
      zoom: 4,
    });
    '<div id="content">' +
    '<div id="infoNotice">'+
    "</div>"+
    '<h1 id="MainHeading" class="MainHeading">Vimy Ridge Trip</h1>'
    '<div id="bodyContent">' +
    "<p>This is a test</p>" +
    "</div>" +
    "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: { lat: 52.36693998779785, lng: 4.906141045774263 },
      map,
      title: "Amsterdam",
    });
  
}