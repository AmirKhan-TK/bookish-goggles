//street
//city
//ZipCode

//showAddress(address)
/*const location ={
    Street:5,
    City:"Lahore",
    ZipCode:54000
}*/
/*function showAddress(address){
    
    for(let key in address){
     console.log(key,`:`,address[key]);
    }
    
}
const ADDRESS= showAddress(location);
return ADDRESS;*/
//Factory Function:
/*function showAddress(address){
    return{
        address,

        show(){
          console.log(another);
        }
    }
}
const ADDRESS=showAddress(location);
console.log(ADDRESS);*/
//Constructor
class ADDY {
    
        constructor(street,city,ZipCode) {
            this.street=street;
            this.city=city;
            this.ZipCode=ZipCode;
        }

    }

 

const ADDRESS= new ADDY("a","b","c");
console.log(ADDRESS);


/*let post={
    title:"Harry Potter",
    author:"Jones",
    body:"Non Fiction",
    views:1000,
    comments:[
        {
            author:"Jack",
            body:"Weird"
        },
        {  
            author:"Bob",
            body:"Not Weird"                    

        }
    ],
    isLive:true

}
console.log(post);*/

class post {
    constructor(title, author, body, views, comments, isLive) {
       
            this.title = title;
            this.author = author;
            this.body = body;
            this.views = views;
            this.comments = comments;
            this.isLive = isLive;
        }


    }
    const Comments=[
        {
           author:"Jack",
            body:"Weird"
    },
    {  
            author:"Bob",
            body:"Not Weird"                    

        }

]
 let NewPost= new post("Harry","Jones","Non Fiction",10,Comments,true);
 console.log(NewPost);


 PriceRange=[
    {
        Price:"Inexpensive",
        Range:function(price){
            if(price>=0 && price<=10){
                console.log("It is inExpensive");
            }

        }

    },
    {
        Price:"Expensive",
        Range:function(price){
            if(price>10){
                console.log("it is Expensive");
            }
        }
    }

 ]
 
 console.log(PriceRange);
