const person = {}; //new object
person.firstName = "Mihai";
person.lastName = "Popescu";
function getFullName() {
    return person.firstName + " " + person.lastName;
}
document.write(getFullName());