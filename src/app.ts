function Loggin(constructor: Function) {
  console.log("Loggin...");
  console.log(constructor);
}

@Loggin
class Person {
  name = "Nik";

  constructor() {
    console.log("Creating person object ...");
  }
}

const pers = new Person();
