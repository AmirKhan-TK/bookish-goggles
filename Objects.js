const circle={
    radius:1,
    length:{
        x:1,
        y:1
    }
    ,
    Variable:true,
    draw:function(){
        return "draw";
    }
    

    
}
/*const another={};
for(let key in circle){
    another[key]=circle[key];
}
console.log(another);*/
/*const another=Object.assign({},circle);
 console.log(another);*/
 const another ={...circle};
 console.log(another);
 
const circle1=circle.draw();

  console.log(circle1)
//Factory function
function CreateCircle(rad){
   return{
   rad,
   drew(){
    console.log("Drew");
   }
   };
}
const circle2= CreateCircle(1);
console.log(circle2);

//constructor
class Circle {
    constructor(r) {
        this.r = r;
    }

    drow() {
        console.log("drow");
    }
}

const Cir = new Circle(1);
console.log(Cir);
Cir.drow();