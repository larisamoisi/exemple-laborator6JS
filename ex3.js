const person = {
    firstName: "Mihai",
    lastName: "Popescu"
}
function getFullName() {
    return person.firstName + " " + person.lastName;
}
alert(getFullName());