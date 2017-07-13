'use strict';

//object constructor
function Toilet(coords, name, rating, tpQuality, drying, soap, parking, icon){
  this.coords = coords;   // {lat:    , lng:    }
  this.name = name;
  this.rating = rating;   //Overall Rating | Integer 1-5
  this.tpQuality = tpQuality; //TP Quality Rating | Integer 1-5
  this.drying = drying;  //'Paper Towel' or 'Air Dryer' or 'Both'
  this.soap = soap;   // 'Gel' or 'Foam' Soap
  this.parking = parking; // 'Free' or 'Pay';
  this.info = '<h5>' + this.name + '</h5> <h6>Overall Rating: ' + this.rating + '</h6> <h6>TP Rating: ' + this.tpQuality + '</h6><h6>Soap: ' + this.soap + '</h6>' + '<h6>Drying Method: ' + this.drying + '</h6>' + '<h6>Parking: ' + this.parking + '</h6>';
  this.icon = icon;       //default to ''. will change based on survey results
};

var sportsBar = new Toilet({lat: 47.6196, lng: -122.3487}, 'Sport Restaurant & Bar', 3, 2, 'Both', 'Gel', 'Pay');
var armory = new Toilet({lat: 47.621551, lng: -122.350939}, 'Armory @ Seattle Center', 4, 2, 'Paper Towel', 'Gel', 'Pay');
var porterPotty = new Toilet({lat: 47.620699, lng: -122.353726},'Sketch Porter Potty', 1, 1, 'You Wish!', 'LOL', 'Free');
var plazaGaribaldi = new Toilet({lat: 47.6194, lng: -122.3556}, 'Plaza Garibaldi', 3, 2, 'Paper Towel', 'Gel', 'Pay');
var dominos = new Toilet({lat: 47.6178, lng: -122.3535}, 'Dominos', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A');
var codeFellows = new Toilet({lat: 47.6182, lng: -122.3519}, 'Code Fellows', 4, 3, 'Paper Towel', 'Foam', 'Pay', 'images/code_fellows.png');
var subway = new Toilet({lat: 47.618535, lng: -122.355325}, 'Subway', 3, 2, 'Paper Towel', 'Foam', 'Pay');
var desertTan = new Toilet({lat:47.6175708,lng:-122.3533824},'Desert Tan', 3, 4,'Both','Foam','Pay');
var cherryCafe = new Toilet({lat:47.6181642,lng:-122.3493946},'Cherry Street Coffee House', 3, 2, 'Paper Towel','Liquid','Pay');

//array to hold all of our toilets
var toilets = [sportsBar, armory, porterPotty, plazaGaribaldi, dominos, codeFellows, subway, desertTan, cherryCafe];

//place holder to find random unicorn 

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
