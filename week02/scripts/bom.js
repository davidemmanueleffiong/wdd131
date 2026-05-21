const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list'); 

button.addEventListener('click', function () {
    if (input.value.trim() !== '') { // guard clause inside handler
        const li = document.createElement('li'); // created fresh each click
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () { // scoped to this li
            list.removeChild(li);
            input.focus();
        });

        input.value = '';  // clears input after adding
        input.focus();     // refocuses input after adding
    }
});