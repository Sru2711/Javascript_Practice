const array1=[4,7,3,0,2,5];
const array2=[5,2,0,3,7,4];

let newArray=[];
for(let i=0; i< array1.length; i++) {
     newArray=[...newArray, 
          ...(array1[i] % 2==0 ? [array1[i]]: ([])),  
         ...(array2[i] % 2==0 ? [array2[i]]: ([]) )]    
}
console.log("&&&",[...newArray]) 

// ...[[]]
// output-4, []


//Recursion Function 

// const factorialNumber = (number) =>{
 
//     let factorial= number*
// }
// factorialNumber()

const getUsers =() => {
  return  JSON.parse(localStorage.getItem("userName")) || []
}

const createUser =(user) => {
    let users= getUsers();
    let existingUser;
    if(users?.length) {
        existingUser=users.find((existingUser)=>(existingUser.email === user.email))
    }
  

    if(!existingUser){
        user.userId= randomIdGenerator();
        localStorage.setItem("userName",JSON.stringify([...users, user]))
    }
   
}

const randomIdGenerator =() => {
    return new Date().getTime()
}