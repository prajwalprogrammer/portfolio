/*=============== SHOW SIDEBAR ===============*/

const navMenu = document.getElementById('sidebar'),
navToggle=document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
    })
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('skills__active');
        });

        if (target) {
            target.classList.add('skills__active');
        }

        tabs.forEach(t => {
            t.classList.remove('skills__active');
        });
        tab.classList.add('skills__active');
    });
});

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
const filterItems = document.querySelectorAll('.work__item');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('active-work'));
            item.classList.add('active-work');
        });
    });
// const linkWork = document.querySelectorAll('.work__item');
// function activeWork(){
//     linkWork.forEach(l=>l.classList.remove('active-work'));
//     this.classList.add('active-work');
// }
// linkWork.forEach(l=> l.addEventListener('click', activeWork()));

/*===== Work Popup =====*/
// document.addEventListener('click', (e) => {
//     if(e.target.classList.contains("work__button")){
//         togglePortfolioPopup();
//     }
// })

// function togglePortfolioPopup(){
//     document.querySelector(".portfolio__popup").classList.toggle("open");
// }

/*=============== achievements model ===============*/

const modelViews = document.querySelectorAll('.achievements__model'),
    modelBtns = document.querySelectorAll('.achievements__button'),
    modelCloses = document.querySelectorAll('.achievements__model-close');

let model = function(modelClick) {
    if (modelViews[modelClick]) {
        modelViews[modelClick].classList.add('active-model');
    }
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click',() => {
        model(i);
    });
});

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click',() => {
        modelViews.forEach((modelView) => {
            modelView.classList.remove('active-model');
        });
    });
});

modelViews.forEach((modelView) => {
    modelView.addEventListener('click', (e) => {
        if(e.target === modelView) {
            modelView.classList.remove('active-model');
        }
    });
});
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

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter()
{
    let scrollY=window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop - 50,
        sectionId=current.getAttribute("id");
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if(link) {
            if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
                link.classList.add("active-link");
            }
            else{
                link.classList.remove("active-link");
            }
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/