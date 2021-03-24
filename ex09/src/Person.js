
class Person {
  constructor(name, email, age) {
    this.name = name
    this.email = email
    this.age = age
  }

  getPerson(personInfo) {
    var personInfo = `Name: ${this.name} ${this.email} ${this.age}`;
    return personInfo;
  }
}



module.exports = Person;
