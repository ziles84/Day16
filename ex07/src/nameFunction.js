export firstName = (firstName) => {
  return firstName.toUpperCase();
}

export lastName = (lastName) => {
  return lastName.toLowerCase();
}

console.log(firstName("osman"));
console.log(lastName("sbana"));

module.exports = {
  firstName;
  lastName
}
