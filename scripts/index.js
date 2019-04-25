//WEB STORAGE - DARK THEME
var isDarkTheme = JSON.parse(localStorage.getItem("dark"));
if (typeof Storage !== "undefined") {
  if (isDarkTheme) {
    switchDark();
  }
} else {
  console.log("web storage is not supported 😔");
}

//CONTACT FORM SENT
var urlParams = new URLSearchParams(window.location.search);
var contactParam = urlParams.get("contact");
if (contactParam) {
  alert("Thanks for msg");
  location.href = "index.html";
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
$(".container-back").on("click", function() {
  $(this).toggleClass("flip-container");
  $(this)
    .find(".inner-back")
    .toggleClass("inner-back-active");
});

//CHAT
$(".chat-header").on("click", function() {
  $(".chat").toggleClass("chat-open");
  $(".arrow").toggleClass("arrow-open");
});
$("#checkInput").on("keyup", function(e) {
  //MOVE CURSOR AS WE TYPE
  // var cursorleft = $(".cursor").position();
  // if (e.keyCode === 8 && $(this).val() !== "") {
  //   $(".cursor").css("left", cursorleft.left - 7);
  // } else {
  //   $(".cursor").css("left", cursorleft.left + 7);
  // }
  if (
    $(this)
      .val()
      .toLowerCase() === "no"
  ) {
    if (isDarkTheme) {
      $("#sendform").css("color", "white");
    } else {
      $("#sendform").css("color", "black");
    }
  } else {
    if (isDarkTheme) {
      $("#sendform").css("color", "black");
    } else {
      $("#sendform").css("color", "rgb(170, 170, 170)");
    }
  }
});
$(".chat form").on("submit", function(e) {
  if (
    $("#checkInput")
      .val()
      .toLowerCase() !== "no"
  ) {
    e.preventDefault();
  }
});

// DARK/LIGHT THEME
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
  $("p:not(.subsection2 p)").css("color", "white");

  // CONTAINERS
  $(".container").toggleClass("container-dark");
  $(".tool-container, .platform-container").toggleClass("other-container-dark");

  $(".phrase-div p ").css("color", "white");
  $("footer").css({
    backgroundColor: "#333333"
  });
  $(".line hr").css("border-color", "rgb(100,100,100)");
  $("footer div a").css("color", "rgb(180,180,180)");
  $("footer h4").css("color", "white");

  //TESTING: SWITCH THEME WITH CLASSES
  $(".light-theme-text").toggleClass("dark-theme-text");
  $(".light-theme").toggleClass("dark-theme");
}
