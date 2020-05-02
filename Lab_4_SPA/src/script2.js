$(function () {

    $("#pokemon").click( function(){
        // alert("pokemon");
        var $page = $("#mainpage");
        $page.addClass('invisible');
        $("#pokemon").removeClass("nav-item")
        $("#pokemon").addClass("nav-item active")
        $("#home").removeClass("nav-item active")
        $("#home").addClass("nav-item")
        $("#pokemon-page").addClass("visible")
    }
    )
});
    

  