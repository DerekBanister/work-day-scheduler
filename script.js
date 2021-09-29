//Steps to complete

//First i need to display time and date in the jumbotron on page load
//Using moment and the id of currentDay
var today = moment();

$("#currentDay").text(today.format("MMMM Do, YYYY"));
$("#timeToday").text(today.format("h:mm a"));
//Give button onclick that runs a function that saves the input text and
//adds to local storage.

$(".saveBtn").on("click", function(){
    //creating variables that match my html and setting them to local storage
    var text = $(this).parent(".textSave").val();
    var time = $(this).parent().attr("id");
    //console.log(this); 
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("text", JSON.stringify(text));

    localStorage.getItem("time");
    localStorage.getItem("text");
})
//Then I need to setup the timeblocks/colors for current time, possibly using
//moment aswell. if else statements possibly that use the current hour vs
//the time stated in the block and if it is past that time to give it a class
//or remove a class that colors the field.