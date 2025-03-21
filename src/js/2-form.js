const form = document.querySelector(".feedback-form");
const formData = {
    email: "",
    message: ""
}
const localStorageKey = "feedback-form-state";
const savedFormValue = JSON.parse(localStorage.getItem(localStorageKey));

if (savedFormValue) {
    form.elements.email.value = savedFormValue.email || "";
    form.elements.message.value = savedFormValue.message || "";
    formData.email = savedFormValue.email || "";
    formData.message = savedFormValue.message || "";
}

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(evn) {
    formData[evn.target.name] = evn.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function handleSubmit(evn) {
    evn.preventDefault();  
    if (evn.target.elements.email.value === "" || evn.target.elements.message.value === "") {
        return alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        formData.email = "";
        formData.message = "";
        form.reset();
    }
}