class Microsoft {
  constructor (name) {
    this.name = name;
  }
  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

   occupation(name) {
      return (`${this.name} is a philanthronist!`);
  }

}

class Facebook extends Microsoft {
  constructor (name, age) {
    super(name)
    this.age = age;
  }

  studentAge (name, age) {
     return = (`${this._name} is walking on ${this.legs}`);

     return numberOfLegs;
 }
}



module.export = {
  Microsoft,
  Facebook
}
