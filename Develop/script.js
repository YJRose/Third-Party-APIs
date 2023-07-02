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

});

saveButton1.addEventListener('click',function savedescription(){

  var textE10 = document.getElementById("text10");
  textE10 = text10.value.trim();
  localStorage.setItem("text10", JSON.stringify(textE10));

});


saveButton2.addEventListener('click',function savedescription(){

  var textE11 = document.getElementById("text11");
  textE11 = text11.value.trim();
  localStorage.setItem("text11", JSON.stringify(textE11));
});

saveButton3.addEventListener('click',function savedescription(){

  var textE12 = document.getElementById("text12");
  textE12 = text11.value.trim();
  localStorage.setItem("text12", JSON.stringify(textE12));

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

});

saveButton7.addEventListener('click',function savedescription(){

  var textE16 = document.getElementById("text16");
  textE16 = text16.value.trim();
  localStorage.setItem("text16", JSON.stringify(textE16));

});

saveButton8.addEventListener('click',function savedescription(){

  var textE17 = document.getElementById("text17");
  textE17 = text17.value.trim();
  localStorage.setItem("text17", JSON.stringify(textE17));
 

});

//update time block color
function colorcodeupdate(){
  var currenthour = dayjs().format("HH");
  currenthour = parseInt(currenthour);

  for ( var i = 9; i<18; i++){
    $("#hour-" + i).css({"background-color": "#d3d3d3"});
    if ( currenthour - i == 0){
      $("#hour-" + i).css({"background-color": "#ff6961"});
    }else if ( currenthour - i < 0){
      $("#hour-" + i).css({"background-color": "#77dd77"});
    }

  }
  
};
  
colorcodeupdate();


// get data from localstorage
function append(){
var textE9L = localStorage.getElementById("text9");
document.querySelector("#text9").innerHTML = textE9L;

};
append();

