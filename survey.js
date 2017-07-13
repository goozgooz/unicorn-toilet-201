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

function displayUnicorn(){
  var unicorn = document.getElementById('see-results');
  surveyArea.removeChild(leftOption);
  surveyArea.removeChild(rightOption);
  surveyArea.removeChild(prompt);
  unicorn.style.display = 'inline-block';
}

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
    displayUnicorn();
  }
}
