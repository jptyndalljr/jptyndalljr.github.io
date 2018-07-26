// Controls
var isFancy = false;
var cardToggled = false;
var isFirstVisit = true;

// Hover effect for party button
$(function(){
  $("#party-button").mouseenter(function(){
    var color = randomColor();
    $(this).animate({borderColor: color, color: color});
  }).mouseleave(function(){
    $(this).animate({borderColor: "#bbb", color: "black"});
  });
});

// Party button click handler
$(function(){
  $("#party-button").click(function(){
    partyTime();
  });
})

// Business button click handler
if($("#business-button").hasClass("active")) {
  console.log("busness");
}

// Hover effect for business button
$(function(){
  $("#business-button").mouseenter(function(){
    $(this).animate({backgroundColor: "black", color: "white"});
  }).mouseleave(function(){
    $(this).animate({backgroundColor: "#bbb", color: "black"});
  });
});

$(function(){
  $("#business-button").click(function(){
    workHours();
  });
})

$(document).ready(function(){
    $(".card").mouseenter(function(){
        $(this).css({
          borderColor: randomColor()
        }).animate({
          borderWidth: "1px",
          boxShadow: "5px 10px 5px #888",
          top: 3
        });
    }).mouseleave(function() {
      $(this).animate({
        borderWidth: "0px",
        boxShadow: "0px 0px 0px",
        top: 0
      });
    });
});

// Close button click handler

$(function(){
  $(".close-button").click(function(){
    $('html, body').animate({
      scrollTop: $("#cards").offset().top
    }, 1000);
  });
});

// Matt
$(function(){
  $("#card_matt").mouseenter(function(){
    $('#icon_matt').attr('src', '/images/matt.gif');
  });
  $("#card_matt").mouseleave(function(){
    $('#icon_matt').attr('src', '/images/matt_still.png');
  });
});

$(function(){
  $("#card_matt").click(function(){
    // toggleMatt();
    $('.more-text').fadeOut();
    toDesc(".desc-matt");
  });
});

function hideDesc() {
  $(".desc-anna").hide();
  $(".desc-jackie").hide();
  $(".desc-austin").hide();
  $(".desc-jp").hide();
  $(".desc-carly").hide();
  $(".desc-matt").hide();
}

function toDesc(i) {
  hideDesc();
  $('html, body').animate({
    scrollTop: $("#desc").offset().top
  }, 1000);
  $(".arrow_box").delay(100).animate({
    opacity: '1'
  }, "slow");
  $(i).show();
  $(".arrow_box").css({ padding: '2em' });
}

function toggleMatt() {
  if(!cardToggled) {
    $("#card_anna").fadeOut();
    $("#card_jackie").fadeOut();
    $("#card_austin").fadeOut();
    $("#card_jp").fadeOut();
    $("#card_carly").fadeOut();
    $("#card_matt").animate({
      width: "100%"
    });
    $(".icon").animate({ width: "40%" });
    $(".bio-text").fadeIn();
    cardToggled = true;
  }
  else {
    $("#card_anna").fadeIn();
    $("#card_jackie").fadeIn();
    $("#card_austin").fadeIn();
    $("#card_jp").fadeIn();
    $("#card_carly").fadeIn();
    $(".bio-text").hide();
    $(".icon").animate({ width: "80%" });
    $("#card_matt").animate({
      width: "30%"
    });
    cardToggled = false;
  }
}

// Anna
$(function(){
  $("#card_anna").mouseenter(function(){
    $("#icon_anna").attr('src', '/images/anna.gif');
  });
  $("#card_anna").mouseleave(function(){
    $("#icon_anna").attr('src', '/images/anna_still.png');
  });
});

$(function(){
  $("#card_anna").click(function(){
    // toggleAnna();
    $('.more-text').fadeOut();
    toDesc(".desc-anna");
  });
});

function toggleAnna() {
  if(!cardToggled) {
    $("#card_matt").hide();
    $("#card_jackie").hide();
    $("#card_austin").hide();
    $("#card_jp").hide();
    $("#card_carly").hide();
    $("#card_anna").animate({
      width: "100%"
    });
    $(".icon").animate({ width: "40%" });
    $(".bio-text").fadeIn();
    cardToggled = true;
  }
  else {
    $(".bio-text").hide();
    $(".icon").animate({ width: "80%" });
    $("#card_anna").animate({
      width: "30%"
    });
    $("#card_matt").fadeIn();
    $("#card_jackie").fadeIn();
    $("#card_austin").fadeIn();
    $("#card_jp").fadeIn();
    $("#card_carly").fadeIn();
    cardToggled = false;
  }
}

// Jackie
$(function(){
  $(function(){
    $("#card_jackie").mouseenter(function(){
      $("#icon_jackie").attr('src', '/images/jackie.gif');
    });
    $("#card_jackie").mouseleave(function(){
      $("#icon_jackie").attr('src', '/images/jackie_still.png');
    });
  });

  $("#card_jackie").click(function(){
    // toggleJackie();
    $('.more-text').fadeOut();
    toDesc(".desc-jackie");
  });
});

function toggleJackie() {
  if(!cardToggled) {
    $("#card_matt").hide();
    $("#card_anna").hide();
    $("#card_austin").hide();
    $("#card_jp").hide();
    $("#card_carly").hide();
    $("#card_jackie").animate({
      width: "100%"
    });
    $(".icon").animate({ width: "40%" });
    $(".bio-text").fadeIn();
    cardToggled = true;
  }
  else {
    $(".bio-text").hide();
    $(".icon").animate({ width: "80%" });
    $("#card_jackie").animate({
      width: "30%"
    });
    $("#card_matt").fadeIn();
    $("#card_anna").fadeIn();
    $("#card_austin").fadeIn();
    $("#card_jp").fadeIn();
    $("#card_carly").fadeIn();
    cardToggled = false;
  }
}

// Austin
$(function(){
  $("#card_austin").mouseenter(function(){
    $("#icon_austin").attr('src', '/images/austin.gif');
  });
  $("#card_austin").mouseleave(function(){
    $("#icon_austin").attr('src', '/images/austin_still.png');
  });
});

$(function(){
  $("#card_austin").click(function(){
    // toggleJackie();
    $('.more-text').fadeOut();
    toDesc(".desc-austin");
  });
});

// JP
$(function(){
  $("#card_jp").mouseenter(function(){
    $("#icon_jp").attr('src', '/images/jp.gif');
  });
  $("#card_jp").mouseleave(function(){
    $("#icon_jp").attr('src', '/images/jp_still.png');
  });
});

$(function(){
  $("#card_jp").click(function(){
    // toggleJackie();
    $('.more-text').fadeOut();
    toDesc(".desc-jp");
  });
});

// Carly
$(function(){
  $("#card_carly").mouseenter(function(){
    $("#icon_carly").attr('src', '/images/carly.gif');
  });
  $("#card_carly").mouseleave(function(){
    $("#icon_carly").attr('src', '/images/carly_still.png');
  });
});

$(function(){
  $("#card_carly").click(function(){
    // toggleJackie();
    $('.more-text').fadeOut();
    toDesc(".desc-carly");
  });
});

// $(function(){
//   $('.icon').mouseenter(function(){
//     $(this).freezeframe();
//   });
// });

$(function(){
  $('.expand-text').click(function(){
    $('.more-text').fadeIn();
  });
});

if(!isFirstVisit) {
  $("html").css({background: "#fff"})
}

$(function(){
  $("#call").mouseenter(function(){
    var arrow = $(".arrow");
    $('#call').animate({borderColor: randomColor()});
    arrow.animate({paddingTop: '1rem'});
    arrow.animate({paddingTop: '0'});
  }).mouseleave(function(){
    $('#call').animate({borderColor: "#bbb"});
  });
});

$(function(){
  $("#call").click(function(){
    $('.header').animate({
      paddingTop: '0'
    }, 800);
    $('.cta').fadeOut();
    $('.cards').fadeIn();
    $('.footer').fadeIn();
    // $('html, body').animate({
    //   scrollTop: $("#cards").offset().top
    // }, 1000);
  })
})

function randomColor() {
  var r = Math.floor(Math.random() * 200) + 57;
  var g = Math.floor(Math.random() * 200) + 57;
  var b = Math.floor(Math.random() * 200) + 57;
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}

function partyTime() {
  console.log("partay!");
  $("#business-button").removeClass("active");
  $("#party-button").addClass("active");
  $(".header h2").css({background: "#fff"});
  $(".header h4").css({background: "#fff"});
  $("html").css({background: "url(https://media.giphy.com/media/KvJQ4pC09Gw5a/giphy.gif)"});
  $('.card').addClass("rainbow");
}

function workHours() {
  console.log("back to work!");
  $("#party-button").removeClass("active");
  $("#business-button").addClass("active");
  $("html").css({background: "#fff"});
  $('.card').removeClass("rainbow");
}
