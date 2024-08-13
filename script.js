
const list = document.getElementById("list");

const storeValue = JSON.parse(localStorage.getItem("todo")) || [];

if(storeValue.length){
    renderValue()
}

function updateStorage() {

    localStorage.setItem("todo", JSON.stringify(storeValue));

    // localStorage.setItem("key", "value")
    // localStorage.getItem("key");

    // setTimeout(() => {
    //     localStorage.removeItem("key")
    //     localStorage.clear();
    // }, 2000)

    // sessionStorage.setItem("key", "value")
    // sessionStorage.getItem("key");

    // setTimeout(() => {
    //     sessionStorage.removeItem("key")
    //     sessionStorage.clear();
    // }, 2000)

}

function removeItem(element, index) {
    storeValue.splice(index, 1);
    element.parentNode.remove();
    updateStorage();
}

function checkbox(element, index) {
    storeValue[index].status = element.checked;
    updateStorage();
    renderValue();
}

function renderValue() {

    let label = "";

    for (let i = 0; i < storeValue.length; i++) {

        const status = storeValue[i].status;

        const temp = `
        <div>
            <label for="" class="${status ? "line" : ""}">
                <input type="checkbox" onchange="checkbox(this, ${i})" ${status ? "checked" : null}>
                ${storeValue[i].name}
            </label>
            ${status ? "" : `<button onclick="removeItem(this, ${i})">Delete</button>`}
        </div>`

        label += temp;
    }

    list.innerHTML = label;
    document.getElementById("input").value = "";

}

function addTask() {
    const value = document.getElementById("input").value;
    if (value.trim()) { // value.length !== 0 || value !== "" || ""
        const temp = {
            name: value,
            status: false
        }
        storeValue.push(temp);
        updateStorage();
        renderValue();
    }
}
