
class Person {


static display() {
  var message = "Static method is invked from Person class";

  return message;
}

function show(display) {
  console.log(display);
}



}

var message = new Person();

message.show();

module.exports = Person;
