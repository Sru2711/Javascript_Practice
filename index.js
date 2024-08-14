

//Map
// Insert name key into the objects with same id after the name
// Output- [{id:"1",name:"name-1"},{id:"2",name:"name-2"},{id:"3",name:"name-3"}]

const a=[{id:111},{id:53},{id:39}]
const abc = a.map((a,index)=>{
    a.name=`name-${a.id}`
    return a
})

console.log(abc);




 const a67=[1, 2, 3]
//Output-[11,12, 13]

const abc67 = a67.map((a)=>{
 return 10+a
     
})

console.log(abc67);





const array=["abc", "ait", "ghp", "wor", "oui","uyotrewiq"];

const onlyVowles= array.filter((element)=> {
    
        if(element.includes("o") && element.includes("i")) {
          return element
        }
    
})
console.log("@@@",onlyVowles)

const array1=[4,7,3,0,2,5];
const array2=[5,2,0,3,7,4];

//[4,5,7,2,3,0,0,3,2,7,5,4]


let newArray=[];
for(let i = 0; i < array1.length; i++){
    let evens=[]
    if(array1[i] % 2 == 0 ){
        console.log("object1",array1[i])
        // newArray=[...newArray,array1[i],array2[i]];
        evens=[...evens,array1[i]]
    }
    if(array2[i]% 2 ==0){
        console.log("object2",array2[i])
        evens=[...evens,array2[i]]
    }
    console.log("object",evens)
    newArray=[...newArray,...evens]
}

console.log("1111", newArray);