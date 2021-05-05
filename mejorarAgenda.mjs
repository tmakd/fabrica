import {ordenarContactos} from "./utilidades/logaritmica"
import * as contactos from "./agenda.json"


console.time('Tiempo de ejecucion:');
console.log(contactos.default.length);
// ordenarContactos(contactos.default);
console.timeEnd('Tiempo de ejecucion:');
