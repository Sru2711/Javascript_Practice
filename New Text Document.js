let arr = [
    {id:3}, 
    {id:1}, 
    {id:2},
    {id:4}
    ]
    
  const sortFunction = (arr) => {
    let temp;
    let a=0;
    console.log(arr.length);
    for(i=0; i<arr.length;i++) {
      for(j=1; j<arr.length;j++) {
        //console.log("i-", arr[i].id , "j-", arr[j].id);
          if(arr[i].id > arr[j].id) {
            //console.log("Loop No:",a++, "j___", arr[j]);
            
            temp= arr[i];
            //console.log("temp",temp);
            arr[i]=arr[j];
            //console.log("arr[i]",arr[i]);
            arr[j]=temp
            //console.log("arr[j]",arr[j]);
            //console.log("newArray",[...arr,arr[i],arr[j]])
            arr=[...arr,arr[i],arr[j]]
            
          }
         
             
          
      }
    }
  }
  console.log(sortFunction(arr));