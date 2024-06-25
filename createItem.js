import deleteEvent from './deleteEvent'

function createItem(titleText,descText,due,priority){
    var body = document.querySelector(".to-do");
    var toDoItem = document.createElement("div");
    var top = document.createElement("div");
    var bottom = document.createElement('div');
    //title
    var title = document.createElement('h3');
    title.innerHTML  = titleText;
    top.appendChild(title);

    //due date
    var dueDate = document.createElement('p');
    dueDate.innerHTML = due;
    top.appendChild(dueDate);

    top.className = 'top'

    //description
    var desc = document.createElement("p");
    desc.innerHTML = descText;
    bottom.appendChild(desc);

    //checkbox
    var check = document.createElement("input");
    check.setAttribute("type","checkbox")
    check.className = "check"

    //delete button

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button"

    // bottom.appendChild(check)

    bottom.className = 'bottom'
    var left = document.createElement("div");
    left.appendChild(top);

    //toDoItem.appendChild(document.createElement('hr'))
    left.appendChild(bottom);
    toDoItem.appendChild(left);

    var right = document.createElement("div");
    right.appendChild(check);
    right.appendChild(deleteButton);
    toDoItem.appendChild(right);
    toDoItem.className = 'event'
    body.appendChild(toDoItem);

    deleteButton.addEventListener("click",() =>{
        body.removeChild(toDoItem)
    
    })

}

export default createItem;