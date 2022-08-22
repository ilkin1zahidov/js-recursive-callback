"use strict"

// function sum(n){
//     let result = 0;
// for (let i = 0; i <=n; i++) {
   
//     result += i
// }
//     return result;
// }

// console.log(sum(4));

// function getFactorial(n){
//     if(n==1){
//         return n;
//     }else{
//         return n * getFactorial(n-1)
//     }
// }

// console.log(getFactorial(4));

// function getFactorial(n){
//     if(n==1){
//         return n;
//     }else{
//         return n + getFactorial(n-1)
//     }
// }

// console.log(getFactorial(4));


 //let students = ["Ayxan", "Azer", "Huseyin", "Sadiq"]

// students.forEach((elem, index) => {
//     console.log(elem + "-" + index);
// });

// for (const item of students) {
//     console.log(item);
// }

// let users = [{
//     email : "haqverdi@code.edu.az",
//     password: "12345"
// },
// {
//     email: "cavid@code.edu.az",
//     password: "12345"
// },
// {
//     email: "esqin@code.edu.az",
//     password: "12345"
// }];

// for (const key in users) {
//     console.log(users[key].email);
// }

//    for (const item of users) {
//     for (const key in item) {
//        console.log(key);
//         }
//     }
   
// let book = {
//     name : "Xosrov",
//     author: "Nizami",
//     pageCount:20000
// }

// for (const key in book) {
//     console.log(book[key]);
// }

// let students = ["Ilkin", "Seid", "Orxan", "Sadiq"];

// function getStudents(t,m,n,...arr) {
//     for (const item of arr) {
//         console.log(item);
        
//     }
//     console.log(t + "-t");
//     console.log(m + "-m");
//     console.log(n + "-n");
// }

// getStudents("Ilkin", "Seid", "Orxan", "Sadiq");


// function evenNum(n) {
//     return n % 2 ==0;
// }

// function oddNums(n) {
//     return n % 2 != 0;
// }


// function threeNums(n) {
//     return n >= 3;
// }

// let oddNums = n => n %2 != 0;
// let threeNums = n => n >=3; 

// function  sumByContidions(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)) {
//             sum += item;
//         }

//     }
//     return sum;
// }

// console.log(sumByContidions([1,2,3,4,5,6,],oddNums));
// console.log(sumByContidions([1,2,3,4,5,6,],evenNum));

// console.log(sumByContidions([1,2,3,4,5,6,], n => n %2 != 0)); 
// console.log(sumByContidions([1,2,3,4,5,6,],n => n >=3));


// function  sumEvenNums(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)) {
//             sum += item;
//         }

//     }
//     return sum;
// }


// function  sumOddNums(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)) {
//             sum += item;
//         }

       
//     }
//     return sum;
// }



// function  sumThanThree(arr,callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)) {
//             sum += item;
//         }

       
//     }
//     return sum;
// }

// console.log(sumEvenNums([1,2,3,4,5,6],evenNum));
// console.log(sumOddNums([1,2,3,4,5,6],oddNums));
// console.log(sumThanThree([1,2,3,4,5,6],threeNums));



// let numbers = [1,2,3,4,5,6,10,11,15,20];

// let filteredNumbers =  numbers.filter(m=>m%2==1);

// console.log(filteredNumbers);

// console.log(numbers);

// function sumNumbers(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum+=item;
//     }

//     return sum;

// }      


// console.log(sumNumbers(numbers));

//  let numbers = [1,2,3,4,5,6,7];

// console.log(numbers);
// numbers.forEach((item,index) => {
//     numbers[index]=item *2;
// });

// console.log(numbers);

// let result = numbers.map(m=>m*100);
// console.log(result);

// console.log(numbers);

let users = [
    {name:"Ilkin", surname:"Zahidov", age:25},
    {name:"Seid", surname:"Zahidov", age:17},
    {name:"Orxan", surname:"Ekberov", age:26}

]

let date = new Date();

// console.log(date);

let result = users.map(m=>{
    return {
        fullName: `${m.name} ${m.surname}`,
        yearOfBirth: date.getFullYear() - m.age
    }
})
 console.log(result);