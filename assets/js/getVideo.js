$(document).ready(function() {
  var video = {
    target: $('.js-video-list'),
    page: 2,
    isLoading: false,
    isLast: false,
    load: function() {
      if(!video.isLoading && !video.isLast) {
        video.isLoading = true;
        $.ajax({
          url: '../data/video/page' + video.page + '.json',
          dataType: 'json',
          success: function(data) {
            var items = '';
            data.items.forEach(function(val) {
              var item = `<div class="c-video-list__item u-fade js-video-list__item">
              <div class="c-video-list__overlay"><div class="c-video-list__play"><span>▲</span></div></div>
              <img class="c-video-list__thumbnail" src="https://img.youtube.com/vi/${val.id}/hqdefault.jpg" alt="">
              <div id="${val.id}" class="c-video-list__video js-video-list__video">
              </div>
              <div class="c-video-list__info">
                ${val.title}
              </div>
            </div>`;
              items+=item;
            })
            video.target.append(items);
            video.isLoading = false;
            video.page++;
            if(data.last) video.isLast = true;
            $('.js-video-list__item').click(openVideo)
          },
          error: function(error){
            console.log(error);
          }
        })
      }
    }
  }

  $(window).scroll(function() {
    if(video.target.length > 0){
      if($(window).scrollTop() + $(window).height() > video.target.offset().top + video.target.height()){
        video.load();
      }
    }
  })

  $('.js-video-list__item').click(openVideo)

  function openVideo() {
    $('.js-video-list__item').removeClass('is-playing');
    $('.js-video-list__item').each(function() {
      var target = $(this).find('iframe');
      if(target.length > 0){
        var id = target.attr('id');
        target.remove();
        $(this).append('<div id="'+id+'" class="c-video-list__video js-video-list__video"></div>');
      }
    })
    $(this).addClass('is-playing')
    var target = $(this).find('.js-video-list__video').attr('id');
    var player = new YT.Player(target, {
      height: '390',
      width: '640',
      videoId: target,
      playerVars: {
        loop: 1,
        playlist: target,
      },
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }
})