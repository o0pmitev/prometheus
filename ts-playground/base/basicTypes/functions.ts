function add(m1:number, m2:number): number {
    return m1 + m2;
}

function printResult(num: number):void {
    console.log(num);
}

function addAndHandle(n1:number, n2:number,cb: (n1:number) => void): void {
    const result = n1 + n2;
    cb(result);
}

printResult(12);

/**
 * function type
 * @n1 number
 * @n2 number
 */
let combineValues: (n1: number, n2: number) => number; 

// combineValues = 5; // -> this will complain because it needs to be a function
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(2, 3,(result) => {
    console.log(result);
}) 