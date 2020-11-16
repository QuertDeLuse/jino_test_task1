document.addEventListener('DOMContentLoaded', () => {

    //Card Description changing system 
    let cardCollection = document.querySelectorAll('.card');
    let descrCollection = document.getElementsByClassName('description');
    let activeDescrTab = document.getElementsByClassName('description_active')[0];
  

    cardCollection.forEach( (item, key ) => {
        item.addEventListener('click', () => {
            activeDescrTab.classList.remove('description_active');
            descrCollection[key].classList.add('description_active');  
            activeDescrTab = descrCollection[key];    
        });
    });





})