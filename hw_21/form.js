
let form = document.forms.myform;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let elements = this.querySelectorAll("input, textarea");
    let formIncompleted = false;
    let message = "";

    for (let element of elements) {
        if (element.value === "") {
            formIncompleted = true;
            break;
        } else {
             message += `${element.name}: ${element.value}\n`;
        }
    }

    if (formIncompleted) {
        alert("Заповніть форму");
    } else {
        alert(message);
    }
});
