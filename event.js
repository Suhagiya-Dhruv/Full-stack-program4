const parent = document.getElementById("container");
const child = document.getElementById("child");
parent.addEventListener("click", () => {
    console.log("Parent Clicked")
})

child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Chlid Clicked")
})


