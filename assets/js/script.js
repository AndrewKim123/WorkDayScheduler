$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var time = $(this).parent().attr("id")
        var text = $(this).siblings(".description").val()
        localStorage.setItem(time,text)
    })
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
    $("#9am .description").val(localStorage.getItem("9am"))
    $("#10am .description").val(localStorage.getItem("10am"))
    $("#11am .description").val(localStorage.getItem("11am"))
    $("#12am .description").val(localStorage.getItem("12am"))
    $("#13pm .description").val(localStorage.getItem("13pm"))
    $("#14pm .description").val(localStorage.getItem("14pm"))
    $("#15am .description").val(localStorage.getItem("15pm"))
    $("#16pm .description").val(localStorage.getItem("16pm"))
    $("#17pm .description").val(localStorage.getItem("17pm"))

    function color(){
        var currentTime = moment().hours()
        $(".time-block").each(function(){
            var rowTime = parseInt($(this).attr("id"))
    
            if(rowTime === currentTime){
                $(this).addClass("present")
            }

            else if(rowTime > currentTime){
                $(this).addClass("future")
            }

            else{
                $(this).addClass("past")
            }
        })

        

    }

    color();
})

