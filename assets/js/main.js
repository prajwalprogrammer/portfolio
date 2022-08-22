/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.target);

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('skills__active');
        })

        target.classList.add('skills__active');
        tabs.forEach(tab => {
              tab.classList.remove('skills__active');
          })
        e.target.classList.add("skills__active");

    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// /*===== Link Active Work =====*/
// const linkWork = document.querySelectorAll('.work__item');
// function activeWork(){
//     linkWork.forEach(l=>l.classList.remove('active-work'));
//     this.classList.add('active-work');
// }
// linkWork.forEach(l=> l.addEventListener('click', activeWork()));

// /*===== Work Popup =====*/
// document.addEventListener('click', (e) => {
//     if(e.target.classList.contains("work__button")){
//         togglePortfolioPopup();
//     }
// })

// function togglePortfolioPopup(){
//     document.querySelector(".portfolio__popup").classList.toggle("open");
// }

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',() => {
        modal(i)
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/

let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
