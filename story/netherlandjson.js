function initMap(){
const map = new google.maps.Map(document.getElementById("map"),{
zoom: 4,
center: { lat: 52.3676, lng: 4.9041 },
});
const labels = "123456789";

const markers = locations.map((location, i) =>{
    return new google.maps.Marker({
        position:location,
        label: labels[i % labels.length],
    });
});
}
const locations = [

    { lat:52.35860205454664, lng: 4.881079338206324},

]