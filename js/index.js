// 돋보기 버튼 제어

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.fucus();
})

// 포커스가 들어가면 .focused 추가
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})

// 포커스가 나가면 .focused 삭제
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


// 3단아코디언

const menuToggleBtn = document.querySelector('.toggleBtn');
const menuHide = document.getElementById('menu');
let isHideMenu = false;

menuToggleBtn.addEventListener("click", function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuHide.classList.add("show");
        menuToggleBtn.classList.add("active")
    }else{
        menuHide.classList.remove("show");
        menuToggleBtn.classList.remove("active")
    }
});

//1차메뉴
const toggles = document.querySelectorAll('.toggle');

function toggleAcco(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggles.length; i++){
            toggles[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggles.length; i++){
    toggles[i].addEventListener("click", toggleAcco);
};


//2차메뉴
const toggleSub = document.querySelectorAll('.toggleActive');

function toggleAccodion(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggleSub.length; i++){
            toggleSub[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggleSub.length; i++){
    toggleSub[i].addEventListener("click", toggleAccodion);
};


// --------------뱃지 제어---------------

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// document => html 태그 안에 있는 각각의 요소를 선택 할 때
// window => browser 창에 기준으로 했을 때

// lodash설치 후
// -.throttle(함수, 시간)


// gsap - scroll 관련 함수

window.addEventListener('scroll', 
   _.throttle(function(){
       if(window.scrollY > 500){
        // badgeEl.style.display = 'none'
        // gsap 문법 => gsap.to(요소,지속시간(초단위),옵션)
        gsap.to(badgeEl,0.6,{
            opacity : 0,
            display : 'none'
        });
        // 상단으로 스크롤 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            x: 0,
        });
       }else{
        gsap.to(badgeEl,0.6,{
            opacity : 1,
            display : 'block'
        });
        // badgeEl.style.display = 'block'
        // 상단으로 스크롤 버튼 숨기기
        gsap.to(toTopEl, 0.2, {
            x: 100,
        });
       }
   },300)
); //-----------------


//상단으로 스크롤 버튼 클릭하면

toTopEl.addEventListener('click' , function(){
    // 페이지 위치를 최상단으로 부드럽게 (0.7초동안) 이동,
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



// -------------------main visual 순차적 등장----------------------
const fadeEl = document.querySelectorAll('.visual .fade-in');

fadeEl.forEach(function(fadeEl, index){
    // gsap 문법 => gsap.to(요소,지속시간(초단위),옵션)
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8
        opacity : 1,
    })
})

const fadeEll = document.querySelectorAll('.m-visual .visual-fade-in');

fadeEll.forEach(function(fadeEll, index){
    // gsap 문법 => gsap.to(요소,지속시간(초단위),옵션)
    gsap.to(fadeEll, 1, {
        delay : (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8
        opacity : 1,
    })
})


// -------------------공지사항 swiper slider----------------------
const swiper = new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay : true,
  });

  const swiperr = new Swiper('.m-notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay : true,
  });


// -------------------promotion swiper slider----------------------
new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination :{
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
        360: { //320 이상일 경우
          slidesPerView: 1, //레이아웃 1열
        },
        768: {
          slidesPerView: 1, //레이아웃 3열
        },
        1160: {
          slidesPerView: 1, //레이아웃 4열
        },
      },
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true //1번 슬라이드가 가운데 보이기
});





// promotion toggle-btn
const promotionEl = document.querySelector('.promotion'); //슬라이드 영역 요소
const promotionToggleBtn = document.querySelector('.toggle-promotion') // 슬라이드 영역을 토글할 버튼 검색

// 슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false //처음엔 숨겨지지 않게

// 토글버튼을 클릭하면
promotionToggleBtn.addEventListener('click', function(){
    // 슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
});
const promotionEll = document.querySelector('.promotion'); //슬라이드 영역 요소
const promotionToggleBtns = document.querySelector('.m-toggle-promotion') // 슬라이드 영역을 토글할 버튼 검색

// 슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotions = false //처음엔 숨겨지지 않게

// 토글버튼을 클릭하면
promotionToggleBtns.addEventListener('click', function(){
    // 슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEll.classList.add('hide');
    }else {
        promotionEll.classList.remove('hide');
    }
});

// -------플로팅이미지-------
function random(min, max){
    // toFixed
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size){
    // gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
    gsap.to(selector, random(1.5,2.5),{
        y : size,
        repeat : -1, //반복 설정(-1은 옵션에서 무한반복)
        yoyo : true, //한번 재생된 애니메이션을 다시 뒤로 재생시킨다.
        ease: Power1.easeOut,
        delay : random(0, delay),
    })
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,15);


// -------AWARDS-------
const swiper1 = new Swiper('.awards .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: { //반응형 조건 속성
        320: { //320 이상일 경우
          slidesPerView: 1, //레이아웃 1열
        },
        768: {
          slidesPerView: 3, //레이아웃 3열
        },
        1200: {
          slidesPerView: 5, //레이아웃 4열
        },
      }
    // navigation : {
    //     prevEl : ".awards .swiper-prev",
    //     nextEl : ".awards .swiper-next"
    // }
  });

  // -------올해 연도 구하기-------
  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();


//  ----------- Magic Scroll ----------

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});



// 아코디언 메뉴
const main = document.querySelectorAll('.m-main');

for (let i = 0; i < main.length; i++){
    main[i].addEventListener("click", function() {
    // 다른메뉴 클릭시 기존에 열어둔 서브메뉴 비활성화
       for(let j = 0; j < main.length; j++){
        main[j].classList.remove('show');
        if (this !== main[j]) {
            main[j].nextElementSibling.style.maxHeight = null;
        }
    };
        
        
    // 메뉴 클릭시 서브메뉴 활성화
    this.classList.toggle('show');
    const sub = this.nextElementSibling;
    if(sub.style.maxHeight) {
        sub.style.maxHeight = null;
    } else {
        sub.style.maxHeight = sub.scrollHeight + "px";
    }
});
}

