//First i need to display time and date in the jumbotron on page load
//Using moment and the id of currentDay


$(document).ready(function () {
    
    var now = new Date().getHours();
    var today = moment();
    console.log(now)
    $(".currentDay").text(today.format('MMMM DD, YYYY'));

    function displayTime() {
        let today = moment();
        let timeNow = today.format('h:mm:ss a');
        $(".timeToday").text(timeNow);
    }
    setInterval(displayTime, 500);

    //Give button onclick that runs a function that saves the input text and
    //adds to local storage.
    //still an issue with local storage here
    $(".hourBlock").each(function (i, e) {
        //console.log(i)
        //console.log(e)
        //console.log(this); 
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
    //Then I need to setup the timeblocks/colors for current time, possibly using
//moment aswell. if else statements possibly that use the current hour vs
//the time stated in the block and if it is past that time to give it a class
//or remove a class that colors the field.
    function colorBlocks() {
        //console.log(now)
        if (now > 9) {
          $("#9am").addClass("past");
        } else if (now >= 9 && now < 10) {
          $("#9am").addClass("present");
        } else if (now < 9) {
          $("#9am").addClass("future");
        }
        if (now > 10) {
          $("#10am").addClass("past");
        } else if (now >= 10 && now < 11) {
          $("#10am").addClass("present");
        } else if (now < 10) {
          $("#10am").addClass("future");
        }
        if (now > 11) {
          $("#11am").addClass("past");
        } else if (now >= 11 && now < 12) {
          $("#11am").addClass("present");
        } else if (now < 11) {
          $("#11am").addClass("future");
        }
        if (now > 12) {
          $("#12pm").addClass("past");
        } else if (now >= 12 && now < 13) {
          $("#12pm").addClass("present");
        } else if (now < 12) {
          $("#12pm").addClass("future");
        }
        if (now > 13) {
          $("#1pm").addClass("past");
        } else if (now >= 13 && now < 14) {
          $("#1pm").addClass("present");
        } else if (now < 13) {
          $("#1pm").addClass("future");
        }
        if (now > 14) {
          $("#2pm").addClass("past");
        } else if (now >= 14 && now < 15) {
          $("#2pm").addClass("present");
        } else if (now < 14) {
          $("#2pm").addClass("future");
        }
        if (now > 15) {
          $("#3pm").addClass("past");
        } else if (now >= 15 && now < 16) {
          $("#3pm").addClass("present");
        } else if (now < 15) {
          $("#3pm").addClass("future");
        }
        if (now > 16) {
          $("#4pm").addClass("past");
        } else if (now >= 16 && now < 17) {
          $("#4pm").addClass("present");
        } else if (now < 16) {
          $("#4pm").addClass("future");
        }
        if (now > 17) {
          $("#5pm").addClass("past");
        } else if (now >= 17 && now < 18) {
          $("#5pm").addClass("present");
        } else if (now < 17) {
          $("#5pm").addClass("future");
        }
      }

colorBlocks();
})
