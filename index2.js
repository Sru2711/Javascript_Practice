// const array1=[4,7,3,0,2,5];
// const array2=[5,2,0,3,7,4];

// let newArray=[];
// for(let i=0; i< array1.length; i++) {
//      newArray=[...newArray, 
//           ...(array1[i] % 2==0 ? [array1[i]]: ([])),  
//          ...(array2[i] % 2==0 ? [array2[i]]: ([]) )]    
// }
// console.log("&&&",[...newArray]) 

// ...[[]]
// output-4, []


//Recursion Function 

// const factorialNumber = (number) =>{

//     let factorial= number*
// }
// factorialNumber()

// const getUsers =() => {
//   return  JSON.parse(localStorage.getItem("userName")) || []
// }

// const createUser =(user) => {
//     let users= getUsers();
//     let existingUser;
//     if(users?.length) {
//         existingUser=users.find((existingUser)=>(existingUser.email === user.email))
//     }


//     if(!existingUser){
//         user.userId= randomIdGenerator();
//         localStorage.setItem("userName",JSON.stringify([...users, user]))
//     }

// }

// const randomIdGenerator =() => {
//     return new Date().getTime()
// }







// Convert Vowels of String into uppercase
// const myString = "a set of objects joined together";

// const stringVowlesToUppercase = (mystring) => {
//   let newString="";
//   for (i of mystring) {
  
//     // console.log(i)
//     switch (i) {
//       case "a": {
//         console.log("object",i)
//         newString = newString + "A"
//         break;
//       }
//       case "e": {
//         newString = newString + "E";
//         break;
//       }
//       case "i": {
//         newString = newString + "I"
//         break;
//       }
//       case "o": {
//         newString = newString + "O"
//         console.log("object", newString)
//         break;
//       }
      
//       case "u": {
//         newString = newString + "U"
//         break;
//       }
//       default:
//         newString += i
//         break;
//     }

//   }
//   // console.log(newString)
//   return newString;
  
// }

// console.log(stringVowlesToUppercase(myString))

// const s= "helloMyNameIsTonyStark";
// const capitalAlphabetsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const applyingSpace = (s) => {
//   let newString="";
//   for(let i =0; i<s.length; i++){
//     if(capitalAlphabetsArray.includes(s[i])){
//       newString +=" "+ s[i]
//     }
//     else {
//       newString +=s[i]
//     }
//   }
// return newString
// }
// console.log(applyingSpace(s))

