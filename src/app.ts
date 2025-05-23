function Loggin(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (!!hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

//@Loggin("Logging - Person")
@WithTemplate("<h1>My person Object</h1>", "app")
class Person {
  name = "Nik";

  constructor() {
    console.log("Creating person object ...");
  }
}

const pers = new Person();
