'use strict';
//
// //object constructor
// function Toilet(coords, name, rating, icon){
//   this.coords = coords;
//   this.name = name;
//   this.rating = rating;
//   this.icon = icon;
//   this.info = '<h5>' + this.name + '</h5> <h6>Overall Rating: ' + this.rating + '</h6>';
// };
//
// //creating toilet objects
// var codeFellows = new Toilet({lat: 47.6164918, lng: -122.3511866}, 'Code Fellows', 4, 'images/code_fellows.png');
// var fivePoint = new Toilet({lat: 47.6181, lng: -122.3474}, 'The 5 Point Cafe', 5);
// var greenLeaf = new Toilet({lat: 47.6165258, lng: -122.349092}, 'Green Leaf Vietnamese Restaurant', 4);
//
// //array to hold all of our toilets
// var toilets = [codeFellows, fivePoint, greenLeaf];
//
// //initializing google map
// function initMap() {
//   var coords = {lat: 47.6164918, lng: -122.3511866};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: coords
//   });
//
//   //following lines of code creates a marker then gives that marker an info window and a event listener
//   function addMarker(obj){
//     var marker = new google.maps.Marker({
//       position: obj.coords,
//       map: map,
//       icon: obj.icon
//     });
//
//     var infoWindow = new google.maps.InfoWindow({
//       content: obj.info
//     });
//     marker.addListener('mouseover', function() {
//       infoWindow.open(map, marker);
//     });
//     marker.addListener('mouseout', function() {
//       infoWindow.close(map,marker);
//     });
//   }
//
//   //loops through our array with all the toilets and adds a marker and info window and event listener
//   for (var i = 0; i < toilets.length; i++) {
//     addMarker(toilets[i]);
//   }
// };
function Toilet(overall, toiletPaper, soap, dry, style, parking, ){
  this.overall = overall; //Integer 1-5
  this.toiletPaper = toiletPaper; //Integer 1-5
  this.soap = soap; //String 'foam' or 'gel'
  this.dry = dry;
  this.style = style;
  this.parking = parking;
}
