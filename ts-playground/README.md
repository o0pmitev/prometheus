
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