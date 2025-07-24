//let number=[1,2,"Three",True];

// let names=new Array("john","james");
//console.log(number[2]);
//console.log(names.length);
//let result=number.filter(number => number[0]);
//console.log(result);


//let number=[1,2,3,4,5];
//number.splice(1,2, "hai");
//console.log(number);


// let details={
//     name:"js",
//     totalmark:"90",
//     //nested obj
//     subject:{
//         dbms:"98",
//         java:"99",
//     },
//     avg:function(){
//         let sum=parseInt(this.subject.dbms)+parseInt(this.subject.java);
//         return sum;
//     }
// }
// console.log(details.totalmark);
// console.log(details["name"]);
// console.log(details.subject.dbms);
// console.log(details.subject["java"]);
// console.log(details.avg());

// const person={
//     name:"asha",
//     age:21,
//     city:"chennai",
// };

//destructing

// const{name,age,city}=person;

// console.log(name);
// console.log(age);
// console.log(city);

const person=["john",22,"software developer"];
const[name,age,desigination]=person;
console.log(name+" " +age+" "+desigination)
