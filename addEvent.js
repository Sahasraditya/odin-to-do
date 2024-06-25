import createItem from './createItem'

function addEvent(){
    document.querySelector(".add-event-button").disabled = true;
    // Create a new form element
    var form = document.createElement('form');
    // Create labels and input fields for Title, Description, and Due Date
    var titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    var titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleLabel.appendChild(titleInput); // Append input field to label

    var descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    var descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('name', 'description');
    descriptionLabel.appendChild(descriptionInput); // Append textarea to label

    var dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    var dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'duedate');
    dueDateLabel.appendChild(dueDateInput); // Append input field to label

    // Append labels and inputs to the form
    form.appendChild(titleLabel);
    form.appendChild(document.createElement('br')); // Line break for better spacing
    form.appendChild(descriptionLabel);
    form.appendChild(document.createElement('br')); // Line break for better spacing
    form.appendChild(dueDateLabel);
    form.appendChild(document.createElement('br')); // Line break for better spacing
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button")
    submitButton.innerHTML = 'Add Event'
    submitButton.addEventListener("click",() =>{
        
        createItem(titleInput.value,descriptionInput.value,dueDateInput.value,1);
        toDo.removeChild(form);
        document.querySelector(".add-event-button").disabled = false;

    })
    form.appendChild(submitButton);

    // Append the form to the document body (or any other DOM element)
    var toDo = document.querySelector(".to-do");
    toDo.insertBefore(form, toDo.firstChild);
    //toDo.appendChild(form);
    
}

export default addEvent;