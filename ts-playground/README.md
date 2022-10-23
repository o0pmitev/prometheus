
# Course Notes 
## TypeScript Basics & Basic Types

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
