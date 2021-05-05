import {combinarVehiculos} from "./utilidades/cuadratica";

const camiones = [{marca:"VW"},{marca:"Mercedes"},{marca:"IVECO"}];

console.time('Tiempo de ejecucion:');

combinarVehiculos(camiones);

console.timeEnd('Tiempo de ejecucion:');



