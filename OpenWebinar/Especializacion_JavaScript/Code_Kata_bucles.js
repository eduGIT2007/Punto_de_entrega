let fruit= ["orange", "Lemon", "grapes"] ;
let myOptions= new Set([ "watermelon","banana","orange"])
for(let elem of fruit){
    if(myOptions.has(elem)){
          console.log(elem);
        break;
    }else{
       console.log(elem);
        continue;
        
    }
    
}

/*
let fruit= new Set(["orange", "Lemon", "grapes"]) ;

for(let elem of fruit){
    console.log(elem)
}

---------------------------------
/*
let fruits={a:"orange",b:"lemon",c:"grapes"};
for(let elem in fruits){
    console.log(fruits[elem]);
}
----------------------

let limit = 3;

do {
    limit--;
} while (limit>0);

console.log("He acabado el bucle");
----------------------------------------

let enumeracion=[];

for(let i = 0; i<10;i++){
    enumeracion[i]=i+1;
}
console.log(enumeracion);


*/