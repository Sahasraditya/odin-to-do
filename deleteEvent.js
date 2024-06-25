function deleteEvent(event){
    var checkButton = document.querySelector(".check");
    var toDo = document.querySelector(".to-do");
    checkButton.addEventListener("click",() =>{
        toDo.removeChild(event)

    })
}

export default deleteEvent;