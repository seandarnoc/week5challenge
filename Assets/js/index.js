//using momentjs to create an object that will have the current day of the week and calendar date
var formattedDate = moment().format("dddd, MMM DD, YYYY");

//displays the current day and date in the UI
$("#current-day").text(formattedDate);

$(document).ready(function () {
    //click event when the save button is clicked
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //local storage of calendar inputs by hour of the day
        localStorage.setItem(time,text);
    })

    function timeTracker () {
        //calls for the current hour of the day (1 thru 24)
        var currentTime =  moment().hour();
        //loops over each calendar hour block
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            //then checks the current time to determine the color of each description text box
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                
            } else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("current");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    //append info from local storage to the UI
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
        
})



