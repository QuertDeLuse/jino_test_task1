document.addEventListener('DOMContentLoaded', () => {

    //Card Description changing system 
    let cardCollection = document.querySelectorAll('.card');
    let descrCollection = document.getElementsByClassName('description');
    let activeDescrTab = document.getElementsByClassName('description_active')[0];


    cardCollection.forEach((item, key) => {
        item.addEventListener('click', () => {
            activeDescrTab.classList.remove('description_active');
            descrCollection[key].classList.add('description_active');
            activeDescrTab = descrCollection[key];
        });
    });


    //Navigtaion system

    //On dot click 
    let navDots = document.querySelectorAll('.navigtaion__dot');
    let activeNavDot = navDots[0];

    navDots.forEach((item, key) => {
        item.addEventListener('click', () => {
            activeNavDot.classList.remove('navigtaion__dot_active');
            item.classList.add('navigtaion__dot_active');
            activeNavDot = item;


        })
    })


    //On scrolling active dot changing system
    let sections = document.querySelectorAll('.forNav');

    window.addEventListener('scroll', function () {
        let firstSectionHeightOffset = sections[0].clientHeight / 2;
        let secSectionHeightOffset = sections[1].clientHeight / 2;
        let thirdtSectionHeightOffset = sections[2].clientHeight / 2;

        if (sections[1].getBoundingClientRect().top > firstSectionHeightOffset) {
            activeNavDot.classList.remove('navigtaion__dot_active');
            navDots[0].classList.add('navigtaion__dot_active');
            activeNavDot = navDots[0];

        } 
        if ((sections[2].getBoundingClientRect().top > secSectionHeightOffset) && (sections[1].getBoundingClientRect().top <= secSectionHeightOffset)) {
            activeNavDot.classList.remove('navigtaion__dot_active');
            navDots[1].classList.add('navigtaion__dot_active');
            activeNavDot = navDots[1];

        } 
        if (sections[2].getBoundingClientRect().top <= thirdtSectionHeightOffset) {
            activeNavDot.classList.remove('navigtaion__dot_active');
            navDots[2].classList.add('navigtaion__dot_active');
            activeNavDot = navDots[2];
        }
    });


    //Domen Checker

    let domentInput = document.getElementById('DomentInput'); 
    let domenName = document.getElementById('DomenName');
    let alert_free = document.getElementsByClassName('domen-checker__alert_free')[0];
    let form = document.getElementById('Form');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();   

        if (domentInput.value != '') {
            try {
                let alertActive = document.getElementsByClassName('alert-active')[0];
                alertActive.classList.remove('alert-active');
            } catch {}            
            
            domenName.innerText = domentInput.value;           

            alert_free.classList.add('alert-active');         
        }
    }) 


})