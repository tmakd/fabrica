export default function calentar (maiz){
    if(maiz.tipo !== 'maiz')return {tipo:"plastico",estado:"derretido"};
    const aleatorio = Math.random();
    if(aleatorio <= .6){
        return {tipo:"pochoclo",estado:"normal"}
    }
    if(aleatorio > .6 && aleatorio < .75){
        return {tipo:"pochoclo",estado:"quemado"}
    }
    return {tipo:"maiz",estado:"quemado"}
}
