// var hamburger = document.getElementsByClassName('js-hamburger-menu')[0]
// writer_start
const typewriter = (param) => {
  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");

  string.forEach((char, index) => {
      setTimeout(() => {
          el.textContent += char;
      }, speed * index);
  });
};

typewriter({
  el: "#typewriter",
  speed: 120,
  string:"セリーナ\nクリエイティブ\nストア",
});
// writer_end
function hamburger(){
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
  document.getElementsByClassName('chars')[0].classList.toggle('closemenu');
  // ここ
  document.getElementsByTagName('body')[0].classList.toggle('openHamburger');
}

document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );
// hamburger.addEventListener('click', function(){
//   console.log('open')
//   var open = document.getElementsByClassName('js-open')[0]
//   open.classList.toggle('is-active')
// })

displaySwiper();
window.addEventListener('resize', function(){
  // resizeは画面幅が変わるたびに呼ばれるので、画面の状態を変更する処理を入れすぎると処理が重くなる
  displaySwiper();
});

function displaySwiper(){
  var slidesPerViews = 3;
  
  if(window.matchMedia('(max-width: 460px)').matches) {
    slidesPerViews = 1
  }

  new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: slidesPerViews,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
