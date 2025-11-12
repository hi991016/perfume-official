$(".js-loading").addClass("is-show");

var time = 0;

var refreshIntervalId = setInterval(function () {
  time++;
}, 1000);

const $bg = $(".js-bg");
const $loading = $(".js-loading");
const $svgProfile = $(".js-cls-1");
const $profileScroll = $(".js-profile__scroll i");
var isModalMode = false;

if (sessionStorage.getItem("opening-displayed") === "true") {
  $bg.remove();
  $loading.remove();
}

$(window).on("pageshow load", function () {
  $("body").removeClass("fadeout");
  if (time <= 3) {
    setTimeout(function () {
      $bg.hide();
      $loading.addClass("is-hide");
      $svgProfile.addClass("is-show");
      $profileScroll.addClass("is-show");

      if ($(".c-loading").hasClass("is-hide")) {
        document.querySelector(".c-loading.is-hide").addEventListener("webkitTransitionEnd", function (event) {
          $bg.remove();
          $loading.remove();
        }, false);
      }
    }, 1500);
  } else {
    $bg.hide();
    $loading.addClass("is-hide");
    $svgProfile.addClass("is-show");
    $profileScroll.addClass("is-show");
  }
  sessionStorage.setItem("opening-displayed", !0);
  clearInterval(refreshIntervalId);
});

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function () {
  $('a:not([href^="#"]):not([target])').on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    if (url !== "") {
      idx = url.indexOf("#");
      var hash = idx != -1 ? url.substring(idx) : "";

      if ($(hash).length > 0) {
        if ($(".js-gnavi").hasClass("is-open")) {
          $(".js-gnavi").removeClass("is-open");
          recoverScrolling();
        }
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          300
        );
        return false;
      }
      $("body").addClass("fadeout");
      setTimeout(function () {
        window.location = url;
      }, 600);
    }
    return false;
  });

  const $mainvisual = $(".js-mainvisual__list");

  $mainvisual
    .on("init", function () {
      //$mainvisual.find('.slick-slide[data-slick-index="0"]').addClass('is-moving');
    })
    .slick({
      fade: true,
      autoplay: true,
      arrows: false,
      dots: false,
      accessibility: false,
      autoplaySpeed: 8000,
      speed: 2400,
      pauseOnHover: false,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var slide_num = $(".slick-slide", this).length;
      $mainvisual
        .find('.slick-slide[data-slick-index="' + (currentSlide - 1) + '"]')
        .removeClass("is-moving");
      $mainvisual
        .find('.slick-slide[data-slick-index="' + nextSlide + '"]')
        .addClass("is-moving");
      if (currentSlide == 0) {
        $mainvisual
          .find('.slick-slide[data-slick-index="' + (slide_num - 1) + '"]')
          .removeClass("is-moving");
      }
    });

  const $newslist = $(".js-mainvisual__news");

  $newslist
    .on("init", function () {
      $newslist
        .find('.slick-slide[data-slick-index="0"] .js-mainvisual__info')
        .addClass("fade-in");
    })
    .slick({
      fade: true,
      autoplay: true,
      arrows: false,
      dots: false,
      accessibility: false,
      autoplaySpeed: 4000,
      speed: 2400,
      pauseOnHover: false,
      adaptiveHeight: true,
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var slide_num = $(".slick-slide", this).length;
      $newslist
        .find(
          '.slick-slide[data-slick-index="' +
          currentSlide +
          '"] .js-mainvisual__info'
        )
        .removeClass("fade-in")
        .addClass("fade-out");
      $newslist
        .find(
          '.slick-slide[data-slick-index="' +
          nextSlide +
          '"] .js-mainvisual__info'
        )
        .addClass("fade-in");
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      $newslist.find(".js-mainvisual__info").removeClass("fade-out");
    });

  $(".js-feature-list").slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const $videoStatus = $(".js-video-slide__controller");
  const $videoSlick = $(".js-video-slide__list");

  $videoSlick
    .on(
      "init reInit afterChange beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        const i = (currentSlide ? currentSlide : 0) + 1;
        $videoStatus.text(i + " / " + slick.slideCount);
        if (
          (event.type == "init" || event.type == "reInit") &&
          $(window).scrollTop() + $(window).height() > $videoSlick.offset().top
        ) {
          const target = $videoSlick.find(
            '.slick-slide[data-slick-index="0"] .js-video-slide__video'
          );
          const videoId = target.data("id");
          target.find("#" + videoId).length === 0 &&
            target.append('<div id="' + videoId + '"></div>');
          onYouTubeIframeAPIReady(videoId);
          $(window).on("pageshow load", function () {
            onYouTubeIframeAPIReady(videoId);
          });
        }
        if (event.type == "beforeChange") {
          const target = $videoSlick.find(
            '.slick-slide[data-slick-index="' +
            nextSlide +
            '"] .js-video-slide__video'
          );
          const videoId = target.data("id");
          target.find("#" + videoId).length === 0 &&
            target.append('<div id="' + videoId + '"></div>');
          onYouTubeIframeAPIReady(videoId);
        }
      }
    )
    .slick({
      arrows: true,
      dots: false,
    });

  function onYouTubeIframeAPIReady(videoId) {
    var player;
    if (videoId && typeof YT !== "undefined") {
      player = new YT.Player(videoId, {
        height: "390",
        width: "640",
        videoId: videoId,
        playerVars: {
          modestbranding: 1,
          autohide: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          autoplay: 1,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }
    return player;
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  function lazyLoadVideoSlide() {
    const target = $videoSlick.find(".slick-current .js-video-slide__video");
    const videoId = target.data("id");
    target.find("#" + videoId).length === 0 &&
      target.append('<div id="' + videoId + '"></div>');
    onYouTubeIframeAPIReady(videoId);
  }

  const $banner = $(".js-banner__list");

  $banner.slick({
    fade: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  var scrollTemp = 0;
  var scroll = $(window).scrollTop();
  var isScrolling = false;

  setHeight();
  setHeader(scroll);
  setDownload(scroll);
  fadeAnimation(scroll);
  setSticky(scroll);

  $(window).scroll(function () {
    isScrolling = true;
    scroll = $(window).scrollTop();
    setHeader(scroll);
    setDownload(scroll);
    fadeAnimation(scroll);
    setSticky(scroll);
    // if(!isModalMode && !isUnderPC()) {
    //   scroll > 0 && scroll > scrollTemp ? $('.js-header').addClass('is-hide') : $('.js-header').removeClass('is-hide');
    // }
    scrollTemp = scroll;
    isModalMode = false;

    if (scroll > 0) {
      $(".js-profile__scroll").addClass("is-hide");
      if ($videoSlick.length > 0) lazyLoadVideoSlide();
    }
  });
  $(window).resize(function () {
    setHeight();
  });

  $(".js-download-show").click(function (e) {
    e.preventDefault();
    $(".js-download-modal").fadeIn(500);
    disableScrolling();
  });

  $(".js-download-close").click(function (e) {
    e.preventDefault();
    $(".js-download-modal").fadeOut(500);
    recoverScrolling();
  });

  $(".js-discography-show").click(function (e) {
    e.preventDefault();
    $(".js-discography-modal").fadeIn(500);
    disableScrolling();
  });

  $(".js-discography-close").click(function (e) {
    e.preventDefault();
    $(".js-discography-modal").fadeOut(500);
    recoverScrolling();
  });

  $(".js-header__button").click(function () {
    $(".js-header__button").toggleClass("is-open");
    $(".js-gnavi").toggleClass("is-show");
    if ($(".js-gnavi").hasClass("is-show")) {
      disableScrolling();
    } else {
      recoverScrolling();
    }
  });

  const $listCategory = $(".js-list__category__list");

  $(".js-list__selector").click(function () {
    $(this).toggleClass("is-open");
    $listCategory.slideToggle(300);
  });

  $(window).resize(function () {
    $(window).width() > 1024 && $listCategory.attr("style", "");
  });

  $(".js-profile__scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js-profile__content").offset().top,
      },
      1000
    );
  });
});

function setHeight() {
  const height = $(window).height();
  const downloadHeight = $(".js-download-button").height();
  // $('.js-mainvisual').outerHeight(height - downloadHeight);
  $(".js-profile__top").outerHeight(height);
  $(".js-profile__bg").outerHeight(height + 80);
}

function setHeader(scroll) {
  if ($(".js-mainvisual").length > 0) {
    const bodyPosition = $("body").css("position");
    // if(scroll < $(window).height() - 120 && bodyPosition !== 'fixed'){
    //   $('.js-header').addClass('is-white');
    // } else {
    //   $('.js-header').removeClass('is-white');
    // }
  }
}

function setDownload(scroll) {
  if ($(".js-discography-modal").length > 0) {
    $(".js-download-button").addClass("is-hide");
  } else {
    if (scroll + $(window).height() > $(".js-footer").offset().top) {
      $(".js-download-button").addClass("is-hide");
    } else {
      $(".js-download-button").removeClass("is-hide");
    }
  }
}

function setSticky(scroll) {
  const target = $(".js-sticky");
  if (target.length > 0) {
    const parentHeight = target.parent().outerHeight();
    const targetHeight = target.outerHeight();
    scroll > 0 && target.addClass("is-sticky");
    scroll + targetHeight > parentHeight
      ? target.addClass("is-stop")
      : target.removeClass("is-stop");
  }
}

function isUnderPC() {
  return $(".js-top").length <= 0 && $(window).width() > 1024;
}

function fadeAnimation(scroll) {
  const scrollBottom = scroll + $(window).height();
  $(".u-fade").each(function () {
    const top = $(this).offset().top;
    if (scrollBottom > top + 200) $(this).addClass("u-fade--in");
  });
}

function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    tagBr = false,
    typeSpeed = 0,
    tempTypeSpeed = 0;

  var type = function () {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        if (
          HTML[cursorPosition + 1] === "b" &&
          HTML[cursorPosition + 2] === "r"
        )
          tagBr = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      } else {
        tempTypeSpeed = Math.random() * typeSpeed + 25;
      }
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = Math.random() * typeSpeed + 25;
      writingTag = false;
      if (tagOpen) {
        if (tagBr) {
          t.innerHTML += tag;
          tagOpen = false;
          tagBr = false;
        } else {
          var newSpan = document.createElement("span");
          t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
        }
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };

  return {
    type: type,
  };
}

function disableScrolling() {
  isModalMode = true;
  const bodyPosition = $("body").css("position");
  bodyPosition !== "fixed" &&
    $("body").css({
      top: $(window).scrollTop() * -1,
      position: "fixed",
      width: "100%",
      "padding-right": getScrollbarWidth(),
    });
}

function recoverScrolling() {
  isModalMode = true;
  const scrollY = $("body").css("top");
  $("body").css({ top: "", position: "", width: "", "padding-right": "" });
  $(window).scrollTop(parseInt(scrollY || "0") * -1);
}

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// $(".c-mainvisual__item").each(function () {
//   var $container = $(this),
//       imgUrl = $container.find("img").prop("src");
//   if (imgUrl) {
//     $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("js-custom-object-fit");
//   }
// });
//   $(".c-profile__bg").each(function () {
//   var $container = $(this),
//       imgUrl = $container.find("img").prop("src");
//   if (imgUrl) {
//     $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("js-custom-object-fit");
//   }
// });

// click show more social
// let socialList = document.querySelectorAll(".c-gnavi__snstop > .c-gnavi__snsmore");
// let socialBtn = document.querySelectorAll(".c-gnavi__snsmore");

// let clearSocialList = function () {
//   for (let i = 0; i < socialList.length; i++) {
//     socialList[i].classList.remove("active");
//   }
// };

// for (let i = 0; i < socialList.length; i++) {
//   socialBtn[i].onclick = function () {
//     clearSocialList();
//     socialList[i].classList.add("active");
//   };
// };

/* ------------------------- SHOW MORE LINKS SCOCIAL ------------------------ */
function toggleItem(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove("active");
        } else if (current.classList.contains("active") === true) {
          current.classList.remove("active");
        } else {
          current.classList.add("active");
        }
      }
      // e.preventDefault();
    });
  }
}
toggleItem(document.querySelectorAll(".c-gnavi__snsmore"));

/* --------------------------- LIVE PAGE ACCORDION -------------------------- */
let accordion = document.getElementsByClassName("js-accordion");
let panel = document.getElementsByClassName("c-live__panel");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
    } else {
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
    }
  });
}

/* ----------------------------- SWITCH TAB LIVE ---------------------------- */
$("document").ready(function () {
  const urlItem = window.location.hash.split("#");
  if (urlItem.length == 1) {
    $("#js-2021").trigger("click");
  }
  setTimeout(function () {
    $("#js-" + urlItem[1]).trigger("click");
  }, 0);
});

const categoryLive = $(".js-menu");
categoryLive.each(function (i, e) {
  const element = categoryLive.eq(i);

  element.click(function () {
    const name = $(this).attr("href").substring(1);
    const text = $(this).text();
    const items = $(".js-" + name);

    // remove menu before -> active menu present -> add text to category mobile
    categoryLive.removeClass("is-active");
    $(this).addClass("is-active");
    $(".c-list__text").html(text);

    if ($(window).width() < 1024) {
      $(".js-list__selector").removeClass('is-open');
      $('.c-list__category__list').attr("style", "display: none");
    }

    // if this is exist is-active and numbers of items > 0
    // hidden all
    // display items by catepgory 
    // else hide all show message

    if ($(this).hasClass("is-active") && items.length > 0) {
      $(".js-items").children().fadeOut(300);

      // display items by catepgory 
      setTimeout(function () {
        window.scrollTo(0, 0);
        $(".js-" + name).fadeIn();
      }, 500);
    } else {
      $(".js-items").children().fadeOut(300);

      // show message
      setTimeout(function () {
        window.scrollTo(0, 0);
        $(".c-live__empty").fadeIn();
      }, 500);
    }
  });
});

// scroll mainphoto profile
if ($(".js-profile-overlay")) {
  const [profileOverlay, profileOffsetTop] = [
    document.querySelector("[data-profile-overlaybg]"),
    document.querySelector("[data-profile-offsettop]"),
  ];
  ["scroll", "pageshow"].forEach((evt) => {
    window.addEventListener(evt, () => {
      let cal = profileOffsetTop.offsetHeight;
      let value = 0 + window.scrollY / cal;
      value >= 0.8
        ? (profileOverlay.style.opacity = 0.8)
        : (profileOverlay.style.opacity = value);
    });
  });
}