import "jquery";

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
    ),

    $("#home").click( function(){
        var $page = $("#mainpage");
        $page.removeClass('invisible');
        $("#home").removeClass("nav-item")
        $("#home").addClass("nav-item active")
        $("#pokemon").removeClass("nav-item active")
        $("#pokemon").addClass("nav-item")
        $("#pokemon-page").removeClass("visible")
    }
    ),

    // Shows the error page.
    function renderErrorPage() {
      $('.error').addClass('visible');
    }

    let requestURL = 'https://pokeapi.co/api/v2/pokemon/ditto/';
    fetch(requestURL)
        .then(response => response.json())
        .then((data) => {
            $("#myimage").attr("src", data.sprites.front_default);
            $("#pokename").text(data.name);
            console.log(data.sprites.front_default)
        });  
});
    

  