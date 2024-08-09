const list = document.getElementById("list");

const valueList = [];

function addTask() {
    const inputElement = document.getElementById("input");
    valueList.push(inputElement.value);
    displayTasks();
}

function deleteItem(element) {
    const index = element.dataset.index;
    valueList.splice(index, 1);

    element.parentNode.remove();
}
function displayTasks() {

    let text = "";
    for (let i = 0; i < valueList.length; i++) {
        const temp = `
        <div>
            <label for="">
                <input type="checkbox">
                ${valueList[i]}
            </label>
            <button onclick="deleteItem(this)" data-index="${i}">delete</button>
        </div>
        `

        text = text + temp;
    }

    list.innerHTML = text;
    document.getElementById("input").value = "";

}


// localStorage
// sessionStorage