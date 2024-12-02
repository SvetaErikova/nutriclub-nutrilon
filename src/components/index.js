
function videoPlay(block){
  block.addEventListener('click', (e)=>{
    let video = block.querySelector('video')
    if(e.currentTarget === block){
      if (!video.paused){
        block.classList.remove('is_playing')
        video.pause()
      } else {
        block.classList.add('is_playing')
        video.play()
      }
    } else{
      block.classList.remove('is_playing')
      video.pause()
    }
  })
}
let block_reviews_cards = document.querySelectorAll('.content_rewiews .review-video')
block_reviews_cards.forEach(card =>{
  videoPlay(card)
})
let block_video = document.querySelector('.content_video .video')
videoPlay(block_video)





