import {crearPochoclos} from "./utilidades/lineal";


const maiz = {tipo:"maiz",estado:"normal"};

const bolsitaDeMaiz = Array.from({length: 200}, (_) => maiz);


const pochoclos = crearPochoclos(bolsitaDeMaiz); // O(n)





console.log(`No llego a ser pochoclo: ${pochoclos.filter(pochoclo=>pochoclo.tipo ==='maiz').length }` );
console.log( `Total Pochoclos: ${pochoclos.filter(pochoclo=>pochoclo.tipo ==='pochoclo').length}`);
console.log('------');
console.log( `     Pochoclos Quemados: ${pochoclos.filter(pochoclo=>pochoclo.tipo ==='pochoclo' && pochoclo.estado ==='quemado').length}`);
console.log( `     Pochoclos Normales: ${pochoclos.filter(pochoclo=>pochoclo.tipo ==='pochoclo' && pochoclo.estado ==='normal').length}`);
