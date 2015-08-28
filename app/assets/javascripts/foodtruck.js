var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  37.775, lng: -122.419},
    zoom: 13,
    scrollwheel: false
  });
   google.maps.event.addListener(map, 'mouseout', function(event){
     this.setOptions({scrollwheel:false});
    });

  var markers = []
  var infoWindows = []
  var foodtruck = gon.food_truck
  // console.log(foodtruck[foodtruck.length-1])
  for (var i =0; i<foodtruck.length; i++) {
    var center = { lat: parseFloat(foodtruck[i]['latitude']),
                    lng: parseFloat(foodtruck[i]['longitude']) }
    var marker = new google.maps.Marker({
      map: map,
      position: center,
      title: foodtruck[i]['name'],
      icon: {
        url: 'http://maps.gstatic.com/mapfiles/circle.png',
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(10, 17)
      }
    });
    markers.push(marker)

    // infoWindows.push(infoWindow)

  google.maps.event.addListener(marker,'click', function() {
    console.log(this)
    var infoWindow = new google.maps.InfoWindow({
        content: this.title
    });
    infoWindow.close();
    infoWindow.open(map, this);
  });

  } //for loop
} //initmap


function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      resultsMap.setZoom(16);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};

$(document).ready(function() {
  $('#submit').click(function(evt) {
    evt.preventDefault();
    var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map);
  }); //click
}); //ready