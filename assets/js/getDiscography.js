$(document).ready(function() {
  var discography = {
    target: $('.js-discography-list'),
    page: 2,
    isLoading: false,
    isLast: false,
    load: function() {
      if(!discography.isLoading && !discography.isLast) {
        discography.isLoading = true;

        var jname = "c0_page";
        if ( disco_cid != "")
           jname = "c" + disco_cid + "_page";
 
        $.ajax({
          url: '../data/discography/' + jname + discography.page + '.json',
          dataType: 'json',
          success: function(data) {
            var items = '';
            data.items.forEach(function(val) {
              var item = `<div class="c-discography-list__item u-fade">
                <a href="${val.url}">
                  <div class="c-discography-list__thumbnail">
                    <img src="${val.image}" alt="">
                  </div>
                  <div class="c-discography-list__info">
                    <div class="c-discography-list__type">${val.type}</div>
                    <div class="c-discography-list__name">
                      <div class="c-discography-list__subtitle">${val.subtitle}</div>
                      <div class="c-discography-list__title">${val.title}</div>
                    </div>
                    <div class="c-discography-list__detail">Detail</div>
                  </div>
                </a>
              </div>`;
              items+=item;
            })
            discography.target.append(items);
            discography.isLoading = false;
            discography.page++;
            if(data.last) discography.isLast = true;
          },
          error: function(error){
            console.log(error);
          }
        })
      }
    }
  }

  $(window).scroll(function() {
    if(discography.target.length > 0){
      if($(window).scrollTop() + $(window).height() > discography.target.offset().top + discography.target.height()){
        discography.load();
      }
    }
  })
})