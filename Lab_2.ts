//1.write a demontrate the use of interface in Typescript angular
// interface Rectangle {
//     height: number,
//     width: number

//   }
  
//   interface ColoredRectangle extends Rectangle {
//     color: string
//   }
  
//   const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };
  
//   console.log(coloredRectangle);
  

  // //2.write a demontrate the use of class in Typescript 
  // class Animal {
  //   name: string;
  //   age: number;
    
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   }
    
  //   class Dog extends Animal {
  //       breed: string;
        
  //       constructor(name: string, age: number, breed: string) {
  //         super(name, age);
  //         this.breed = breed;
  //       }
  //       }
        
  //       const myDog = new Dog("Rocky", 3, "Golden Retriever");
  //       console.log(myDog);




//3.wap to string mannipulation in typescript

// const myObject = {
//   name: "yugal",
//   age: 20
// };
// const myString = JSON.stringify(myObject);

// console.log(myString);



//4. wap to  perform type assertion in typescript 

interface user {

  id:number;
    name:string;
    age:number;
    email:string 
}

function printDetial(user:user){
    console.log(user.id);
    console.log(user.name);
    console.log(user.age)
}

let student ={
    id:1,
    name:"Yugal jakasaniya",
    age:20,
    email:"Yugaljakasaniya@gmail.com"
}

console.log("\n type Assertion - I");
let newStuden:user

let newStudent = student as user;
printDetial(newStudent);

console.log("\n type Assertion - II");

let anyValue:any = "Darshan";
let anyValueLenght:number =(<string>anyValue).length;
console.log("Lenght :"+anyValueLenght)