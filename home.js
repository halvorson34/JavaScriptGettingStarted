let person = {
    firstName: "Matt",
    lastName: "Halvorson",
    petName: "Roo"
}

let firstName = person.firstName;

(firstName == "Matt") ? showMessage(firstName) : showMessage("Wrong person")


// showMessage(person.petName);
console.log(person);

changePercentOff(32);

const header = document.getElementById("message");

header.style.color = "red";

const button = document.getElementById("see-review");

button.addEventListener("click", function() {
    const review = document.getElementById("review");

    if (review.classList.contains("d-none")) {
        review.classList.remove("d-none");
        button.textContent = "CLOSE REVIEW";
    } else {
        review.classList.add("d-none");
        button.textContent = "SEE REVIEW";
    }
});