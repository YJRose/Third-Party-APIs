// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var saveButton0 = document.querySelector("#hour-9 .saveBtn");
var saveButton1 = document.querySelector("#hour-10 .saveBtn");
var saveButton2 = document.querySelector("#hour-11 .saveBtn");
var saveButton3 = document.querySelector("#hour-12 .saveBtn");
var saveButton4 = document.querySelector("#hour-13 .saveBtn");
var saveButton5 = document.querySelector("#hour-14 .saveBtn");
var saveButton6 = document.querySelector("#hour-15 .saveBtn");
var saveButton7 = document.querySelector("#hour-16 .saveBtn");
var saveButton8 = document.querySelector("#hour-17 .saveBtn");


// add current date in the page
  var timeDisplay = dayjs().format("dddd MMM D, YYYY"); 
  $('#currentDay').text(timeDisplay);
  $('#currentDay').css({'font-weight':'bold'});

  

saveButton0.addEventListener('click',function savedescription(){

  var textE9 = document.getElementById("text9");
  textE9 = text9.value.trim();
  localStorage.setItem("text9", JSON.stringify(textE9));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 9 == 0){

    $('#hour-9').css("background-color", "#ff6961");
  
  }else if(currenthour - 9 <= 0) {
  
    $('#hour-9').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-9').css("backgroud-color", "#d3d3d3");
  
  }
});

saveButton1.addEventListener('click',function savedescription(){

  var textE10 = document.getElementById("text10");
  textE10 = text10.value.trim();
  localStorage.setItem("text10", JSON.stringify(textE10));
  test();
});


saveButton2.addEventListener('click',function savedescription(){

  var textE11 = document.getElementById("text11");
  textE11 = text11.value.trim();
  localStorage.setItem("text11", JSON.stringify(textE11));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 11 == 0){

    $('#hour-11').css("background-color", "#ff6961");
  
  }else if(currenthour - 11 <= 0) {
  
    $('#hour-11').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-11').css("backgroud-color", "#d3d3d3");
  
  }});

saveButton3.addEventListener('click',function savedescription(){

  var textE12 = document.getElementById("text12");
  textE12 = text11.value.trim();
  localStorage.setItem("text12", JSON.stringify(textE12));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 12 == 0){

    $('#hour-12').css("background-color", "#ff6961");
  
  }else if(currenthour - 12 <= 0) {
  
    $('#hour-12').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-12').css("backgroud-color", "#d3d3d3");
  
  }
});

saveButton4.addEventListener('click',function savedescription(){

  var textE13 = document.getElementById("text13");
  textE13 = text13.value.trim();
  localStorage.setItem("text13", JSON.stringify(textE13));

});

saveButton5.addEventListener('click',function savedescription(){

  var textE14 = document.getElementById("text14");
  textE14 = text14.value.trim();
  localStorage.setItem("text14", JSON.stringify(textE14));

});

saveButton6.addEventListener('click',function savedescription(){

  var textE15 = document.getElementById("text15");
  textE15 = text15.value.trim();
  localStorage.setItem("text15", JSON.stringify(textE15));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 15 == 0){

    $('#hour-15').css("background-color", "#ff6961");
  
  }else if(currenthour - 15 <= 0) {
  
    $('#hour-15').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-15').css("backgroud-color", "#d3d3d3");
  
  }
});

saveButton7.addEventListener('click',function savedescription(){

  var textE16 = document.getElementById("text16");
  textE16 = text16.value.trim();
  localStorage.setItem("text16", JSON.stringify(textE16));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 16 == 0){

    $('#hour-16').css("background-color", "#ff6961");
  
  }else if(currenthour - 16 <= 0) {
  
    $('#hour-16').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-16').css("backgroud-color", "#d3d3d3");
  
  }
});

saveButton8.addEventListener('click',function savedescription(){

  var textE17 = document.getElementById("text17");
  textE17 = text17.value.trim();
  localStorage.setItem("text17", JSON.stringify(textE17));
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 17 == 0){

    $('#hour-17').css("background-color", "#ff6961");
  
  }else if(currenthour - 17 <= 0) {
  
    $('#hour-17').css("backgroud-color", "#77dd77");
  
  }else{
  
    $('#hour-17').css("backgroud-color", "#d3d3d3");
  
  }
});

function test(){
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);
  if (currenthour - 13 == 0){
  
    $('#hour-14').css("background-color", "#ff6961");
  
  }else if(currenthour - 13 > 0) {
  
    $('#hour-14').css("backgroud-color", "blue");
  
  }else{
  
    $('#hour-14').css("backgroud-color", "#d3d3d3");
  
  }};
  
  test();


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


