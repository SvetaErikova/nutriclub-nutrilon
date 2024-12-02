
function activateSliderReviews(block){
    let block_head = block.querySelector('.block--head')

    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper-button-prev');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper-button-next');
    slider_controls.append(swiper_nav_next);

    const swiper = new Swiper(block.querySelector('.block--elements'), {
      createElements: true,
      slidesPerView: 1.1,
      grabCursor: true,
      simulateTouch: true,
      freeMode: false,
      allowTouchMove: true,
      // autoHeight: true,
      spaceBetween: 8,
      mousewheel: {
        forceToAxis: true,
      },
      slideClass: 'item',
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      breakpoints: {
        675: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
    });
  block_head.append(slider_controls);
}
let block_reviews = document.querySelectorAll('.block_list-slider.content_rewiews ')
block_reviews.forEach(block =>{
  activateSliderReviews(block)
})

// slider in card product
function initProductCardsImages(block){
    let product_images = block.querySelectorAll('img')

    if (product_images.length > 0) {
      const card_product_slider = new Swiper(block, {
        createElements: true,
        slidesPerView: 1,
        grabCursor: true,
        // simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        loop: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        mousewheel: {
          forceToAxis: true,
        },
        slideClass: 'item__image_slide',
        navigation: false,
        pagination: true,
        on: {
          init: function(swiper){
            let area = document.createElement('div');
            area.classList.add('room_images_hover')
            swiper.el.appendChild(area);
            swiper.slides.forEach(sl => {
              let slide_area = document.createElement('div');
              slide_area.classList.add('room_images_hover_item')
              area.appendChild(slide_area);
            })
          }
        }
      });
      let product_images_hover_item = block.querySelectorAll('.room_images_hover_item')
      if ( window.matchMedia('(min-width:1024px)').matches ){
        product_images_hover_item.forEach((item, index )=> {
          item.addEventListener('mouseover', (e)=>{
            card_product_slider.slideTo(index)
          })
        })
      }

    }
}
let cards_show = document.querySelectorAll('.content_products .item:not(hidden) .item--image')
cards_show.forEach(card =>{
  initProductCardsImages(card)
})
// initProductCardsImages()

window.addEventListener('load', ()=>{
  let cards_hidden = document.querySelectorAll('.content_products .item.hidden .item--image')
  cards_hidden.forEach(card =>{
    initProductCardsImages(card)
  })
})



