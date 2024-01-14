let burger = document.querySelector('.burger');
let header = document.querySelector('.header');
burger.addEventListener('click',function (){
    burger.classList.toggle('active');
    header.classList.toggle('active');
})

let anchor = document.querySelectorAll('a[href^="#"]');
anchor.forEach( link => {
  link.addEventListener('click',function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 70;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy( {
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
const mainSlider = new Swiper('.main-slider', {
    direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.slider-main-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-button',
    },
  });
  const newsSlider = new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    breakpoints: {
      10: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      }
    },
    pagination: {
      el: '.slider-news-pagination',
    },
  
    navigation: {
      nextEl: '.slider-news-button-next',
      prevEl: '.slider-news-button-prev',
    },
  
    
  });
  Fancybox.bind('[data-fancybox="gallery"]', {
    Hash: true,
    Thumbs: true,

    compact: true,

    contentClick: "toggleCover",
    wheel : "slide",

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },

    Images: {
      Panzoom: {
        panMode: "mousemove",
        mouseMoveFactor: 1.1,
        mouseMoveFriction: 0.12
      },
    },
    });
    // read more button gallery
    $('.items').readmore({
      speed: 75,
      collapsedHeight: 190,
      moreLink: '<a class="more" href="#">See more</a>',
      lessLink: '<a class="more" href="#">Close</a>',
    });
    //projects read more
    $(document).ready(function() {
      $('.title a.more').on('click', function(e) {
          e.preventDefault();
          $('.photos').toggleClass('expanded');
  
        
          let linkText = $('.photos').hasClass('expanded') ? 'Close' :'MORE DETAILS';
          $(this).text(linkText);
      });
  });
  // map
  let map;
  function initMap() {
   map = new google.maps.Map(document.getElementById("map"), { 
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5,
    mapId: '2f084b4895741534',
   });

   const marker = new google.maps.Marker ({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    icon: 'img/marker-map.png',
    title:'Monticello,'
   });
  }
  window.initMap = initMap;
  // form validate
  $(".contacts-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
    }
  });