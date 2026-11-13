//Ejercicio 2
//Declaro el array e introduzco los numeros
let array=[];

for(let i=0;i<100;i++){

    let random=Math.floor(Math.random()*100);

    array[i]=random;

}

console.table(array);

//Establezco el filtro, en este caso sería del 10 al 47, son los números que se introducen
let array2=[];
let contador=0;

for(let i=0;i<array.length;i++){
    if(array[i]<47 && array[i]>10){
        array2[contador]=array[i];
        contador++;
    }
}

console.table(array2);