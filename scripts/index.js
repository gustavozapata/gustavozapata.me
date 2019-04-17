//WEB STORAGE - DARK THEME
var isDarkTheme = JSON.parse(localStorage.getItem("dark"));
if (typeof Storage !== "undefined") {
  if (isDarkTheme) {
    switchDark();
  }
} else {
  console.log("web storage is not supported 😔");
}

//DARK THEME
$("#theme").on("click", function() {
  if (isDarkTheme) {
    localStorage.setItem("dark", false);
    isDarkTheme = false;
    location.reload();
  } else {
    localStorage.setItem("dark", true);
    isDarkTheme = true;
    switchDark();
  }
  hamburgerToggle();
});

//VIEWPORT HEIGHT
var viewHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
//USING CSS 100VH INSTEAD
/* var viewport = document.getElementById("viewport");
viewport.style.height = viewHeight + "px"; */

//HAMBURGER MENU
$(".burger").on("click", hamburgerToggle);

function hamburgerToggle() {
  $(".burger-line")
    .eq(0)
    .toggleClass("burger-topline-open");
  $(".burger-line")
    .eq(1)
    .toggleClass("burger-middleline-open");
  $(".burger-line")
    .eq(2)
    .toggleClass("burger-bottomline-open");
  $("header").toggleClass("header-open");
}

//REFRESH
var hours = new Date().getHours();
if (hours >= 6 && hours < 12) {
  $("#refresh").html("Buenos dias ☀️");
} else if (hours >= 12 && hours < 18) {
  $("#refresh").html("Buenas tardes 🌤️");
} else {
  $("#refresh").html("Buenas noches 🌙");
}

// SLIDE IN CONTAINERS
$(window).scroll(function() {
  /* Check the location of each desired element */
  $(".container").each(function(i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object - 50) {
      $(this)
        .addClass("come-in")
        .css("opacity", "1");
    }
  });
});

//FLIP AROUND FOR INFO
$(".container").on("click", function() {
  // $(this).toggleClass("flip-container");
});

function switchDark() {
  $("#theme img").attr("src", "./images/light.png");
  $("body").css("background-color", "#232323");
  $("nav").css({
    backgroundColor: "#232323",
    borderBottomColor: "rgb(80,80,80)"
  });
  $("#shade").hide();
  $(".burger div").css("background-color", "white");
  $("nav ul li a")
    .not(".active")
    .css("color", "white");
  $("h1, h2").css("color", "white");
  $("h1").css("text-shadow", "20px 20px 15px rgba(152,152,152,0.16)");
  $(".container").css({
    backgroundColor: "#2E2E2E",
    color: "white",
    boxShadow: "2px 2px 6px black"
  });
  $("p:not(.subsection2 p)").css("color", "white");
  $(".tool-container, .platform-container").css({
    borderColor: "rgb(30,30,30)",
    boxShadow: "none"
  });
  $(".phrase-div p ").css("color", "white");
  $("footer").css({
    backgroundColor: "#232323",
    borderTopColor: "rgb(80,80,80)"
  });
  $("footer div a").css("color", "white");
}
