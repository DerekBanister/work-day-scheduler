
//First i need to display time and date in the jumbotron on page load
//Using moment and the id of currentDay
var today = moment();

$(document).ready(function () {
    $(".currentDay").text(today.format('MMMM DD, YYYY'));

    function displayTime() {
        let todayOnInterval = moment();
        let timeNow = todayOnInterval.format('h:mm:ss a');
        $(".timeToday").text(timeNow);
    }
    setInterval(displayTime, 500);

    //Give button onclick that runs a function that saves the input text and
    //adds to local storage.

    $(".hourBlock").each(function (i, e) {
        console.log(i)
        console.log(e)
        console.log(this); 
        const parent = $(this).children()[2];
        $(parent).children().on("click", function (event) {

            event.preventDefault();
            var text = $(".textSave").val();

            localStorage.setItem(("text-" + i++), text);

        })
    })
    $("#hour9 .textSave").val(localStorage.getItem("text-0"))
    $("#hour10 .textSave").val(localStorage.getItem("text-1"))
    $("#hour11 .textSave").val(localStorage.getItem("text-2"))
    $("#hour12 .textSave").val(localStorage.getItem("text-3"))
    $("#hour1 .textSave").val(localStorage.getItem("text-4"))
    $("#hour2 .textSave").val(localStorage.getItem("text-5"))
    $("#hour3 .textSave").val(localStorage.getItem("text-6"))
    $("#hour4 .textSave").val(localStorage.getItem("text-7"))
    $("#hour5 .textSave").val(localStorage.getItem("text-8"))
    

})
// var person = {
//     name: "Derek",
//     getName: function() {
//         console.log(this.name) // return "Derek"
//     },
//     footballStats: {
//         tds: 10000000,
//         yardsPassed: 999999999999,
//         getTds: function () {
//             console.log(this.tds)
//         }
//     }
// }

// $(".saveBtn").on("click", function (event) {

//     event.preventDefault();
//     var text = $(".textSave").val();

//     //console.log(text); 
//     localStorage.setItem("text", text);

// })




// let text = "string"


//Then I need to setup the timeblocks/colors for current time, possibly using
//moment aswell. if else statements possibly that use the current hour vs
//the time stated in the block and if it is past that time to give it a class
//or remove a class that colors the field.