var map;
var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  37.775, lng: -122.419},
    zoom: 13,
    scrollwheel: false
  });
   google.maps.event.addListener(map, 'mouseout', function(event){
     this.setOptions({scrollwheel:false});
    });

  var infoWindows = []
  var foodtruck = gon.food_truck
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
    var contentString = this.title
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    infoWindow.close();
    infoWindow.open(map, this);
  });

  } //for loop
} //initmap

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

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
  $('#food-submit').click(function(evt) {
    evt.preventDefault();
    deleteMarkers();
    var foodtruck = gon.food_truck
    var food_type = document.getElementById('food-type').value;
    var specific_food = []
    for (var i = 0; i < foodtruck.length; i++) {
      if (foodtruck[i].fooditems.toLowerCase().includes(food_type.toLowerCase())) {
        specific_food.push(foodtruck[i])
      } else {
        alert("Sorry, couldn't find the foodtruck serving "+food_type+"!")
      }
    }
    for (var i =0; i<specific_food.length; i++) {
      var center = { lat: parseFloat(specific_food[i]['latitude']),
                      lng: parseFloat(specific_food[i]['longitude']) }
      var markers = []
      var marker = new google.maps.Marker({
        map: map,
        position: center,
        title: specific_food[i]['name'],
        icon: {
          url: 'http://maps.gstatic.com/mapfiles/circle.png',
          anchor: new google.maps.Point(10, 10),
          scaledSize: new google.maps.Size(10, 17)
        } //icon
      }); //marker
      markers.push(marker)
      google.maps.event.addListener(marker,'click', function() {
      var contentString = this.title
      var infoWindow = new google.maps.InfoWindow({
          content: contentString
      });
      infoWindow.close();
      infoWindow.open(map, this);
    });
    } // for 
  }) //food-submit
}); //ready
