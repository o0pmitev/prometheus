
# Course Notes 
## Section 2:  TypeScript Basics & Basic Types

### Tuples

It is a fixed **length** and **type** _array_.
> _If you need an 'x' amount of values in an array and you know the type of each value in advance you might want to consider a Tuple than a regular array._
```ts
const myTuple: [ string, number ] = [ "userId", 10 ];
//or 
const role:[ number, string ] = [ 2, "author" ]; 
```
You should be careful because nothing will prevent you to push another item in a later stage to the tuple. 
TypeScript will prevent you only for assign a wrong number or types of the values.
```ts
const myTuple: [ string, number ] = [10, 'error']; // --> this will give you an error because we the values are in wrong order
// or 
const myTuple: [ string, number ] = ['hello', 10, 10]; // --> this will give you an error because we are trying to assign more values 
//or
const myTuple: [ string, number ] = [ ]; // --> this will give you an error because we are assigning less values than required
``` 
---

### Enum
From TS [docs](https://www.typescriptlang.org/docs/handbook/enums.html):
> _Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums._
```ts
    enum MyEnum {ADMIN, AUTHOR, READ_ONLY}; // => by default ADMIN = 0, AUTHOR = 1, READ_ONLY = 2;

    enum RoleEnum {ADMIN='admin', AUTHOR='author', READ_ONLY='read_only'};
    const person = {
        name: "Plamen",
        age: 32,
        hobbies: ["Sport", "Gaming"],
        role: RoleEnum.ADMIN;
    }
```
### Core types:

| type    | value             | description                                                                       |
| ------- | ----------------- | --------------------------------------------------------------------------------- |
| number  | 1, 5.3, -10       | All numbers, no differentiation between integers or floats                        |
| string  | 'Hi', "Hi", `Hi`  | All text values                                                                   |
| boolean | true false        | Just these two, no "truthy" or "falsy" values                                     |
| object  | {age: 32}         | Any JavaScript object, more specific types(type of object) are possible           |
| Array   | [1, 2, 3]         | Any JavaScript array, type can be flexible or strict(regarding the element types) |
| Tuple   | [1,2]             | Added by TypeScript: Fixed-length array                                           |
| Enum    | enum { NEW, OLD } | Added by TypeScript: Automatically enumerated global constant identifiers         |
| Any     |                   | Most flexible type. !!! To be avoided !!!                                         |

[Everyday Types-TSDocs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Section 3: The TypeScript Compiler (and its Configuration)

_! depending on how your dev env is setup (if `ts` is not installed globaly)_
_you may need to execute typescript from your_
_! node_modules with `npx` infront of every command_

- ts watch mode

```bash
# usefull if you work in a single file
tsc app.ts --watch
#or
tsc app.ts -w
```

```bash
# if we want to watch more than 1 file we need to run this once in your project folder
# creates tsconfig.json file and it tells that this project is handled by ts
tsc --init
# then we can run tsc to compile all of our .ts files
# or
tsc --watch
# to enter watch mode
```

```json
// tsconfig.json
{
  ...
  // exclude files you dont wan't to compile
  "exclude": ["node_modules", "ts-files"],
  // include is for sett only specific ts files or specific folder to be compiled
  "include": ["app.ts", "analytics.ts",]
  // if both are used and we have the same file or folder in exlcude its applied
  // include - exlcude
}
```

```json
// tsconfig.json
{
  // you can incude only files
  // suitable for smaller projects when you know you will have only couple of `.ts` files
  "files": ["app.ts"]
}
```

If the `lib` option is not set or commented out some defaults are asumed. Depending on your target version.

You can allow the creation of a source maps with the `"sourceMap": true` option. It helps with debugging. It allows the browser to understand and display ts files in the development tools. You can put breakpoints directly into the .ts files.

The `outDir` and `rootDir` options helps with organizing your files. The `outDir` option sets the target folder in which the compiled js files should be stored. Usualy is set to `dist` folder. Wit `rootDir` you can say explicitly where your root ts files live.

```json
{
  ...
  "outDir": "./dist",
  "rootDir": "./src",
  "removeComments": true // removes all comments you may have in the compiled js file.
}
```

`noEmitOnError` option disallow a creation of a problematic files.
`strict` option is preferable to always be used

There are some ts config options that can help you with your code quality:

```json
{
  "noUnusedLocalVariables": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true
}
```

---

Useful resources:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

---

## Section 4: Next-generation JavaScript & TypeScript

##### [src/next-gen.ts]

Interface: describe how an object should look like.

Interfasce vs custom type:

- Interface and a custom type are not exactly the same. Whilst often you can use them interchangeably and you can use interface instead of a custom type of the other way arount. There are also some differences:

  - interface can only be used to descrive the structure of an object.
  - another thing you can do with interfacs which you would also be able to do with custom types is you can implement an interface in a class. You can implement multiple interfaces by separating them by a coma.
    We can add other propertirs to the class but we are forsed to implement the logic of the interface into the class.

  ```js
  interface Greetable {
    name: string;
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name: string;
    age = 30;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  ```

  - interfaces usualy are used to share logic between classes.

---

Usefull links
More on (JS) Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

More on TS Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html

---

##### [ts-files/advance-types.ts]

More on Advanced Types:
https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

### Generics

[TypeScript Docs - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

##### [working-with-generic-type-variables.ts]

##### [hello-world-of-generics.ts]

##### [merge-generic-func.ts]
##### [generic-classes-functions.ts]
Generics gives us flexibility combined with type safety.
We are flexible regarding the values we pass in   or the values  we use in a class, at leas as long as we add here  to the possible  constrains which you might have added.
```ts
class DataStorage<T extends string | number | boolean> {
  private data: T[];
  
  addItem(item: T) {
    this.data.indexOf(item) === 1 {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }
  removeItem(item:T) {
    // logic to remove item
  }
  getItems() {
    return [...this.data]
  }
}
```
But we got full type support  for what we then do with the class or with the result of  a generic function.
```ts
const textStorage = new DataStorage<string>();
textStorage.addItem('Plamen')
textStorage.addItem('Mitev')
textStorage.removeItem('Mitev')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
```
 Because TypeScript then knows which concrete type we pass in what we call  the function here, or when or when we instantiate the class  here, here we then set  a concrete type, but we don't lock this class or this function down to that concrete type when we create it . Instead we are flexible and might just provie some constrains. But of course these constrains also are optional and you might have some generic classes or generic functions which have  no constrains and some  which have  a lot  of constrains.

[Generic utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
##### [generic-utility-types.ts]

More on Generics: https://www.typescriptlang.org/docs/handbook/generics.html

### Decorators

> Decorators execute when your class is _DEFINED_, **NOT** when is _INSTANTIATED_. In other words decorator runs when JavaScript finds your class definition, your constructor function definition **NOT** when you use that constructor function to instantiate an object.