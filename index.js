import createItem from './createItem'
import addEvent from './addEvent'
import deleteEvent  from './deleteEvent';

var addButton =  document.querySelector(".add-event-button");

addButton.addEventListener("click",() =>{
    addEvent();        
})

// var checkButton = document.querySelectorAll(".check")

// checkButton.addEventListener("click",() =>{
//     var bottom = checkbutton.parentElement;
//     var event = bottom.parentElement;
//     deleteEvent(event);


// })


 