//Function Declearation
function walk(){
    console.log("walk");
}
//Function Expression
let run = function(){
    console.log("run");
};

run();
walk();

function sum(){
    let total=0;
    for(let value of arguments){
        total+=value;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6));

function Mall(discount,...price){
    const Revenue=price.reduce((a,b)=>a+b);
    return Revenue*(1-discount);
}
console.log(Mall(0.5,40,50));

function interest(principal,rate=3.5,year){
    //rate=rate||3.5;
    //year=year||5;
    return principal*rate/100 *year;

}
console.log(interest(10000,undefined,5));

const person={
    Firstname:"Amir",
    Lastname:"Khan",
    get Fullname(){
        return `${person.Firstname} ${person.Lastname}`
    },
    set Fullname(value){
        if(typeof value !== "string"){
            throw new Error("Value is not string");
        }
        const parts =value.split(" ");
        if(parts.length!==2){
            throw new Error("Must have First And Last Names");
        }
        this.Firstname=parts[0];
        this.Lastname=parts[1];
    }

}
try{
 person.Fullname="John Doe";
}
catch(Error){
    return Error;
}

 console.log(person.Fullname);
 // var => Function Scoped and if used as global scoped they are stored in windows which can cause troubles.
 // let,const => Block Scoped

 /* const video ={
    title:"a",
    tags:["a","b","c"],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
 }
video.showTags();*/

const video ={
    title:"a",
    tags:["a","b","c"],
    showTags(){
        this.tags.forEach(tag=>{
            console.log(this.title,tag);
        });
    }
 };
video.showTags();
 

function playVideo(a,b){
    console.log(this);
}

playVideo.call({name:"Josh"},1,2);
playVideo.apply({name:"Josh"},[1,2]);
const fn =playVideo.bind({name:"Josh"})();

