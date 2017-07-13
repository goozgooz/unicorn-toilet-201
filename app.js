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

// //creating toilet objects
// var codeFellows = new Toilet({lat: 47.6164918, lng: -122.3511866}, 'Code Fellows', 4, 'images/code_fellows.png');
// var fivePoint = new Toilet({lat: 47.6181, lng: -122.3474}, 'The 5 Point Cafe', 5);
// var greenLeaf = new Toilet({lat: 47.6165258, lng: -122.349092}, 'Green Leaf Vietnamese Restaurant', 4);
//
//array to hold all of our toilets
var toilets = [sportsBar, armory, porterPotty];

//starting work on quiz
//declaring all variables needed for DOM manipulation during the quiz
var turn = 1;
var surveryArray = [];  //array we will use to narrow down based on asnwers
var unicornToilet = {};
var prompt = document.getElementById('prompt');
var questionHolder = document.getElementById('surveyArea');
var leftOption = document.getElementById('left-option');
var rightOption = document.getElementById('right-option');

//function to clear the image src after a turn is done
function clearDisplay(){
  leftOption.setAttribute('src', '');
  rightOption.setAttribute('src', '');
};

function questionOne(){
  prompt.innerHTML = 'Wait... How bad do you have to go to the bathroom??';
  leftOption.setAttribute('src', 'images/gotta-go.jpg');
  rightOption.setAttribute('src', 'images/hold-it.jpg');
}

function questionTwo(){
  prompt.innerHTML = 'Which do you prefer? Gel Hand Soap or Foamy Hand Soap?';
  leftOption.setAttribute('src', 'images/gel.jpg');
  rightOption.setAttribute('src', 'images/foam.jpg');
  var answer = event.target.id;

}

//running the first queturnstion before things get going
questionOne();

surveyArea.addEventListener('click', startQuiz);

function startQuiz(event){
  surveryArray = toilets; //making our surveryArray equal to our array of all the toilets
  //logic for our first turn
  if(turn === 1){
    event.preventDefault();
    var answer = event.target.id;   //getting id of whichever option was picked in question1
    if(answer === 'left-option'){
      unicornToilet = porterPotty;
      console.log(unicornToilet);
      turn = 5;  //change turn to 5 so the survery is over
      //code to change unicorn logo
    } else {
      event.preventDefault();
      console.log('keep going');
      clearDisplay();
      turn ++;
      console.log(turn);
    }
  } if (turn < 5){
    event.preventDefault();
    questionTwo();
    // var answer = event.target.id;   //getting id of whichever option was picked in question1
  } else {
    surveyArea.removeChild(leftOption);
    surveyArea.removeChild(rightOption);
    surveyArea.removeChild(prompt);
    console.log('survey over. time for results');
    var map = document.getElementById('map');
    map.removeAttribute('display');
  }
}

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
