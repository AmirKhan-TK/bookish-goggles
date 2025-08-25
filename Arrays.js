/*const numbers =[3,4];
//end

numbers.push(5,6);

//start

numbers.unshift(1,2);

//middle

numbers.splice(1,0,"a","b");
console.log(numbers);*/
const numbers =[1,2,3,4,5,6];
//end
 numbers.pop();
 //start
 numbers.shift();
 //middle
 numbers.splice(1,2);

 console.log(numbers);

 const totalnumbers =[0,1,2,3,1,4];

console.log(totalnumbers.lastIndexOf(1));
 console.log(totalnumbers.indexOf(1));
 console.log(totalnumbers.indexOf(1)!==-1);

const courses=[
    {id:1,
        name:"a"
    },
    {
        id:2,
        name:"b"
    }
]
/* const course = courses.find(function(course){
    return course.name === "a";
 })
 console.log(course);
*/
  const course = courses.find(course => course.name === "a" );
 console.log(course);

let dogs=[1,2,3,4,5];
let another=dogs;
 //Solutions for removing arrays
 /*Solution 1
 dogs=[];
 console.log(dogs);
 console.log(another);*/
 /*Solutions 2
 dogs.length=0;
  console.log(dogs);
 console.log(another);*/
 //Solutions 3
/* dogs.splice(0,dogs.length);
  console.log(dogs);
 console.log(another);*/
//Solution 4(not reccomended)
while(dogs.length>0){
    dogs.pop();
}
 console.log(dogs);
 console.log(another);

const first=[{
    ideas1:1,
    ideas2:2,
    ideas3:3
}];
const second =[4,5,6];
// const total=first.concat(second);
//OR
const total=[...first,...second];
 const slice=total.slice(1,4);

 console.log(total);
 console.log(slice);
 const NUMBERS=[1,2,3];
 for(let NUMBER of NUMBERS){
    console.log(NUMBER);
 }
 NUMBERS.forEach((NUMBER,index) => 
    console.log(index,NUMBER)
 );

 const message="This is my first message";
 const parts=message.split(" ");
 console.log(parts);
 const combined=parts.join("-");
 console.log(combined);

 const counting=[1,3,2];
 const Sorted=counting.sort();
 console.log(Sorted);
 const Reverse=Sorted.reverse();
  console.log(Reverse);

  const NewCourses=[
    {
        id:1,
        name:"Node.js"
    },
    {
        id:2,
        name:"JavaScript.js"
    },
   
  ];
  NewCourses.sort(function(a,b){
    const NAME_A=a.name.toUpperCase();
        const NAME_B=b.name.toUpperCase();
           

            if(NAME_A>NAME_B){
                return 1;
            }
            if(NAME_B>NAME_A){
                return -1;
            }
            return 0;


  });
 /* console.log(NewCourses);
  const Test=[1,-1,2,3];
  const allPositive=Test.every(function(Valid){
    return Valid>0;
  })
  console.log(allPositive);*/
  const Test=[1,2,3,4];
  const AtleastSomePositive=Test.some(function(Valid){
    return Valid>0;
  })
  console.log(AtleastSomePositive);

  const filtered= Test.filter(n=> n>0 );

  console.log(filtered);
  /*const maps=filtered.map(n=>"<li>"+n+"</li>");
  console.log(maps);
  const html= "<ul>" + maps +"</ul>";
  console.log(html);*/
  const maps=filtered.map(n=>({value:n}));
  console.log(maps);

 const sum = Test.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
 console.log(sum);