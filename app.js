
'use strict';

//array to hold all of our toilets
var toilets = [];
var toilets = JSON.parse(localStorage.data);

//initializing google map
function initMap() {
  var coords = {lat: 47.6164918, lng: -122.3511866};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coords
  });

  //following lines of code creates a marker then gives that marker an info window and a event listener
  function addMarker(obj){
    var marker = new google.maps.Marker({
      position: obj.coords,
      map: map,
      icon: obj.icon
    });

    var infoWindow = new google.maps.InfoWindow({
      content: obj.info
    });
    marker.addListener('mouseover', function() {
      infoWindow.open(map, marker);
    });
    marker.addListener('mouseout', function() {
      infoWindow.close(map,marker);
    });
  }

  //loops through our array with all the toilets and adds a marker and info window and event listener
  for (var i = 0; i < toilets.length; i++) {
    addMarker(toilets[i]);
  }
};
