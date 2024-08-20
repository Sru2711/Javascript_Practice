// const data=[
//     {
//       userName: "John Doe",
//       emailId: "johndoe@example.com",
//       address: [
//         {
//           street: "123 Main St",
//           city: "Springfield",
//           state: "IL",
//           zipCode: "62701"
//         },
//         {
//           street: "456 Elm St",
//           city: "Shelbyville",
//           state: "IL",
//           zipCode: "62565"
//         },
//         {
//           street: "789 Oak St",
//           city: "Capital City",
//           state: "IL",
//           zipCode: "62712"
//         }
//       ]
//     },
//     {
//       userName: "Jane Smith",
//       emailId: "janesmith@example.com",
//       address: [
//         {
//           street: "321 Maple St",
//           city: "Springfield",
//           state: "MO",
//           zipCode: "65807"
//         },
//         {
//           street: "654 Pine St",
//           city: "Riverton",
//           state: "MO",
//           zipCode: "65701"
//         },
//         {
//           street: "987 Cedar St",
//           city: "Westport",
//           state: "MO",
//           zipCode: "65810"
//         }
//       ]
//     },
//     {
//       userName: "Alice Johnson",
//       emailId: "alicejohnson@example.com",
//       address: [
//         {
//           street: "159 Birch St",
//           city: "Metropolis",
//           state: "NY",
//           zipCode: "10001"
//         },
//         {
//           street: "753 Willow St",
//           city: "Gotham",
//           state: "NY",
//           zipCode: "10004"
//         },
//         {
//           street: "951 Walnut St",
//           city: "Star City",
//           state: "NY",
//           zipCode: "10007"
//         }
//       ]
//     }
//   ];
  
 
// let addressess=[]

// const getAddress = (data) => {
  
    
//       for(d of data) {
//         console.log("!!!",d)
//        addressess=[...addressess,...d.address]   
      
//       } 
           
        
    
//    return addressess
// }

// console.log(getAddress(data))


// let value= 5;
// let add=1;
// const factorial =(i) => {  // 5, 4
//      //1*5, 5*4
//    if(i>1){  // 5 >1, 4>1
//     add= add+i
//     value=--i; //value == 4, value == 3
//     // console.log("$$$", value, i)
//      factorial(value)  //factorial(4), factorial(3)
//    }
   
//     return add;
// }

// console.log("****",factorial(value))

let value= 5;
const addFactorial =(i) => {

    if(i==1){
        return 1;
    }
    return i + addFactorial(i-1)
}

console.log("****",addFactorial(value))