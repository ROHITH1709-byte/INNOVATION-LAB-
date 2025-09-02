let currenttime = new Date();
console.log(currenttime);

let local = currenttime.toString();
console.log(local);

let hours = currenttime.getHours();
console.log(hours);

let minits = currenttime.getMinutes();
console.log(minits);

let Day = currenttime.getDay();
console.log(Day);

class Exam {
    constructor(personname) {
        this.personname = personname;
        console.log(personname);
    }
}

let result = new Exam("john");

class Bank {
    constructor(initialAmount = 0) {
        this._balance = initialAmount;
    }

    get balance() {
        return this._balance;
    }

    set balance(amountDeposit) {
        if (amountDeposit > 0) {
            this._balance += amountDeposit;
        }
    }
}

let add = new Bank(10);
console.log(add)
add.balance = 300;
console.log(add);
console.log(add.balance);


class Addition{
    static math(a,b){
        return a+b
    }
}
console.log(Addition.math(4,4))


//import and export modules

//definition:

//export allows you to make variables,functions, or
//classes available to other files

//import allows you to bring those into another file

//used in modular javascript

//mathutil.js
export function Multiplication(x,y){
    return x*y;
}
export const pi=3.14;

//main.js
console.log(add(10,20));
console.log(pi);