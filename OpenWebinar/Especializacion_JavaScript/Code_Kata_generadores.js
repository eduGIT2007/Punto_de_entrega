function* extractNumbre(attemps){
    for(let i =0;i<attemps;i++){
        yield Math.floor(Math.random()*91);
    }
}

let cpu=0;
let player=0;

//Tiradas Cpu
let cpuGenerator=extractNumbre(2);
cpu+=cpuGenerator.next().value;
cpu+=cpuGenerator.next().value;

//Tiradas player

let playerGenerator=extractNumbre(2);
player+=playerGenerator.next().value;
player+=playerGenerator.next().value;

console.log("CPU: "+cpu);
console.log("Player: "+player);

console.log(cpu < player ? "Gana player":"Gana CPU");