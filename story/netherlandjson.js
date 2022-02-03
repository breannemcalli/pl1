
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:52.36693998779785, lng:4.906141045774263},
      zoom: 4,
    });
    '<div id="content">' +
    '<div id="infoNotice">'+
    "</div>"+
    '<h1 id="MainHeading" class="MainHeading">Amsterdam</h1>'
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
}