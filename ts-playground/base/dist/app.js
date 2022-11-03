"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("LOGGER. DECORATOR");
    return function (constructor) {
        console.log('runs second --> LOGGER');
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
function WithTemplateUsesConstructor(template, hookId) {
    console.log("WithTempl. DECORATOR");
    return function (constructor) {
        console.log("Render template -> run first");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Plamen";
        console.log('Creating the person object');
    }
};
Person = __decorate([
    Logger('LOGGING-PERSON'),
    WithTemplateUsesConstructor('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
//# sourceMappingURL=app.js.map