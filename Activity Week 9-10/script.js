const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const dynamicList = document.getElementById('dynamicList');

function addNewItem() {
    const inputValue = itemInput.value.trim();

    if (inputValue === '') {
        alert('Please enter a valid item name.');
        return;
    }

    const newLiElement = document.createElement('li');

    newLiElement.textContent = inputValue;

    dynamicList.appendChild(newLiElement);

    itemInput.value = '';
    itemInput.focus();
}

addButton.addEventListener('click', addNewItem);

itemInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addNewItem();
    }
});