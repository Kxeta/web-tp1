var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function renderMap() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var location = new google.maps.LatLng(-19.94215660639683,-43.933188677246086);
  var mapOptions = {
    zoom: 17,
    center: location
  };
  map = new google.maps.Map(document.getElementById('mapa-contato'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute(location) {
  var today = new Date();
  var request;
  var dest;

  var Digital=new Date()
  var hours=Digital.getHours()
if (hours>=7&&hours<=13) //Cristo Redentor
dest = '-22.95192,-43.21049';
else if (hours>13&&hours<=18) //Igrejinha da Pampulha
dest = '-19.85838,-43.97903';
else if (hours>18&&hours<=20) //Igreja Nossa Senhora do Carmo
dest = '-19.94421,-43.93402';
else //Chalezinho (Balada!)
dest = '-19.96795,-43.95772';
  request = {
      origin: location,
      destination: dest,
      travelMode: google.maps.TravelMode.DRIVING
  };
  
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK ) {
      directionsDisplay.setDirections(response);
    }
  });
}

function renderGeolocationMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
        zoom: 17,
        center: location,
        scrollwheel: true
    };
    map = new google.maps.Map(document.getElementById('mapa-contato'), mapOptions);
	
    directionsDisplay.setMap(map);
	
    calcRoute(location);
  });
}

function initialize() {
  renderMap();
  if ("geolocation" in navigator) {
    renderGeolocationMap();
  } else {
    renderMap();
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
