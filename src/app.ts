function Loggin(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (!!hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
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
