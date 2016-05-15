var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.331, lng: -83.045},
    zoom: 15
  });
}
