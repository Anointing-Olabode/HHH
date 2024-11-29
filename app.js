// let shoppingList = ["bread", "milk", "eggs", "butter", "cheese"];
//   console.log("original shopping List:", shoppingList);

//   for (let i=0; i <shoppingList.length ; i++) {
//     console.log(shoppingList[i])
//   }
//   shoppingList[1]="jam";
//   console.log("update shoppingList", shoppingList);

//   for (let i = 0; i < shoppingList.length; i++){
//     console.log(shoppingList[i])
//   }
//   console.log("Total number of item :", shoppingList.length)




//   function greet(age) {
//     console.log("Hello, " + age + " Welcome")
//   }
//   greet(17)
//   greet(18)
//   greet(19)


//   function multiply(a , b){
//     console.log("The multiplication is " + (a*b))
//   }
//   multiply(5,2)


//   let message =["Anointing","Olabode","Inioluwa","Oladele"];{
//     function printName(){
//       for (let i = 0 ; i< message.length; i++)
//         console.log(message[i])
//     }
//   }




let fruit =["Apple","Watermelon","Orange","Avocado","Cucumber"]
  console.log(fruit)
 
function getnumbers () {
   console.log(fruit[2])
   console.log(fruit[0])
   console.log(fruit[fruit.length - 1] )
}

getnumbers()


let number = function (a,b){
  return( "The addition is " + (a+b))
}
console.log (number(5,7))


//   function number(a,b){
//  return a+b  }



// function subtracts (a,b) {
//   return a-b
// }

const subtract = (a,b) => 
"The subtraction is " + (a-b);
console.log(subtract(30,18));

display: name =(Tomiwa) => ("My name is " + name )



function calculateGrade(score){
  

  // displayAge:(age)=> ("My age is " + age),
  
  
  
  
   
  
  //  console.log(newfunction.displayAge (17))


   if (score >= 90){
    return "Your Grade is A"
   } else if (score >= 80) {
    return "Your Grade is B"
   } else if (score >= 70){
    return "Your Grade is C"
   } else if (score >= 60){
    return "Your Grade is D"
   }
  
}


console.log(calculateGrade (85))

// function customer(){

let customer = ["Alice","Bob","Charlie"]
customer.push("Daisy")

console.log(customer)

// customer()

customer.shift();
console.log(customer);

customer.unshift("Richard")
console.log(customer)

customer.pop();
console.log(customer)

let newcustomer = customer.slice(1,4);
console.log(newcustomer)

const isQueueEmpty =(Queue) => {
  return Queue.length > 2 ?
  "The queue contain element"
  :"The queue is empty"
}
const Queue = ["Ade","Sam","Ini","Ola"]
console.log(isQueueEmpty(Queue))

let color ={
  color1 : 'Black',
  color2 : 'Red' ,
  color3 : 'Blue' ,
}
const {color1, color2, color3} = color;
console.log(color1);
console.log(color2);
console.log(color3);


let phone = {
  Brand : 'Apple',
  model : 'Iphone 16',
  price : '$1,920',
  getDetails: function (){
    return this.Brand + ' ' + this.model + ' is sold for ' + this.price
    }
}
console.log(phone.getDetails())

let Library ={
  name : 'A-library',
  location : '6,olayiwola',
  Book1 : {
    Author: 'Adewale Zarat',
    Title: 'Dreams'
  } ,
  Book2 : {
   Author: 'Sondiro Nifemi',
   Title: 'Anger'
  },
  Book3 : {
    Author: 'Sodipo Oyin',
    Title: 'Lies'
  }
}
console.log(Library.Book1.Title)
console.log(Library.Book2.Author)

