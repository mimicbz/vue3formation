/*let message: string = 'Hello, World!'; 
console.log(message);*/


function calcAdd(a:number, b:number): number{
    return a+b;
}

function calcSoustr(a:number, b:number): number{
    return a-b;    
}

function calcMult(a:number, b:number): number{
    return a*b;    
}

function calcDiv(a:number, b:number): number{
    return a/b;
}

console.log("Test Addition : " + calcAdd(25, 12));

console.log("Test Soustraction : " + calcSoustr(25, 12));

console.log("Test Multiplication : " + calcMult(25, 12));

console.log("Test Division : " + calcDiv(25, 12));

