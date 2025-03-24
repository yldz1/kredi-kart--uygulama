document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText =
        document.querySelector(".card-number-input").ariaValueMax;
};
document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-number-name").innerText =
        document.querySelector(".card-number-input").value;

};
document.querySelector(".month-input").oninput = () => {
    document.querySelector(".exp-month").innetText =
        document.querySelector("month-input").value;
}

document.querySelector(".year-input").oninput = () => {
    document.querySelector(".exp-year").innetText =
        document.querySelector("year-input").value;
}

