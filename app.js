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
function Toilet(rating,soap,dry,style,parking,toiletPaper){
  this.rating = rating;
  this.soap = soap;
  this.dry = dry;
  this.style = style;
  this.parking = parking;
  this.toiletPaper = toiletPaper;

function Toilet(coords, name, rating, tpQuality, drying, soap, parking, icon){
  this.coords = coords;   // {lat:    , lng:    }
  this.name = name;  //Restaurant name
  this.rating = rating;   //Overall Rating | Integer 1-5
  this.tpQuality = tpQuality; //TP Quality Rating | Integer 1-5   t
  his.drying = drying;  //‘Paper Towel’ or ‘Air Dryer’ or ‘Both’
  this.soap = soap;   // ‘Gel’ or ‘Foam’ Soap
  this.parking = parking; // ‘Free’ or ‘Pay’;   t
  his.info = ‘<h5>’ + this.name + ‘</h5> <h6>Overall Rating: ’ + this.rating + ‘</h6> <h6>TP Rating: ’ + this.tpQuality + ‘</h6><h6>Soap: ’ + this.soap + ‘</h6>’ + ‘<h6>Drying Method: ’ + this.drying + ‘</h6>’ + ‘<h6>Parking: ’ + this.parking + ‘</h6>‘;
  this.icon = icon;       //default to ‘’. will change based on survey results };  //creating toilet objects v
  var sportsBar = new Toilet({lat: 47.6196, lng: -122.3487}, ‘Sport Restaurant & Bar’, 3, 2, ‘Both’, ‘Gel’, ‘Pay’); var armory = new Toilet({lat: 47.621551, lng: -122.350939}, ‘Armory @ Seattle Center’, 4, 2, ‘Paper Towel’, ‘Gel’, ‘Pay’); var porterPotty = new Toilet({lat: 47.620699, lng: -122.353726},‘Sketch Porter Potty’, 1, 1, ‘You Wish!‘, ‘LOL’, ‘Free’);

var subway= new Toilet({lat:47.618535,lng:-122.355325},'Subway',5,3,'paper','Gel','Street');
var dominos = new Toliets({lat:47.617763,lng:-122.353710},'Dominos',1,'none','none','Pay');//this does not have a public bathroom
console.log(dominos);
var desserttan = new Toilets({lat:47.6175708,lng:-122.3533824}),'Dessert Tan',4,4,'Both','Liquad','Both';
console.log(desserttan);
var cherrycafe = new Toilets({lat:47.6026139,lng:-122.3338082},'Cherry Cafe',3,4,'Paper','Liquad','Street');
console.log(cherrycafe);

//adding questions
var questionOne = prompt("What rating should your toilet get? 1 though 5"){
  console.log(questionOne);
}
var questionTwo = prompt("What type of soap would you want?"){
  console.log(questionTwo);
}
var questionThree = prompt("How would you like to dry your hands?"){
  console.log(questionThree);
}
var questionFour = prompt("Do you want electric or manual flushing?"){
  console.log(questionFour);
}
var questionFive = prompt("What level of toilet paper do you perfer? 1 out 5"){
  console.log(questionFive);
}
var questionSix = prompt("You don't care you have to go now?!?!?"){
  console.log(questionSeven);
}
var questionSeven = prompt("Are you worried about splash back?"){
  console.log(questionSeven);
}
