const numbers=arrayfromrange(1,4);
console.log(numbers);

function arrayfromrange(min,max){
    const output=[];
    for(let i=min;i<=max;i++){
       output.push(i);   
    }
    return(output);

    
}

const NUMBERS= [1,2,3,4];

function includes(array,SearchElement){
    if(array.indexOf(SearchElement)!==-1){
       return true;
    }
    return false;
}

const INDEX=includes(NUMBERS,7);
console.log(INDEX);

const output= except(NUMBERS,[1,2]);

function except(arrays,exception){
    let newArray=[];
    for(let element of arrays){
     if(!exception.includes(element))
        newArray.push(element);
    }
  return newArray;

}
console.log(output);

const Numbers=[1,2,3,4,1,5];

const Output=move(Numbers,0,4);
console.log(Output);

function move(array,index,offset){
    const position=index+offset;
   if(position>=array.length||position<0){
    console.log("Invalid Offset");
    return 0;
   }
 const newarray=[...array];
   const element=newarray.splice(index,1)[0];
   newarray.splice(position,0,element);
   return newarray;
}
function countOccurances(array,SearchElement){
    let sum=0;
    for(let arrays of array){
        if(arrays===SearchElement){
            sum+=1;
        }
    }
    return sum;

}
const Count= countOccurances(Numbers,1);
console.log(Count);
   const max= getMax(Numbers);
   console.log(max);

   function getMax(array){
    if (array.length===0){
        return[];
    }
    /*let obj=0;
    for(let arrays of array){
        if(arrays>obj){
            obj=arrays;
        }
        
    }
    return obj;*/
    const obj=array.reduce(((accumulator,currentvalue)=>(currentvalue>=accumulator)?currentvalue:accumulator),0);
    return obj;
   }

   const movies=[
    {
        title:"a",
        year:2018,
        rating:4.5
    },
    {
        title:"b",
        year:2018,
        rating:3
    },
    {
        title:"c",
        year:2018,
        rating:4.2
    },
    {
        title:"d",
        year:2017,
        rating:4.5
    }
    
   ]
   const mov =
  movies.filter(m=>m.year===2018&&m.rating>=4)
  .sort((a,b)=>a.rating-b.rating)
  /*{if(a>b){return 1;
  }
  if(a<b){
    return -1;
  }
  return 0;
}*/
.reverse()
.map(m=>m.title);
console.log(mov);


